/**
 * Login With GitHub
 *
 * There will be four routes:
 * / - The main route will show a page with a Login with GitHub link
 *       JavaScript will detect if it's logged in and navigate to /main
 * /authorize - This url will start the OAuth process and redirect to GitHub
 * /oauthCallback - Sent back from GitHub, this will validate the authorization
 *                    and create/update a Parse User before using 'become' to
 *                    set the user on the client side and redirecting to /main
 * /main - The application queries and displays some of the users GitHub data
 *
 * @author Fosco Marotto (Facebook) <fjm@fb.com>
 */

/**
 * Load needed modules.
 */

var express = require('express');
var querystring = require('querystring');
var _ = require('underscore');
var Buffer = require('buffer').Buffer;

var keys = require('cloud/keys.js');

var app = express();

var githubClientId = keys.github.clientId;
var githubClientSecret = keys.github.clientSecret;
var githubRedirectEndpoint = 'https://github.com/login/oauth/authorize?';
var githubValidateEndpoint = 'https://github.com/login/oauth/access_token';
var githubUserEndpoint = 'https://api.github.com/user';

var TokenRequest = Parse.Object.extend("TokenRequest");
var TokenStorage = Parse.Object.extend("TokenStorage");

var restrictedAcl = new Parse.ACL();
restrictedAcl.setPublicReadAccess(false);
restrictedAcl.setPublicWriteAccess(false);

var staticRoute = 'http://updevcamp.com';

app.set('view engine', 'ejs');    // Set the template engine
app.use(express.bodyParser());    // Middleware for reading request body

// Generate a request token and redirect the browser to GitHub.
app.get('/authorize', function(req, res) {

  var tokenRequest = new TokenRequest();
  // Secure the object against public access.
  tokenRequest.setACL(restrictedAcl);
  tokenRequest.save(null, { useMasterKey: true }).then(function(obj) {
    res.redirect(
      githubRedirectEndpoint + querystring.stringify({
        client_id: githubClientId,
        state: obj.id
      })
    );
  }, function(error) {
    // If there's an error storing the request, render the error page.
    res.redirect(staticRoute + '/error');
  });

});

// OAuth Callback route.
app.get('/oauthCallback', function(req, res) {
  var data = req.query;
  var token;
  if (!(data && data.code && data.state)) {
    res.redirect(staticRoute + '/error');
    //res.render('error', { errorMessage: 'Invalid auth response received.'});
    return;
  }
  var query = new Parse.Query(TokenRequest);
  Parse.Cloud.useMasterKey();
  Parse.Promise.as().then(function() {
    return query.get(data.state);
  }).then(function(obj) {
    // Destroy the TokenRequest before continuing.
    return obj.destroy();
  }).then(function() {
    // Validate & Exchange the code parameter for an access token from GitHub
    return getGitHubAccessToken(data.code);
  }).then(function(access) {
    var githubData = access.data;
    if (githubData && githubData.access_token && githubData.token_type) {
      token = githubData.access_token;
      return getGitHubUserDetails(token);
    } else {
      return Parse.Promise.error("Invalid access request.");
    }
  }).then(function(userDataResponse) {
    var userData = userDataResponse.data;
    if (userData && userData.login && userData.id) {
      return upsertGitHubUser(token, userData);
    } else {
      return Parse.Promise.error("Unable to parse GitHub data");
    }
  }).then(function(user) {
    //res.render('store_auth', { sessionToken: user.getSessionToken() });
    res.redirect(staticRoute + '/api/store_auth?sessionToken=' + user.getSessionToken() );
  }, function(error) {
    if (error && error.code && error.error) {
      error = error.code + ' ' + error.error;
    }
    res.redirect(staticRoute + '/error');
    //res.render('error', { errorMessage: JSON.stringify(error) });
  });

});

/**
 * Attach the express app to Cloud Code to process the inbound request.
 */
app.listen();

/**
 * Cloud function which will load a user's accessToken from TokenStorage and
 * request their details from GitHub for display on the client side.
 */
Parse.Cloud.define('getGitHubData', function(request, response) {
  if (!request.user) {
    return response.error('Must be logged in.');
  }
  var query = new Parse.Query(TokenStorage);
  query.equalTo('user', request.user);
  query.ascending('createdAt');
  Parse.Promise.as().then(function() {
    return query.first({ useMasterKey: true });
  }).then(function(tokenData) {
    if (!tokenData) {
      return Parse.Promise.error('No GitHub data found.');
    }
    return getGitHubUserDetails(tokenData.get('accessToken'));
  }).then(function(userDataResponse) {
    var userData = userDataResponse.data;
    response.success(userData);
  }, function(error) {
    response.error(error);
  });
});

/**
 * This function is called when GitHub redirects the user back after
 *   authorization.  It calls back to GitHub to validate and exchange the code
 *   for an access token.
 */
var getGitHubAccessToken = function(code) {
  var body = querystring.stringify({
    client_id: githubClientId,
    client_secret: githubClientSecret,
    code: code
  });
  return Parse.Cloud.httpRequest({
    method: 'POST',
    url: githubValidateEndpoint,
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'Parse.com Cloud Code'
    },
    body: body
  });
}

/**
 * This function calls the githubUserEndpoint to get the user details for the
 * provided access token, returning the promise from the httpRequest.
 */
var getGitHubUserDetails = function(accessToken) {
  return Parse.Cloud.httpRequest({
    method: 'GET',
    url: githubUserEndpoint,
    params: { access_token: accessToken },
    headers: {
      'User-Agent': 'Parse.com Cloud Code'
    }
  });
}

/**
 * This function checks to see if this GitHub user has logged in before.
 * If the user is found, update the accessToken (if necessary) and return
 *   the users session token.  If not found, return the newGitHubUser promise.
 */
var upsertGitHubUser = function(accessToken, githubData) {
  var query = new Parse.Query(TokenStorage);
  query.equalTo('githubId', githubData.id);
  query.ascending('createdAt');
  var password;
  // Check if this githubId has previously logged in, using the master key
  return query.first({ useMasterKey: true }).then(function(tokenData) {
    // If not, create a new user.
    if (!tokenData) {
      return newGitHubUser(accessToken, githubData);
    }
    // If found, fetch the user.
    var user = tokenData.get('user');
    return user.fetch({ useMasterKey: true }).then(function(user) {
      // Update the accessToken if it is different.
      if (accessToken !== tokenData.get('accessToken')) {
        tokenData.set('accessToken', accessToken);
      }
      /**
       * This save will not use an API request if the token was not changed.
       * e.g. when a new user is created and upsert is called again.
       */
      return tokenData.save(null, { useMasterKey: true });
    }).then(function(obj) {
		password = new Buffer(24);
		_.times(24, function(i) {
			password.set(i, _.random(0, 255));
		});
    password = password.toString('base64');
		user.setPassword(password);
		return user.save();
    }).then(function(user) {
		return Parse.User.logIn(user.get('username'), password);
    }).then(function(user) {
     // Return the user object.
      return Parse.Promise.as(user);
    });
  });
}

/**
 * This function creates a Parse User with a random login and password, and
 *   associates it with an object in the TokenStorage class.
 * Once completed, this will return upsertGitHubUser.  This is done to protect
 *   against a race condition:  In the rare event where 2 new users are created
 *   at the same time, only the first one will actually get used.
 */
var newGitHubUser = function(accessToken, githubData) {
  var user = new Parse.User();
  // Generate a random username and password.
  var username = new Buffer(24);
  var password = new Buffer(24);
  _.times(24, function(i) {
    username.set(i, _.random(0, 255));
    password.set(i, _.random(0, 255));
  });
  user.set("username", username.toString('base64'));
  user.set("password", password.toString('base64'));
  // Sign up the new User
  return user.signUp().then(function(user) {
    // create a new TokenStorage object to store the user+GitHub association.
    var ts = new TokenStorage();
    ts.set('githubId', githubData.id);
    ts.set('githubLogin', githubData.login);
    ts.set('accessToken', accessToken);
    ts.set('user', user);
    ts.setACL(restrictedAcl);
    // Use the master key because TokenStorage objects should be protected.
    return ts.save(null, { useMasterKey: true });
  }).then(function(tokenStorage) {
    return upsertGitHubUser(accessToken, githubData);
  });
};
