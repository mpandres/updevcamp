+++
date = "2015-11-03T11:22:00+08:00"
title = "MVC"
tech = "Week 2b"
tracks = ["Web"]
authors = ["arian"]

+++

# MVC

On our last file `crs3.py`, we've mingled our logic with our html page. While this may seem fine at the start, this is going to be very hard to maintain later. Let's do a little better in design by using mvc. 

Open up `lectures/simple/index.py`

{{< figure src="/media/tracks/web/simple.png" >}}

It's a very simple webpage, that looks like the first version of the updevcampwebsite! We can visit the different tracks and resources via hyperlinks.

Try clicking a few links and playing around with it. It's just a very simple website that links to different pages.

If you take a look at how it's implemented, you'll see that the different pages have different files for each of them. Let's take a look at `index.py`:

~~~python
#!/usr/local/bin/python3
import cgi
print("Content-type: text/html")

print('''
<!DOCTYPE html>
<html>
<head>
    <title>UP DevCamp</title>
</head>
    <body>
        <h1>UP DevCamp</h1>
        <ul><a href="tracks.py">Tracks</ul>
        <ul><a href="resources.py">Resources</ul>
    </body>
</html>
''')
~~~

Inside, it looks like we're just printing the index HTML page.

If we take a look at `tracks.py` you'll notice that it's just printing the HTML page as well:

~~~python
#!/usr/local/bin/python3
import cgi
print("Content-type: text/html")

print('''
<!DOCTYPE html>
<html>
<head>
    <title>Tracks</title>
</head>
    <body>
        <h1>Tracks</h1>
        <ul><a href="web.py">Web</ul>
    </body>
</html>
''')
~~~

If you take a look at the other files, you'll note that it follows the same pattern. Note how the only thing that's changing is the `ul` links in the pages - lines 6-11, and 15-16 are just the same - opening HTML/body tags, the head and closing HTML/body tags. While this lines are not hcanging, we have to manually type these for every single page, typing the same thing over and over again.

According to Larry Wall, the first of the [three great virtues](http://threevirtues.com/) of a programmer is __Laziness__. Since we're lazy, there should be a much better way to do this so that we can reduce the repetitive lines and extract the tags that is similar on all pages.

Now let's take a look at `/mvc/index.py`:

~~~python
#!/usr/local/bin/python3
import cgi
print("Content-type: text/html")

import header

print('''
    <h1>UP DevCamp</h1>
    <ul><a href="tracks.py">Tracks</ul>
    <ul><a href="resources.py">Resources</ul>
''')

import footer
~~~

It's not as straightforward as before, in that we don't just print one big html page, but note that all that's different is that we've replace the repeated lines with `import header` and `import footer`. We know that `require` is like `include` in C, which 'copy-pastes' the file in that location. If we take a look at header.py, we'll notice that it indeed contains the header of the page:

~~~python
print('''
<html>
    <head>
      <title>CSI CGI</title>
    </head>
    <body>
''')
~~~

And the footer, contains the footer/bottom of the page:

~~~python
print('''
    </body>
</html>
''')
~~~

We have now isolated the parts that are changing, by extracting the common lines out. Note that this makes our code more maintainable. If say, we wanted to add a copyright notice at our footer, we would only need to edit one file (footer.py). Imagine if we did not extract it like so - we would have to edit every single HTML page we had with the new copyright notice!

## MVC-2

We can do even better than this. Open up `mvc-2/`, and you'll notice a new file, `helpers.py`. Before taking a look at it, let's look at `index.py` first:

~~~python
#!/usr/local/bin/python3
import cgi
print("Content-type: text/html")

import helpers

print(helpers.renderHeader({'title': "UP DevCamp"}))

print('''
    <ul><a href="tracks.py">Tracks</ul>
    <ul><a href="resources.py">Resources</ul>
''')

print(helpers.renderFooter())
~~~

Now we're not requiring `header` and `footer`, but we required a new file `helpers`. It seems that we're printing the return value of the function from helpers - `helpers.renderHeader`, while also passing, inside its parenthesis, curly braces that represent a dictionary. In python, we can pass values by key value-pairs wrapped in curly braces. In this case, `title` is our key and `UP DevCamp` is our value.

Notice also that our middle print function doesn't print the `<h1>UP DevCamp</h1>` title anymore, like we did in the previous example.

Let's take a look at `helpers.py` to understand how the function works:

~~~python
import header
import footer

def renderHeader(data):
    return header.render(data)

def renderFooter():
    return footer.render()
~~~

So it looks like our render function just calls render of our specific files (header, footer), while in header, we are also passing `data`. Let's take a look at `header.py` to see how it gets handled:

~~~python
def render(data):
    return '''
            <html>
                <head>
                  <title>''' + data.get('title') + '''</title>
                </head>
                <body>
                    <h1>''' + data.get('title') + '''</h1>
            '''
~~~

So it looks like it's the same header file, but instead of harcoding the title, it's now actively using the data variable. Indeed, it seems that we're using `get` to use the value from our key-value pair that we passed a while ago. This simplifies our code much more heavily, as it allows us to use variables on our page.

## MVC-3

Let's open `mvc-3/index.py` which has an even more simplified `render` function.

~~~python
#!/usr/local/bin/python3
import cgi
print("Content-type: text/html")

import helpers

print(helpers.render('header', {'title': "UP DevCamp"}))

print('''
    <ul><a href="tracks.py">Tracks</ul>
    <ul><a href="resources.py">Resources</ul>
''')

print(helpers.render('footer'))
~~~

`renderHeader` and `renderFooter` were almost identical functions, and it would be better to just combine them. Note that instead of calling `renderHeader` and `renderFooter` explicitly, we are now just passing the template name in `render`.

`helpers.py` looks like this now:

~~~python
import imp
import os

def render(template, data=None):
    filePath = os.path.join(os.path.dirname(__file__), template + '.py')
    l = imp.load_source(template, filePath)
    return l.render(data)
~~~

It looks rather complex, but it actually works the same way. Note how we're calling `l.render(data)` at the end, which seem to imply `l` is just our template file (like `header` or `footer`). Indeed, the first two lines of our render function just gets the file that we are asking for.

- On our function definition, we use two parameters, `(template, data=None)`. Note that we've set a None value to our second parameter data. Turns out python supports `optional` arguments, allowing us to set a default value if no parameter is sent. Since not all templates would need a data variable (like our footer), we set the render helper function with  `data=None` as default.
- `filePath` is the path of our file, obtained by joining `os.path.join` our current directory `os.path.dirname(__file__)` and the template name `template` with a `.py` extension
- `l` is the library we import using `imp.load_source`

## MVC-4

`mvc-4/index.py` is even much fancier, with the helpers and templates in their own directories.

{{< figure src="/media/tracks/web/mvc-4.png" >}}

~~~python
#!/usr/local/bin/python3
import cgi
print("Content-type: text/html")

from lib import helpers

print(helpers.render('header', {'title': "UP DevCamp"}))

print(helpers.render('home'))

print(helpers.render('footer'))
~~~

Indeed, notice how we are now importing helpers `from lib` since our helpers is now in its own `lib` folder.

We've moved `header` and `footer` in it's own `templates` folder, which is a much better design. We are now factoring our code as much as we can.

{{< figure src="/media/tracks/web/mvc-4-templates.png" >}}

## MVC 5

In `mvc-5/` we take this to its conclusion by moving the actual pages to its own `public` folder.

{{< figure src="/media/tracks/web/mvc-5.png" >}}

We've structured the site like this to organize it better. We now instantly know where our templates are, as well as the pages (public), and the helper utility functions.

Indeed, you'll note that this file pattern is incredibly common in web development.

# MVC

Let's end this section by introducing MVC:

{{< figure src="/media/tracks/web/mvc.png" >}}

We'll put our programming logic, into files we call __'controllers'__. Then we'll have views, like templates, that takes data and presents it to the user. Finally, we have __model__, our database where we can store and retrieve data from.
