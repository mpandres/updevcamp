+++
date = "2015-11-03T11:23:08+08:00"
title = "The Twitter"
tech = "Project 1b"
tracks = ["Web"]
authors = ["arian"]
notable = true

+++

{{% notice %}}
### Due to time constraints, we haven't fully discussed SQL and databases yet in our last DevCamp Session. Please consult any of the Staff through Slack/Facebook if you have any questions.*
{{% /notice %}}

\*__We've compressed something that was regularly discussed for about 3-4 sessions into one__

# Getting Started

First, let's install flask. If you've followed the python installation file by dominic [here](/resources/python), you should have `Python 3.4+` installed. Python 3.4 comes installed with `pip`, the package manager we can use to install `Flask`.

Install Flask by doing the following command:

~~~bash
python -m pip install https://github.com/mitsuhiko/flask/tarball/master
~~~

Note that you might have python aliased as `python3`. As well, you might have file permission errors that prevent you to install flask. If so, prepend `sudo` on the above command or run your command prompt as administrator.

Unlike our first project, we're providing distribution code to kickstart development of your project. Navigate to this [link](/media/tracks/web/project-2.zip) to download the distribution code.

Extract the archive and navigate to the distribution code by typing `cd (dir-name)`, where our flask app awaits. Inside you'll see a couple of files, which looks a bit like our `mvc` examples, but is actually powered by flask.

## Twitter

If you haven't heard of Twitter _(seriously?)_, twitter is a social media website where users can compose and post 'tweets', allowing their followers to see their posts on their timeline.

You're about to implement CSITwit, a simple twitter clone where users can register, login, compose and post tweets.

In fact, I want to go ahead and create a tweet. Let's login to csitwit:

{{< figure src="/media/tracks/web/csitwit.png" >}}

And then, after typing out my tweet, I can now see it on my timeline:

{{< figure src="/media/tracks/web/csitwit2.png" >}}

Thankfully, the functionality of Twitter is actually quite small, and even more thankfully, we've provided boilerplate code for you!

Let's go ahead and take a look at the code you've cloned.

# Explanation

Navigate over to the distribution code. You'll note that there are a couple of top level files.

## \__init__.py

Seems to be an empty file. An \__init__.py just defines a python folder as a package/module - you can ignore it for now.

## csitwit.py

This file seems more interesting. It's the name of our app and it seems to be setting up calling some initialization functions as well as setting up our `router`.

Turns out `csitwit.py` is our app's main entry point, calling everything our app needs to start. Let's go and take a look at `router` next.

## router.py

Inside router.py is a couple of imports, and one big function named `set_router`, which we've seen is being called by `csitwit.py`. Let's take a look at it closely:

~~~python
    # we're setting g.user as the user in the current session
    @app.before_request
    def before_request():
        g.user = None
        if 'user_id' in session:
            # if there is a user_id in session
            # select it and set g.user to it
            g.user = functions.query_db('select * from user where user_id = ?',
                              [session['user_id']], one=True)
~~~

The first chunk of `set_router` seems to be just defining a before_request method. We are wrapping that function inside a `decorator`, allowing our app to know what to do on that particular instance (in this case, we run the function every time we return from a request). Inside, it checks if 'user_id' is in session.

Turns out we're saving the 'user_id' in the current session, which we use to check if the user is logged in. Here we check if the 'user_id' is in session, and if so, we set the `g.user` variable to the return function of our database query.

~~~python
    ### Our Routes ###

    # timeline routes
    app.route('/')(timeline.index)
    app.route('/public')(timeline.public)
    app.route('/<username>')(timeline.user)

    # follow routes
    app.route('/<username>/follow')(follow.follow_user)
    app.route('/<username>/unfollow')(follow.unfollow_user)

    # tweet routes
    app.route('/add_message', methods=['POST'])(tweet.add_message)

    # user routes
    app.route('/login', methods=['GET', 'POST'])(user.login)
    app.route('/register', methods=['GET', 'POST'])(user.register)
    app.route('/logout')(user.logout)
~~~

The second half of our `set_router` code seems to be just a collection of 'routes'. Indeed, these lines of code is setting up the `routes` of our page, and their specific handlers/controllers.

For example, we define `/public` to use the `timeline.public` function to render the page - that is to say, if our user navigates to `localhost:5000/public`, we should use the `timeline.public` function.

Some of the routes have additional parameters. For example, `/add_message` is defined like so:

~~~python
  app.route('/add_message', methods=['POST'])(tweet.add_message)
~~~

While it might seem a bit more complicated, do note that the only thing it does is say that particular app route should also accept `POST` methods - indeed, it makes sense for `/add_message` to accept data through a `POST` request.

Before we get started, let's take a look first at a handler/controller. It seems that `app.route('/logout')(user.logout)` is the route that defines our logout handler. We're passing `user.logout` to it, so we now know that there should be a function `logout` inside our `user` controller.

Note that from the third line of `router.py` we're importing `user` from our `controllers`, so we know that we can access the file from the controllers folder:

~~~python
from controllers import follow, timeline, tweet, user
~~~

## user.py

Let's go ahead and navigate to `controllers/user.py`. Like our file name suggests, this file is the controller responsible for user functions - `login, logout, and register`. Inside the file, you'll see a couple of functions, but let's skim over those parts first and take a look at our `logout` function.

~~~python
def logout():
    """Logs the user out."""
    flash('You were logged out')
    session.pop('user_id', None)
    return redirect(functions.url_for('/public'))
~~~

Our `logout` function calls `flash` which shows a flash message on our page (more on that in a moment). What's interesting though is the last two lines. It seems that we're calling `session.pop` on the user_id, removing (popping) the session away, effectively logging the user out. And then, we redirect away from the page, by passing the return value of `functions.url_for('/public')`, which, as you might have guessed, navigates the user to `/public`.

Note that `functions` is again, another python file that we've defined (imported from helpers). You can take a look at it from `helpers/functions.py` - it defines a couple of helper functions (like `url_for`) as well as opens the connection to our database.

Let's now take a look at the `login` function of our controller:

~~~python
def login():
    """Logs the user in."""
    if g.user:
        return redirect(functions.url_for('/'))
    error = None
    if request.method == 'POST':
        user = functions.query_db('''select * from user where
            username = ?''', [request.form['username']], one=True)
        if user is None:
            error = 'Invalid username'
        elif not check_password_hash(user['pw_hash'],
                                     request.form['password']):
            error = 'Invalid password'
        else:
            flash('You were logged in')
            session['user_id'] = user['user_id']
            return redirect(functions.url_for('/'))
    return render_template('login.html', error=error)
~~~

Eek, this is scary! Bare with me for a moment though, as we walk through the code.

The first 2 lines just checks if `g.user` is defined (if the user is already logged in). If so, we don't need to log in anymore, and indeed, we just redirect the user to his/her timeline in the homepage.

Then, we do a `request.method` check to see if it's a POST request, not unlike our `mvc` example. That is to say, if our method is a `POST` method, we know that the user is indeed trying to login (and has submitted a form)

The next line is a bit more involved. It's calling the `query_db` function we have defined we've defined in our `functions` helper, calling an SQL statement. Basically, it asks to `select` every attribute `*` `from` our `user` table `where` the `username` is equal to `?`. The `?` is then interpolated (replaced) by our parameter, which, in this case, is the username from our request form (`request.form['username']`). Note that we're passing it inside an array, as we might want to have multiple items we want to interpolate (like say, searching for multiple fields). Note also that the last parameter is `one=True`, which tells our query statement to just search for one value (since we only need one user).

The next line checks `if user is None`, and just returns an `invalid username` error. If not, it calls `check_password_hash` to check if the password inputted and the password in the database is equal. If not, it returns an error.

When it is _indeed_ equal, note that we're setting the session of the user `session['user_id']` to the `user_id` in our database, effectively logging in the user. We then redirect the user to the homepage.

Now, we got out of our if statement. Note that the next line just renders our `login` template - this makes sense - we should just show our `login` template if our request is not a `POST` method (since the user hasn't logged in yet) or also return it if there's an `error` (note that the code falls through to the render_template call if it doesn't redirect sucessfully)

Our `render_template` function just renders our `login.html` file, so let's take a look at that:

## login.html

Our `login.html` file is just a jinja template, that extends from our `layout.html` file. It's the standard page, and note that our form's action is empty, which just means that the action should go to the same route/page (since our handler is also in login, this makes sense).

~~~html
{% extends "layout.html" %}
{% block title %}Sign In{% endblock %}
{% block body %}
  <h2>Sign In</h2>
  {% if error %}<div class="error"><strong>Error:</strong> {{ error }}</div>{% endif %}
  <form action="" method="post">
    <dl>
      <dt>Username:
      <dd><input type="text" name="username" size="30" value="{{ request.form.username }}">
      <dt>Password:
      <dd><input type="password" name="password" size="30">
    </dl>
    <div class="actions"><input type="submit" value="Sign In"></div>
  </form>
{% endblock %}
~~~

Note how we set a value to our username field - we set it to our `request.form.username` (the username set last request) so as to enable our app to 'remember' the username. Note how we check errors with `if error` - remember that we're passing an `error` variable if the login fails for any reason. Let's take a look at our layout.html file next.

## layout.html

~~~html
<!doctype html>
<title>{% block title %}Welcome{% endblock %} | CSITwit</title>
<link rel="stylesheet" type="text/css" href="{{ url_for('static', filename='style.css') }}">
<div class="page">
  <h1>CSITwit</h1>
  <div class="navigation">
  {% if g.user %}
    <a href="/">my timeline</a> |
    <a href="/public">public timeline</a> |
    <a href="/logout">sign out [{{ g.user.username }}]</a>
  {% else %}
    <a href="/public">public timeline</a> |
    <a href="/register">sign up</a> |
    <a href="/login">sign in</a>
  {% endif %}
  </div>
  {% with flashes = get_flashed_messages() %}
    {% if flashes %}
      <ul class="flashes">
      {% for message in flashes %}
        <li>{{ message }}
      {% endfor %}
      </ul>
    {% endif %}
  {% endwith %}
  <div class="body">
  {% block body %}{% endblock %}
  </div>
  <div class="footer">
    CSITwit &mdash; Flask Application, DevCamp 2nd Project
  </div>
</div>
~~~

It seems a bit long, but it's actually just our standard html page.

- In line 3, we're importing our css file `style.css`. You can take a look at it at `static/style.css`, and you'll see that a few selectors have already been defined.
- From line 7 to 15 is an `if` block - we're checking the user is logged in, and we change the url links. If the user is logged in, we turn it to his homepage and logout links, but if not, we turn the links to register and login links.
- The next `jinja` block just iterates over our `flash` messages. Remember how we called `flash` messages back in logout? Well, it seems that if we want to show a 'flash' message (a short notification), we can do so by adding it here.
- We're then using `block body` to inject the template that we have.

Phew, that was a lot. Help yourself to a cute dog image.

{{< figure src="/media/tracks/web/cutedog.jpg" >}}

## user.py/schema.sql

Alright, what you've noticed is that we have a `login` and `logout` function in our page, but no `register` function! Well it turns out that our `database schema` is defined through `schema.sql` so let's take a look at that.

~~~sql
drop table if exists user;
create table user (
  user_id integer primary key autoincrement,
  username text not null,
  email text not null,
  pw_hash text not null
);

drop table if exists follower;
create table follower (
  who_id integer,
  whom_id integer
);

drop table if exists message;
create table message (
  message_id integer primary key autoincrement,
  author_id integer not null,
  text text not null,
  pub_date integer
);

INSERT INTO user (username, email, pw_hash) VALUES ('person', 'person@gmail.com', 'pbkdf2:sha1:1000$L1UfsRgW$d780bf74e8432301bbdd361ee5ade12e842820e3')
~~~

While the syntax might seem a bit cryptic, note that the first three `create` blocks just create particular `tables` where we can insert our data. Indeed, the `create table user` command creates a `database table` named `user`, with the columns defined inside its parenthesis.

- `user_id integer primary key autoincrement` - user_id will be our column key, and it's of type integer. Basically, it's a unique id that we can use to tell a unique user from.
- `username text not null` - username, again will be our column key, this time of type text (which makes sense, as our username would be a text/string. Note that we're using a `not_null` constraint - we don't want to add users without a username!
- the next two lines are self explanatory - it's creating `email` and `pw_hash` columns in our user table. Note that `pw_hash` is the hashed password of our user.

# What to Do

## register

Any who, now that we have an idea of how the user table is defined, it's time to code! Let's add a basic, but very important feature: the ability to register!

Go ahead and copy our `templates/login.html` file, to `templates/register.html`

Then open up `register.html` with `atom` and add two new fields, `E-mail` and another `Password` field. We will use the additional `password` field type so that we can prompt users to type in their password twice and discourage mistakes. Finally, change the buttons and flavor text to say "Sign Up" instead of "Sign In".

Make sure to change the `name` attribute of your input, as that is how we can distinguish it from our code.

~~~html
      <dt>E-Mail:
      <dd><input type="text" name="email" size="30" value="{{ request.form.email }}">
~~~

Then, again using `atom`, navigate to `controllers/user.py` and define a new function `register`. Create it anywhere after our import statements, taking care not to edit our `login` and `logout` functions! Go ahead and peruse the template we have here:

~~~python
def register():
    """Registers the user."""
    if g.user:
        return redirect(functions.url_for('/'))
    error = None
    if request.method == 'POST':
        if not request.form['username']:
            error = 'You have to enter a username'
        elif not request.form['email'] or \
                '@' not in request.form['email']:
            error = 'You have to enter a valid email address'
        elif #TODO:
            error = 'You have to enter a password'
        elif #TODO:
            error = 'The two passwords do not match'
        elif functions.get_user_id(request.form['username']) is not None:
            error = 'The username is already taken'
        else:
            db = functions.get_db()
            db.execute(#TODO)
            db.commit()
            flash('You were successfully registered and can login now')
            return redirect(functions.url_for('login'))
    return render_template('register.html', error=error)
~~~

It's now time to tackle those `TODO`s! To give you some hints:

- You'll want to inform the user if he/she has not entered a password. Note that is our first #TODO
- If the two passwords of the user doesn't match, we need to inform them too.
- Note that we've taken care of checking if the email and username is defined, as well as checking if the email is valid (by checking if there is an `@` symbol in it)
- Once all of the condition/input validation is done, we now want to register the user. We do this by executing an SQL statement. To insert a new user, you might find this SQL statement useful:

~~~sql
'''insert into user (username, email, pw_hash) values (?, ?, ?)''',
[request.form['username'], request.form['email'],
 generate_password_hash(request.form['password'])]
~~~

which is to say, `insert`s into our `user` table the following values `username`, `email`, and the generated password hash.

Once the user is logged in, we set a flash message, and redirect him/her to the login page where he can now login!

All done? How about you test it out! Navigate to `//localhost:5000/register` and try to register for a new username! If you are redirected to the login page, then congrats, you've probably done right! Confirm that you are really registered by logging in with your credentials.

## tweet

Now it's time to allow our users to post tweets! Thankfully, we've provided some boilerplate code for you as well.

Navigate over to `templates/timeline.html` and you'll see our html timeline page. Skim over the first parts, and take a look at line 27, which has a "What's on your mind?" prompt. I bet that's where we can put our tweet box!

What data exactly do we need to store for a tweet? First thing that comes to mind probably is a text field where which holds the actual tweet message itself. Apart from that, we probably want a field for the user ID so that we know which user tweeted what tweet. We probably also want to add a timestamp to our tweets, so that we can know what tweets to show first in our timeline. That is to say, we need three fields, `user_id`, `message`, `timestamp`. That sounds pretty good, and if you take a look at the schema over at `schema.sql`, note that our `message`/`tweet` table is defined the same way (though not with the same names).

Alright, let's put this conceptual knowledge to practical use and enable our users to compose some tweets!

- Create a form that sends a text (`<input type="text"`) to our `/add_message` route. Note that we've defined our `/add_message` route already in our `router.py` file.
- Now that you've created a form, we now need to handle it on our backend. Check which handler is being used by our router to handle the message, and go to that file.
- You should see an `add_message` function in it, which supposedly allows the user to create a tweet, but still has an empty `db.execute` statement. Take a look then at the statement below, which is which inserts the tweet to our message table, and inject the necessary parts needed by our backend:

~~~python
db.execute('''insert into message (author_id, text, pub_date)
  values (?, ?, ?)''', (session['user_id'], request.form['text'],
                        int(time.time())))
~~~

After you've done this, you should now be able to compose a tweet over at the tweet box!

## timeline

What you'll notice is that we can now compose tweets, but we can't actually see them! Doh!

We know that our timeline page's view is `timeline.html`, so let's take a quick look at that. Indeed, skimming over this file, there is not yet any feature that allows us to view the messages.

However, note the `ul` tag with class `messages` near the end. I bet that's where we can put our tweets! If you take a look at our page's handler `controllers/timeline.py`, you'll note that our messages/ tweets are already being sent to the template as a `message` variable.

~~~python
def index():
    """Shows a users timeline or if no user is logged in it will
    redirect to the public timeline.  This timeline shows the user's
    messages as well as all the messages of followed users.
    """
    if not g.user:
        return redirect(functions.url_for('/public'))
    query_messages = functions.query_db('''
        select message.*, user.* from message, user
        where message.author_id = user.user_id and (
            user.user_id = ? or
            user.user_id in (select whom_id from follower
                                    where who_id = ?))
        order by message.pub_date desc limit ?''',
        [session['user_id'], session['user_id'], PER_PAGE])
    return render_template('timeline.html', messages=query_messages)
~~~

Note that `query_messages` is just set as the return value of our database query, where we select our tweets. We then send the messages/tweets to our `timeline.html` template. That means our data is already there, but it's not just presented yet!

Navigate now to `timelines.html` again (for the last time), and create a view for our timeline:

- In our div with class messages (near the end) create a for loop construct that will loop over our `messages` variable. Note that `jinja`'s `for loop` is defined like so:

~~~python
{% for message in messages %}

{% endfor %}
~~~

Inside our for loop block, let's insert the user's profile image (via gravatar). We can do so by using filters:

~~~python
{% for message in messages %}
    <li><img src="{{ message.email|gravatar(size=48) }}"><p>
{% endfor %}
~~~

Note how we're passing the poster's email to our gravatar function (defined in `functions.helpers`)

Let's now insert the user's username like so: 

~~~python
{% for message in messages %}
    <li><img src="{{ message.email|gravatar(size=48) }}"><p>
    <strong>{{ message.username }}</strong>
{% endfor %}
~~~

Note that we're accessing the poster's username through `message.username`, since we're composing the author and message data (and hence we can access the poster's attributes directly)

Let's make it a little bit more fancy by actually linking to the user's profile:

~~~python
{% for message in messages %}
    <li><img src="{{ message.email|gravatar(size=48) }}"><p>
    <strong><a href="{{ url_for('user', username=message.username)}}">{{ message.username }}</a></strong>
{% endfor %}
~~~

Note how we've just used `url_for` to generate the url, and then use a classic `href` link to link to that profile.

We should also handle the case if there are no messages yet. Quite handily, Jinja allows us to do that quite easily with an else construct from our for loop:

~~~python
{% for message in messages %}
    <li><img src="{{ message.email|gravatar(size=48) }}"><p>
    <strong><a href="{{ url_for('user', username=message.username)}}">{{ message.username }}</a></strong>
{% else %}
  <li><em>There's no message so far.</em>
{% endfor %}
~~~

Then let's insert the `pub date` on the tweet, so that we can see when it was published:

~~~python
{% for message in messages %}
    <li><img src="{{ message.email|gravatar(size=48) }}"><p>
    <strong><a href="{{ url_for('user', username=message.username)}}">{{ message.username }}</a></strong>
    <small>&mdash; {{ message.pub_date|datetimeformat }}</small>
{% else %}
  <li><em>There's no message so far.</em>
{% endfor %}
~~~

_Finally_, and this time it's on you, add the actual tweet's message inside. Remember that you can access the message with `{{message.text}}`, so just insert that in the proper place in our for loop there.

Congratulations! You've now created a basic clone of twitter!

## extra feature

and now, for those particularly adventurous. (optional). You'll note that our twitter site also has a followers feature. Modify the site so that:

- Users can see how many followers a user has.

# Check out

To consider it done, check your app for a bit:

- Can I register on the site?
- Does it handle corner cases/invalid input properly?
- Are my tweets showing up on the page?

# How to Submit

Once you have the site done, let's get it online (again) so that you can share it with everyone! (Welp, todo :P)

Finally, head over again to [http://submit.updevcamp.com](http://submit.updevcamp.com) where a short form awaits. Once you've submitted the form and the source code, you are done!
