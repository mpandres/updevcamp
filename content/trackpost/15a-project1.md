+++
date = "2015-10-22T11:21:08+08:00"
title = "The Landing Page"
tech = "Project 1a"
tracks = ["Web"]
authors = ["arian"]
notable = true

+++

__Disclaimer:__ One of the main goals of this DevCamp track (apart from making you awesome at web dev) is to allow you to teach yourself new languages and general software engineering so that you can stand on your own after the track's end. Everyone here will be guiding you through and through, but if you find yourself consulting Google and asking questions, don't worry: that means you're doing it right!

# Getting Started

First of all, register at [http://submit.udpevcamp.com](http://submit.updevcamp.com), then come back here.

Let's start the project by setting up our project folder. Create a new folder (on say, your desktop) and name it as set0.

Now that you have a new folder, open a terminal, and navigate to your project folder by _cd_-ing to your project. The command should look something like this (depending on where you put your folder)

~~~bash
cd ~/Desktop/set0/
~~~

on Unix machines (OS X, Linux), or something like this on windows:

~~~bash
cd C:/Users/<username>/Desktop/set0
~~~

__Note__: You can decompose this command to simulate 'traversing' through your directory, by taking it step by step, i.e. `cd Users`, then `cd <username>` etc. etc. This might be helpful if you find yourself unable to directly find the path of your folder.

Once inside your project folder, type in `git init` to initialize your `git` repository. Then do:

~~~bash
atom .
~~~

The command `atom .` opens the text editor atom on the current directory (by passing `.`). This means that you can see the files in this folder on the sidebar on the left. (Same thing if you are using sublime, which you can run using `subl .`).

Create a new file in your editor, and save it as `index.html`.

Add it to git by typing (on the terminal):

~~~bash
git add index.html
~~~

This adds the index.html to your git repository. Let's now `commit` this change by using the following command:

~~~bash
git commit -m "Initialize Repository"
~~~

# What to Do

Now it's time to create your very own web page! Your mission is, quite simply, to have fun with HTML and CSS and implement your very own landing page - that's about _you_! - a webpage that describes you, your interests, and other tidbits about you. To put simply, create a webpage that puts `you` in a single page, leaving the viewer with a good idea of who you are after visiting the page. Think of it as your own portfolio, or a business card, or a modern résumé.

The landing page will only be subject to the following requirements:

- Your landing page must have at least two images, one being a portrait/head shot of your own, the other being anything else (if Arian might recommend: a picture of a cute cat). Feel free to add more than two images!
- Your landing page must have a working link.
- Your landing page must work at least on these modern browsers (IE 10+, Edge 12+, Firefox 40+, Safari 9+, Chrome 45+). Consult [caniuse](http://caniuse.com/) to see if a browser supports a specific feature (most do).
- Your landing page must be considerably styled with css.
- Your landing page must have three 'screens' worth of content (we can scroll down three screen height of content)
- Your landing page must be responsive (and dare we say look good on mobile).
- You must commit between versions on your projects. Your project should have at _least_ 4 commits by the end.

It is also acceptable to create a landing page that is not about you - a page that is say, for a 'mock product'/startup landing page, or one that serves as a mockup for an 'app' (i.e., create a 'twitter'/'facebook' _look_ clone), or say, a redesign of a landing page for a site you know (your high school's website, or a webpage you frequent, or maybe say, a tribute website for your org). If you do choose to make a clone though, note that it should not terribly look the same, and please contact us to make sure that it's acceptable.

Feel free to peruse the samples provided for inspiration, but your own page should not be directly similar to any of them. Try to think of a design of your own (grab a pen and paper and get those creative juices flowing!), and then set out to implement it.

If you don't know how to implement a specific design, realize that using Developer Tools (right click inspect element) will allow you to view the css/style used to style a particular section.

The DevCamp staff is also available to help you out if you have questions. Message us on Slack if you're having any trouble, and we'll assign people to help you through the project.

#### Landing Page Examples

- http://andypatrickdesign.com
- http://christhurman.com
- http://brandonkylenewman.github.io/index.html
- http://www.joeyabi.com/projects.html
- http://hoangnm.com

#### Marketing Page Examples
- http://set0b.surge.sh
- http://set0c.surge.sh

#### Animation Example
- http://set0d.surge.sh

That's it! Make us (and yourself) proud :)

# How to Submit

Once you have the webpage done, let's get it online so that you can share it with everyone!

Go to [http://github.com](http://github.com) and create an account if you don't have one already. Github is a `git` repository hosting service, allowing us to save our repositories online.

Once you're logged in, create a new repository by clicking on the (+) button on the upper right hand corner and clicking "New repository".

{{< figure src="/media/tracks/web/project-github.png" >}}

You should then be redirected to a screen that asks for a "Repository Name". Name it whatever you want (we recommend, updevcamp-2015a-set0). Add a description if you like, and then click "Create Repository".

Great, you've just created a public git repo! You should now see instructions on __how to push an existing repository__. Go ahead and follow those commands on your own terminal, then refresh the github page you are in.

You should now see your `index.html` and `index.css` files online! Your project is now public, great!

We aren't able to quite see your webpage yet though! Luckily, github has `gh-pages` allowing us to _host_ our webpage online for free. We do this by pushing our webpage to a `gh-pages` branch, so let's do just that.

Make sure you're in your project directory, then, do the following commands:

~~~bash
git branch gh-pages
git checkout gh-pages
git push origin gh-pages
~~~

The first two commands above creates a 'gh-pages' branch, and checks it out so that we are working on it on our current directory. The third pushes it to the gh-pages branch on our remote origin (github in this case).

Wooh, that was a handful! You can sit back and relax now though, you can now access your webpage online through [http://\<username>.github.io/\<repo-name>`](#)!

Finally, to close this project, visit and register at [http://submit.udpevcamp.com](http://submit.updevcamp.com), the submissions bin of DevCamp created by [Stephen](/authors/stephen). There, you'll find a few questions. Make sure to submit the proper repo url, otherwise we might not be able to view your project! We collect quite a bit of data, but do note that this is used for research purposes anonymously.
