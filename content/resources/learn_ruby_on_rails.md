+++
date = "2015-02-10T02:11:02+08:00"
title = "Learn Ruby on Rails"
authors = ["neil"]

+++

This guide is for everyone who wants to learn [Ruby on Rails](http://www.rubyonrails.org). sqlite3 is the suggested database management system in this guide. Moreover, this will include our recommended environment and links for the most reliable and best tutorials on web.

## Linux

**Supported Distributions**
1. Ubuntu (Precise Pangolin and Trusty Tahr)
2. ElementaryOS (Luna)
3. Linux Mint (Cinnamon)

#### Dependencies

Install the following dependencies:

* git
* sqlite3
* nodeJs
* Rbenv
* Ruby
* Rails
* Bundle

Install **git**, **sqlite3**, **nodeJS**:
```bash
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update && sudo apt-get upgrade
sudo apt-get install autoconf bison build-essential libssl-dev libyaml-dev
sudo apt-get install libreadline6-dev zlib1g-dev libncurses5-dev libffi-dev
sudo apt-get install libgdbm3 libgdbm-dev
sudo apt-get install sqlite3 libsqlite3-dev
sudo apt-get install git nodejs
```

For a recommended **nodeJS** installation, check [NVM](https://github.com/creationix/nvm).

Note: If this is your first time on git, it's advisable to configure your credentials first:
```bash
git config --global user.name "Neil Calabroso"
git config --global user.email "nmcalabroso@up.edu.ph"
```

Also, make sure your git's core.autocrlf setting is set to false to avoid any problems when installing rbenv.
```bash
git config --global core.autocrlf false
```

Install [Rbenv](https://github.com/sstephenson/rbenv). Complete the installation instructions including the optional part:```ruby-build```.

Upon installing **Rbenv**, restart your terminal and install Ruby 2.2.0:
```bash
rbenv install 2.2.0
rbenv global 2.2.0
```

Install **Rails**:
```bash
gem install rails
```

Install Bundler:
```bash
gem install bundler #restart terminal after the installation
```

### Tutorials
* If you do not have any experience on ruby, we suggest to complete the challenge by [TryRuby](http://www.tryruby.org).
* With the set-up above, you are now ready for your [first web app tutorial](http://guides.rubyonrails.org/getting_started.html). You can now start at *section 3.2*.
* Since the [Getting Started Tutorial](http://www.guides.rubyonrails.org/getting_started.html) is too high-level (with the use of scaffolding), it is very much suggested to read and finish the book [Ruby on Rails Tutorial](http://www.rubyonrailstutorial.org/book). This book gives a thorough explanation about the workflow of **Rails**, **Unit-testing**, **Git**, and **Deployment**.

### Further Notes

For a high quality and readable codebase, please make these conventions as references:

1. [Ruby Style Guide](https://github.com/bbatsov/ruby-style-guide)
2. [Rails Style Guide](https://github.com/bbatsov/rails-style-guide)
