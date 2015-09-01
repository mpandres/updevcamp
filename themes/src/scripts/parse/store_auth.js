var Parse = require('parse').Parse;
var URL = require('url');

var uLocal = URL.parse(window.location.href, true);
var sessionToken = uLocal.query.sessionToken;

if (typeof sessionToken === 'undefined') errorCb();

Parse.User.become(sessionToken).then(function (user) {
    var ref = (typeof uLocal.query.ref === 'undefined') ? '' : uLocal.ref.query.ref;
    window.location.href = '/' + ref;
}, errorCb);

function errorCb (error) {
    alert('Login with GitHub Failed.');
    window.location.href = '/';
    return;
}
