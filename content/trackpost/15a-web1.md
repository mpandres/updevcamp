+++
date = "2015-08-31T11:21:08+08:00"
title = "Week 1"
tech = "IP, HTTP, HTML."
tracks = ["Web"]
authors = ["arian"]

+++

# Hello World

- This webtrack is designed to get you creating websites.
- If you're nervous because you have no web dev experience, you're in good company: over 70% of students who signed up for Devcamp listed 'none' as their experience.
  - If you do have web dev experience, don't get complacent - we'll make sure to challenge you.
- Devcamp tracks are relatively practical - don't get too caught up memorizing terms and definitions.

# Prerequisites

- Some basic programming experience with any language (or willingness to learn)

# Expectations/House Rules

- Attend all sessions
- You will need to implement four projects by the end of the track
- You are encouraged to bring your own device
- If you're having any trouble, just contact any of the staff
- If you think the track is too easy for you, just contact any of the staff
- Have fun

# HTML

Here's a very basic HTML snippet:

{{< highlight html "linenos=table" >}}
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
  </head>
  <body>
    Hello World
  </body>
</html>
{{< /highlight >}}

It's a basic webpage that does nothing but display `Hello World`. The first line declares this piece of code as HTML, followed by `tags`, beginning with `<` and `>`

It is easy to create an html page yourself. Go in your text editor of choice and create a new file, saving it as `index.html`. Put it anywhere easy to find, such as your desktop. Then type this in:

{{< highlight html "linenos=table" >}}
<!DOCTYPE html>
<html>

</html>
{{< /highlight >}}

This boilerplate code basically says that our file Document Type is html (`<!DOCTYPE html>`). We then have the `html` tag, which currently contains nothing. Every HTML page needs a section called a `head`, so let's go ahead and add that and a `<title>`.

{{< highlight html "linenos=table" >}}
<!DOCTYPE html>
<html>
  <head>
    <title>Devcamp Week 1</title>
  </head>
</html>
{{< /highlight >}}

Another section every html page needs is a `<body>`. Adding it follows the same structure we've seen so far:

{{< highlight html "linenos=table" >}}
<!DOCTYPE html>
<html>
  <head>
    <title>Devcamp Week 1</title>
  </head>
  <body>
    Hello World
  </body>
</html>
{{< /highlight >}}

Save it. We can then open our webpage by going to a browser (say Chrome) and pressing `Ctrl+O`/`Cmd+O` and then navigating to our `index.html` file (alternatively, double click/drag to your browser your saved html file)

{{< figure src="/media/tracks/web/chrome-index.png" >}}

Notice how the tab says "Devcamp Week 1" - our title tag contents is used as the title for the tab. Meanwhile, the contents of our body tag is what's seen in the actual browser window.

Those words covered in angle brackets are called `tags`. For example, `<head>` is a tag, as well as `<body>`. You might notice the tag with `/`s in it, such as `</head>`. In html, there are  __open__ and __close__ tags (or start and end tags) of html __elements__. For example, the html _element_ `head` has `<head>` and `</head>` as it's _open_ and _close_ tags respectively.

Web browsers interpret HTMl from top to bottom. When it sees `<html>`, that basically tells our browser "What's going to come is our html page". `<head>` says "This is the start of the head section", and `</head>` says "This is the end of the head section."

Indentation and spaces doesn't really matter in html (much like C), and you will notice that we indent and unindent when opening and closing tags, just like __curly braces__.

Let's go back to the html page we saved again:

{{< figure src="/media/tracks/web/chrome-index.png" >}}

You will notice that the URL reads `file:///Users/Secretmapper/Desktop/index.html`, (or wherever you saved the file). The `file` protocol basically indicates that the browser opened the file on the local hard drive. Hence, no one else should be able to see it.

## Servers

What we can do is to use what's known as a web server. Python comes with a simple HTTP server, so let's use that.

- First, open your terminal, and navigate to your html file. Recall that you can navigate to directories using `cd` (__c__hange __d__irectory) and the path you want. `ls` lists the file/folders of the current directory you are in (or `dir` in windows.)

{{< highlight bash >}}
$ cd ~/Desktop
$ ls
index.html
{{< /highlight >}}

Once you're in the directory that contains your `index.html` file, run the command `python -m SimpleHTTPServer 8000` (case sensitive!)

You should see the message `Serving HTTP on 0.0.0.0 port 8000 ...`. This means that we have an HTTP server running on port 8000! We can now open a new tab and enter `localhost:8000/index.html`, meaning we are accessing our own computer and requesting for the `index.html` file we wrote.

The page looks the same, but the difference now is that HTTP is being used to serve the page (notice that the URL doesn't have the `file:///` protocol anymore)

## Tags

### Links

Let's try some new things now. Let's say we want to create a link. We would need to write something like this:

{{< highlight html "linenos=table" >}}
<!DOCTYPE html>
<html>
  <head>
    <title>Devcamp Week 1</title>
  </head>
  <body>
    <a href="http://www.updevcamp.com/">UP Dev Camp</a>
  </body>
</html>
{{< /highlight >}}

`<a>` is our open tag, short for "anchor", `UP Dev Camp`, is what's shown by the browser, and `</a>` is the close tag for the anchor element. But what is `href`, and why is it in the middle of the `<a>` tag? `href` is what's called an __attribute__, something that modifies a tag. `href` in this case modifies the anchor tag to link to the address that it should redirect to when it's clicked.

Try previewing it on your browser:

{{< figure src="/media/tracks/web/alink.png" >}}

Note how the href link can be different from what's shown to the user. As an example, we can be malicious and do something like this:

{{< highlight html "linenos=table" >}}
<!DOCTYPE html>
<html>
  <head>
    <title>Devcamp Week 1</title>
  </head>
  <body>
    <a href="http://virus.com">http://google.com</a>
  </body>
</html>
{{< /highlight >}}

Notice that our `href` attribute points to `http://virus.com`, but the text inside says `http://google.com`.

{{< figure src="/media/tracks/web/badlink.png" >}}

The link in the image seems like an innocent link to google, but actually redirects to `virus.com`!

### Lists

{{< highlight html "linenos=table" >}}
<!DOCTYPE html>
<html>
  <head>
    <title>Devcamp Week 1</title>
  </head>
  <body>
    <ul>
      <li>Cabot</li>
      <li>Currier</li>
      <li>Pforzheimer</li>
    </ul>
  </body>
</html>
{{< /highlight >}}

If you render the html above, it will look something like this:

- Cabot
- Currier
- Pforzheimer

The `<ul>` tag stands for __unordered list__, and `<li>` as __list item__, hence it produces a list. We can change the `<ul>` to an `<ol>` tag for an __ordered list__, which will look like this:

1. Cabot
2. Currier
3. Pforzhemier

### Paragraphs

We use the `<p>` tag for __paragraphs__:

{{< highlight html >}}
<!DOCTYPE html>
<html>
  <head>
    <title>Devcamp Week 1</title>
  </head>
  <body>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet quam varius, ornare neque eget, porttitor lorem. Vivamus rutrum, dui nec varius porta, sem neque tristique dolor, in condimentum dui tortor convallis erat. Quisque non ligula et lorem consectetur ultrices. Praesent eu massa lectus. Duis nec erat vel ante hendrerit scelerisque. Vivamus eu tincidunt libero. Nam feugiat a augue id hendrerit. Sed convallis magna placerat feugiat finibus.</p>
    <p>Nunc hendrerit porttitor vehicula. Curabitur rutrum orci vel accumsan blandit. Praesent vel semper dolor. Maecenas ac vestibulum ligula. Cras tincidunt velit elit, dignissim pharetra quam suscipit quis. Curabitur et sagittis elit. Nullam ante odio, viverra vel sollicitudin vel, elementum et odio. Aenean varius magna quis turpis dapibus, at mollis dui laoreet. Curabitur ac tristique tortor. Sed viverra tortor metus, in hendrerit lacus sodales sed. Etiam finibus tortor at metus mollis, nec hendrerit mi tempus. Nam consectetur id eros in tristique. Nulla in faucibus elit, sed laoreet nulla. Vestibulum condimentum nibh vel nulla molestie, ut gravida quam maximus.</p>
    <p>Nulla vehicula ullamcorper tellus vitae semper. Etiam condimentum eros a felis laoreet, vitae fringilla nisl molestie. Etiam fringilla suscipit enim, et commodo nisi suscipit eget. Mauris ac risus a quam sollicitudin tempor. Curabitur vel diam tincidunt mauris euismod efficitur. Vivamus cursus laoreet lacus. Curabitur gravida condimentum leo, tincidunt rhoncus enim.</p>
  </body>
</html>
{{< /highlight >}}

{{< figure src="/media/tracks/web/paragraphs.png" >}}

HTML has lots and lots of tags, but as long as you know the concept, and how it can be structured, it's easy to pick it up as you go.

# Further Reading

- More HTML elements/attributes:
  - [MDN HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
  - [MDN HTML attributes reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)
