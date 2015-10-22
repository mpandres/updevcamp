+++
date = "2015-08-31T11:20:08+08:00"
title = "Setup"
tech = "Week 0"
tracks = ["Web"]
authors = ["arian"]

+++

To prepare your journey as a web developer, we've collected a bunch of common dependencies and software packages that you will find useful, as well as packages we will use for DevCamp. The number of dependencies to install might be a bit intimidating, but we tried to ensure to keep the installation procedures as straight forward as possible while supporting most major platforms.

Still, we understand that installing dependencies can cause a few things to go wrong. If so, please contact any of the staff during our DevCamp Sessions or through our [Slack](http://upcsi-dev.slack.com) Channel.

We're also [actively solving](http://csibox.updevcamp.com) the problem of 'setting machines up'.

# Package Managers

A package manager is a management system that automates installing, upgrading, and configuring software packages. Put simply, it makes _installing stuff easy_.

__Windows__: Install [Chocolatey](https://chocolatey.org)
__OS X__: Install [Brew](http://brew.sh). Then type this in your terminal: `brew install caskroom/cask/brew-cask`
__Linux__ If you are using Linux, then you're distribution most likely comes with a package manager. (i.e., _yum_, _apt-get_)

# Atom

[Atom](http://atom.io) is a free and open source programming text-editor developed by Github. While you are welcome to use any text-editor (I use vim myself), most of the examples listed in this site and in presentations will use atom as the editor.

Follow these [https://atom.io/docs/latest/getting-started-installing-atom](instructions) to install Atom.

# Git

[Git](https://git-scm.com) is a free and open source version control system. Think of it as _saving++_

~~~bash
// Windows
C:\> choco install git
// OS X
~ brew install git
// Ubuntu Linux
sudo apt-get install git
~~~

# Heroku

[Heroku](http://heroku.com) is a cloud Platform as a Service (PaaS). Note that this is where [RUPP - (rupp.herokuapp.com)](http://rupp.herokuapp.com) is hosted.

Register for the service [here](http://heroku.com).

Once registered, install the [heroku toolbelt](https://toolbelt.heroku.com).

# Python

[Python](https://www.python.org) is a general-purpose, high-level programming language that emphasizes code readability. We will be using _Python 3_ in this track.

__Windows:__, read this [tutorial](/resources/python) by [Dominic](/authors/dominic) on how to install Python

__OS X:__ While OS X should already have python3 by default, run `brew install python3` to create a local version of `python3`

__Linux:__ Ubuntu 14.04 has `python3` by default.

## PIP

_PIP_ (acronym for Python Installs Packages) is a tool for installing and managing Python packages.

__Windows__: `choco install pip`

__OS X:__ Running the command above (`brew install python3`) installs pip automatically

__Linux:__ `sudo apt-get install python3-pip`

# PostgreSQL

[PostgreSQL](http://postgresql.org) is an open source (we're getting a pattern here!) database. Put simply, it allows us to save data.

__Windows:__ `choco install postgresql`

__OS X:__ `brew install postgresql`

__Linux:__ `apt-get install postgresql-9.4`

# Slack

[Slack](http://upcsi-dev.slack.com) is a chat app/website.

It has an iOS and Android App for mobile, as well as OS X and Windows Clients for Desktop (sorry linux users!). You can also visit the website at http://upcsi-dev.slack.com

__CSI Apps:__ We will be inviting you.

__Non CSI Apps:__ Please drop [us](info@updevcamp.com) an email with your name/email (we'll automate this soon enough)

# GitHub

[GitHub](http://github.com) is a web based git repository hosting service. It allows us to save online repositories made with _git_.

Register for the service [here](http://github.com)

# Addendum

Wooh, that was quite a lot! If you've made it here and did not face any problems, then to you I say, nicely done!

If you did see a few errors along the way, then don't fret! Simply google the error you faced, and try to work from there. If you are still unable to solve th problem, just drop by our [Slack](http://upcsi-dev.slack.com) Channel.

