+++
date = "2015-11-03T11:21:00+08:00"
title = "Python/CGI"
tech = "Week 2a"
tracks = ["Web"]
authors = ["arian"]

+++

# Python Basics

We went off last time learning a new language, HTML, a markup language used to make webpages. Using Cascading Style Sheets (CSS), we designed webpages to create your very own [landing page](15a-project1.md).

One thing to note about the languages we learned last time is that neither of them are programming languages - neither of them have logical constructs that we are comfortable with (`if`, `for`, etc). This time, we'll learn an actual programming language, Python.

The difference between _static_ webpages (like your landing page) and a _dynamic_ webpage (like, say twitter) is that the latter changes - indeed, twitter's homepage would change depending on the new tweets. How would we create something like twitter using HTML? Would we simply create a __new__ HTML page for every single update we have?

Well, we could do that, but we could do a little bit smarter. Instead of typing our HTML page for every twitter user's page, we can use a programming language (such as Python) to _dynamically_ create webpages for us. Since we know that an HTML page is just a big bunch of text (which in turn, is just a string) we can actually use the very simple function `print` to generate webpages in python!

Python is an interpreted language, meaning our source code is run as-is by our interpreter without compilation.

Go ahead and try creating a new python file. Open a terminal, and type in `atom hello.py`:

~~~python
print("hello, world")
~~~

We can then now do `python3 hello.py` (or just `python hello.py`) to run it. If you see "hello, world" then congrats, you've successfully created a python program!

Of course, let's do something more interesting now than just printing hello world. Turns out we can forgo without typing `python` explicitly by using what's called a `shebang` line. Create a new file, and instead of naming it `hello.py`, just name it as `hello`:

~~~python
#!/usr/bin/python
print("hello, world")
~~~

The 1st line `#!/usr/bin/python` is what's called a shebang line. It tells our operating system what interpreter to use to run our program. Note that it just details the path to our interpreter, so on Windows, a shebang line might look something like this:

_Windows_
~~~python
#!C:\Python34\python.exe
print("hello, world")
~~~

Save this file (again, just as `hello` without a file extension). Then, run it in our terminal window:

~~~bash
~: ./hello
permission denied: ./hello
~~~

You're most likely going to see a "Permission denied" error if you try to run your program like so. Turns out operating systems don't run executables willy-nilly (for good reason, it ensures only trusted files can run) and we need to set our file as executable.

We can fix this by using `chmod`, which _Changes the mode_ of our file. Let's allow everyone to be able to execute the file:

~~~bash
~: chmod a+x hello
~: ./hello
hello, world
~~~

Our program now runs as expected. 

_Windows_

On windows, we use the `icalcs` utility to achieve the same effect:

~~~bash
~: icacls hello /g everyone:F
~: ./hello
hello, world
~~~

To understand python more, feel free to peruse this [tutorial](/resources/python) by Dominic.

# A Programming Language for the Web

Now that you have a good understanding of python, let's try using it to generate web content.

{{% notice %}}
### Notice: You can grab this week's distribution code here: https://github.com/Secretmapper/updevcamp-session-2-dist

### You can click the "Download ZIP" button to download the files.
{{% /notice %}}

## Forms and CGI

For years, UP Diliman has been using it's homegrown registration system [(CRS)](https://crs.upd.edu.ph) for registering classes. Students need not to fill out paper forms anymore, and slots for classes are assigned automatically in what's known as batch runs. In 2013, (or some year around that) UP decided to change the fully functional CRS to the abhorrent looking [UP SAIS](https://sais.up.edu.ph/).

{{< figure src="/media/tracks/web/sais.png" caption="Bask in the site's design!" >}}

Your landing page designs probably look better.

Anyway, here we've recreated a simple Class Registration website to mimic a simple 'registration system'. Let's take a look at `crs.py`:

{{< figure src="/media/tracks/web/crs-reg.png">}}

Notice that it has a simple form that allows us to take input. Let's try filling out the form and see what happens.

{{< figure src="/media/tracks/web/crs-reg2.png">}}

- First thing to note is the URL has changed - from `crs.py`, it went to `register.py`.
- The page seems to have known our input and showed it on the page.
- Also notice that our URL doesn't include queries as strings (like `?q=bunny` in our last session's example)

So let's go ahead and take a look at the source code for `crs-reg.py`:

~~~python
#!/usr/local/bin/python3
import cgi

print("Content-type: text/html")

print('''
<!DOCTYPE html>
<html lang="en">
<head>
  <title></title>
  <link rel="stylesheet" href="/pure.css">
</head>
<body>
  <h1>Class Registration</h1>
  <form action="register.py" method="POST" class="pure-form pure-form-stacked">
    <label>Name</label>
    <input type="text" name="name"/>
    <label>Class</label>
    <select name="class">
      <option value=""></option>
      <option value="CS 11">CS 11</option>
      <option value="CS 21">CS 21</option>
      <option value="CS 32">CS 32</option>
    </select>
    <input type="submit" value="Go" class="pure-button pure-button-primary"/>
  </form>
</body>
</html>
''')
~~~

Welp! Apart from the first three lines, it's actually just one BIG print statement that just prints our html page. Let's take it in line by line:

~~~python
#!/usr/local/bin/python3
~~~

This is a shebang line that we've introduced a while ago.

~~~python
import cgi
~~~

This is new. `import` is like C's `require` in that it allows us to 'copy-paste' previously written code to our current file.

It turns out that `cgi` (Common Gateway Interface) is an environment for web servers to interface with executable programs installed on a server. In simple terms, while an `HTTP` server handles HTTP requests (by say returning an HTML file), `CGI` allows our http server to run executable programs (in this case, python) to dynamically create our HTTP response.

~~~python
print("Content-type: text/html")
~~~

The third line just prints our header, telling the browser that, "Browser, get ready, I'm about to send you an HTML file"

And indeed, the big remaining print statement just prints our HTML file.

You can try running `crs.py` on your computer. Go ahead and navigate to the distribution code in your terminal. `cd` into the form folder, and you should see a `cgi-bin` folder inside of it, as well as a `pure.css` file.

As we've used last time to spawn an `http` server, we can use python to spawn a `cgi` server. Go ahead and run the following in your terminal (make sure you are in the `form` folder!)

~~~bash
~: python -m http.server --cgi
~~~

_(Remember that python could be python3 in your machine)_

This will spawn a CGI capable server on your machine.

{{< figure src="/media/tracks/web/cgi.png">}}

Go head to `localhost:8000` on chrome, and you should see the following page:

{{< figure src="/media/tracks/web/dir-list.png">}}

So it just shows us a directory listing of our folder, showing the files where we ran our http server. Navigate to `cgi-bin` by clicking the link. You should now see an ugly page that details "Error response" 403.

Turns out a cgi server is a bit dumb in that it can't automatically route pages itself, and that we need to explicitly type the page we're interested in. Since we know from our file that the page we're looking for is named `crs.py`, we can go to that page by typing in the URL:

`localhost:8000/cgi-bin/crs.py`

Once there, you should see another Permission Denied 403 error. Don't lose heart, we're in the home stretch! We've already faced a "permission denied" error before, and we can fix it via the same way. Open your terminal (create a new tab so that you don't have to renavigate to the directory), and run `chmod` or `icacls` again. Consult how we did it earlier.

Since we will want to run all the files in the distribution code, it might be better to give permission to all the files in the folder. We can to that by typing:

~~~bash
chmod -R a+x *
~~~

We add the `-R` flag (recursive) to recursively `chmod` all files within the directory.

On windows, we can achieve the same thing with:

~~~bash
icalcs 'cgi-bin\*' /t /g everyone:F
~~~

Once you've run this command, navigate to `localhost:8000/cgi-bin/crs.py` again, and you should see the same registration page that we had earlier. Try sending a form request yourself, and play around with the page.

Let's investigate the html file that's being printed by our python file.

~~~html
print('''
<!DOCTYPE html>
<html lang="en">
<head>
  <title></title>
  <link rel="stylesheet" href="/pure.css">
</head>
<body>
  <h1>Class Registration</h1>
  <form action="register.py" method="POST" class="pure-form pure-form-stacked">
    <label>Name</label>
    <input type="text" name="name"/>
    <label>Class</label>
    <select name="class">
      <option value=""></option>
      <option value="CS 11">CS 11</option>
      <option value="CS 21">CS 21</option>
      <option value="CS 32">CS 32</option>
    </select>
    <input type="submit" value="Go" class="pure-button pure-button-primary"/>
  </form>
</body>
</html>
''')
~~~

This is our generic HTML page, but what's interesting is line 10, which is a form action that sends the information to "register.py" with a `post` method. `get` puts our parameters in the URL, `post` sends it without adding it in the URL.

Since we now know that `register.py` is where our information is send, let's look at that next:

~~~python
#!/usr/local/bin/python3
import cgi
print("Content-type: text/html")

form = cgi.FieldStorage()

print('''
<html>
    <head>
      <title>CSI CGI</title>
    </head>
    <body>
''')

print("<p>Form</p>")
print("<pre>")
for key in form.keys():
    value = form.getvalue(str(key))
    print(key)
    print(value)
    print("\n")
print("</pre>")

print('''
    </body>
</html>
''')
~~~

Again, our first three lines is our `shebang`, `import`, and `content type` statements, just like in our `crs.py`. Turns out that we need them to generate cgi capable scripts.

Line 9 has something interesting.

~~~python
form = cgi.FieldStorage()
~~~

So we seem to be calling a method 'FieldStorage()' from `cgi`. `FieldStorage()` is a [dictionary](http://www.tutorialspoint.com/python/python_dictionary.htm) (something akin to a hash table) that contains the data that has been sent through `POST`/`GET` requests.

~~~python
print('''
<html>
    <head>
      <title>CSI CGI</title>
    </head>
    <body>
''')
~~~

Here we seem to be printing a cut off HTML page! Indeed, we are only printing the head elements, as well as the opening body tag. Turns out we'll be printing the content _dynamically_ next:

~~~python
print("<p>Form</p>")
print("<pre>")
for key in form.keys():
    value = form.getvalue(str(key))
    print(key)
    print(value)
    print("\n")
print("</pre>")
~~~

We're printing a few HTML tags, but notice that we're also using a `for loop` to loop over our `form.keys()`. Notice how we now effectively introduced programming constructs in HTML (or more accurately, use a programming language to generate our html page)

So indeed, `form.keys()` just returns an array containing the keys of our form. We iterate over it (with `for key in form.keys()`) and get the value with `form.getvalue(str(key))`, and then print the key, value pair. This image should show the correspondence between our code and the output:

{{< figure src="/media/tracks/web/crs-reg3.png">}}

One thing you should notice (as you've seen the source code) is that `register.py` just acceps the form input and prints it out, without validating anything. Try 'registering' without a name, and you'll see the page without a name!

We've created a smarter version of the page with `crs2.py`. Navigate there through:

`http://localhost:8000/cgi-bin/crs2.py`

It's the same page, and if you try to register, it will do the same thing. However try 'registering' with one empty input, and you'll get _invalid input_ as the message back!

If you open up `crs2.py`, you'll see that it's largely the same as `crs.py`, but with the form action sent to `register2.py`. So let's open up that file:

~~~python
#!/usr/local/bin/python3
import cgi
print("Content-type: text/html")

form = cgi.FieldStorage()

print('''
<html>
    <head>
      <title>CSI CGI</title>
    </head>
    <body>
''')


if('name' in form and 'class' in form):
    print("<p>Right Form</p>")
    print("<pre>")
    for key in form.keys():
        value = form.getvalue(str(key))
        print(key)
        print(value)
        print("\n")
    print("</pre>")
else:
    print('invalid input!')

print('''
    </body>
</html>
''')
~~~

It's largely the same page, but note that we've introduced an if statement. Indeed, we are now checking if both the name and the class is in the form on line 16, and only then do we print the form! Else, we print _invalid input_

- Note that checking if something is in an array in python is terribly easy: we use the `in` operator. So in this case, we do, `'name' in form` to check if the key exists in our form.

Let's now go to `crs3.py` which is our last example for this. Try registering, and you'll note that somehow, the result look of the page has changed:

{{< figure src="/media/tracks/web/crs-reg4.png">}}

Indeed, more interestingly, the url of our page still says `crs3.py` - it seems that we have not redirected to any other page! If we now try to submit an invalid input, we see a much better looking page:

{{< figure src="/media/tracks/web/crs-reg5.png">}}

So it seems that our page is doing some pretty nifty stuff now! Let's take a look at how it works and open crs3.py:

~~~python
#!/usr/local/bin/python3
import cgi
import os

form = cgi.FieldStorage()

print("Content-type: text/html")

# print out our head
print('''
<!DOCTYPE html>
<html lang="en">
<head>
  <title></title>
  <link rel="stylesheet" href="/pure.css">
</head>
<body>''')

# if we have the name and class in our parameters,
# then we know it's a successful form
if('name' in form and 'class' in form):
    print("<p>Right Form</p>")
    print("<pre>")
    for key in form.keys():
        value = form.getvalue(str(key))
        print(key)
        print(value)
        print("\n")
    print("</pre>")
else: #else
    warning = ''
    if os.environ['REQUEST_METHOD'] == 'POST':
        # let's set a warning if we have a post request
        # and have no form input
        warning = '<div class="warning">Your form is invalid!</div>'
    print('''
      <h1>Class Registration</h1>
      <div>''', warning, '''
      <form action="crs3.py" method="POST" class="pure-form pure-form-stacked">
        <label>Name</label>
        <input type="text" name="name"/>
        <label>Class</label>
        <select name="class">
          <option value=""></option>
          <option value="CS 11">CS 11</option>
          <option value="CS 21">CS 21</option>
          <option value="CS 32">CS 32</option>
        </select>
        <input type="submit" value="Go" class="pure-button pure-button-primary"/>
      </form>
    ''')

#print our our 'footer'
print('''
</body>
</html>
''')
~~~


Ok, this is a lot to take in! Let's take it chunk by chunk again

~~~python
#!/usr/local/bin/python3
import cgi
import os

form = cgi.FieldStorage()

print("Content-type: text/html")

# print out our head
print('''
<!DOCTYPE html>
<html lang="en">
<head>
  <title></title>
  <link rel="stylesheet" href="/pure.css">
</head>
<body>''')
~~~

It seems that our first lines just 'opens' our html page like before.

~~~python
# if we have the name and class in our parameters,
# then we know it's a successful form
if('name' in form and 'class' in form):
    print("<p>Right Form</p>")
    print("<pre>")
    for key in form.keys():
        value = form.getvalue(str(key))
        print(key)
        print(value)
        print("\n")
    print("</pre>")
~~~

Now we have something that looks rather new. We've actually embedded our if statement on the page itself (notice that previously, they have been at `register.py` files. This allows us to actually print the data on the same page (hence why it doesn't change from `crs3.py`, the handler of the form is the same page!

~~~python
else: #else
    warning = ''
    if os.environ['REQUEST_METHOD'] == 'POST':
        # let's set a warning if we have a post request
        # and have no form input
        warning = '<div class="warning">Your form is invalid!</div>'
    print('''
      <h1>Class Registration</h1>
      <div>''', warning, '''
      <form action="crs3.py" method="POST" class="pure-form pure-form-stacked">
        <label>Name</label>
        <input type="text" name="name"/>
        <label>Class</label>
        <select name="class">
          <option value=""></option>
          <option value="CS 11">CS 11</option>
          <option value="CS 21">CS 21</option>
          <option value="CS 32">CS 32</option>
        </select>
        <input type="submit" value="Go" class="pure-button pure-button-primary"/>
      </form>
    ''')
~~~

Our else statement is the content of our html page, with an added `warning` variable. Line 3 suggests that we're checking the 'REQUEST_METHOD', and if it is post, we are setting the warning variable to our error message. Indeed, it will only be set if our form is invalid, producing the effect we see on the page.
