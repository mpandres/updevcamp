+++
date = "2014-10-11T16:26:02+08:00"
title = "Setting up a MEAN stack"
authors = ["arian"]

+++

This guide is for everyone who wants to setup a MEAN stack on their development machine.

A **MEAN** stack is a full stack javascript framework that includes:

* **M**ongoDB
* **E**xpress
* **A**ngularJS
* **N**odeJS

**Note**: Everything in MEAN (MongoDB, Express, AngularJS, Node) is open source!

## MEAN Dependencies

### NodeJS

[Node.js](http://nodejs.org/) is a platform built on top of V8 for easily building fast network applications.

While you can install node by its own and work from there, we highly encourage to use a node manager such as nvm or nodeenv. For this tutorial we will be installing nvm.

To install nvm, run this on the terminal:

```bash
curl https://raw.githubusercontent.com/creationix/nvm/v0.17.2/install.sh | bash
```
For Windows, use a bash emulator such as Git bash to run the command above.

NVM is a bash script that allows you to install multiple active node.js versions. Let's create our first node version by running the following:

```bash
nvm install stable
```
And then use the version by:
```bash
nvm use 0.10
```
Learn more about [nvm](https://github.com/creationix/nvm)

Learn how to develop in node through [NodeSchool](http://nodeschool.io/)

### MongoDB

[MongoDB](mongodb.org) is the leading NoSQL database.

*MacOSX:*

Install mongodb through [Homebrew](http://brew.sh/).
```bash
brew update
brew install mongodb
```

*Ubuntu:*

```bash
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
sudo apt-get update
sudo apt-get install -y mongodb-org
```

*Windows:*

The easiest way to install MongoDB on windows is through MongoDB's [binary distributions](http://www.mongodb.org/downloads?_ga=1.239857990.455166030.1413041895).

We suggest that you try out Mongodb's shell's [online tutorial](http://try.mongodb.org/?_ga=1.110782533.172777486.1413039191)

### AngularJS and Express

AngularJS and Express are frameworks of their own. This means that they are not system dependencies, but simply imported into your application.

*AngularJS*

[AngularJS](https://angularjs.org/) is a front-end MVW (model-view-whatever) web framework. It's main philosophy aims to adapt and extend HTML to better serve dynamic content (dynamic HTML).

This can be very tricky to understand if you come from a jQuery background. [This StackOverflow Question might help out.](http://stackoverflow.com/questions/14994391/how-do-i-think-in-angularjs-if-i-have-a-jquery-background)

*Express*

[Express](http://expressjs.com/) is a minimal and flexible Node.js backend web application framework.

Try Express' [Getting Started Guide](http://expressjs.com/guide.html)

## Making it All Work Together
MEAN is a *collection* of different javascript based technologies to develop web applications. As such, "MEAN" is not a single, framework/stack/technology that can just be worked on top of.

### Bare build:

It would be beneficial, as a learning experience, to create a bare build of MEAN by your own.

If you have experience in other web technologies, just remember that:
* MongoDB => database             *(MySQL, Postgres)*
* Express => backend framework    *(Laravel, Rails, Django)*
* AngularJS => frontend framework *(JQuery, Backbone)*
* NodeJS => runtime environment   *(PHP, Ruby, Python)*

Therefore, you need to run your database, use your frameworks (Express, Angular), and then let Node interpret.

### Prebuilt MEAN:
There are multiple pre-built MEAN stacks/frameworks created:
* [mean.io](http://mean.io/)
* [mean.js](http://meanjs.org/)

## Further Notes
If you do not have any experience with any of the 4 technologies in MEAN, then take your time. Remember that these are 4 different technologies you are learning all at once. (The only advantage is, it's using only one language, Javascript)
