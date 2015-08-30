+++
date = "2014-09-16T15:33:20+08:00"
title = "Learn Mezzanine"
authors = ["neil"]

+++

This guide is for everyone who wants to learn [Mezzanine](http://mezzanine.jupo.org/), a CMS [Django](https://www.djangoproject.com)-based framework. PostgreSQL is the suggested database management system in this guide. Moreover, this will include our recommended environment and links for the most reliable and best tutorials on web.

## Linux

**Supported Distributions**
1. Ubuntu (Precise Pangolin)
2. ElementaryOS (Luna)
3. Linux Mint (Cinnamon)

### Dependencies

First, install all required dependencies:
```bash
sudo apt-get update && sudo apt-get upgrade
sudo apt-get install build-essential
sudo apt-get install python-pip python-dev python-setuptools
sudo apt-get install postgresql libpq-dev
sudo pip install virtualenv virtualenvwrapper
```

Open your ```.bashrc``` file:
```bash
$ nano ~/.bashrc
```
and append the following lines at the end:
```bash
# Virtualenv
export VIRTUALENVWRAPPER_VIRTUALENV=/usr/local/bin/virtualenv
export WORKON_HOME=$HOME/.virtualenvs
export PROJECT_HOME=$HOME/Projects
source /usr/local/bin/virtualenvwrapper.sh
```

Second, restart the terminal and create your virtual environment:
```bash
$ mkvirtualenv sample
```

Your prompt should now look similar to this:
```bash
(sample)neil@andromeda:~$
```

### Setting up the database
First, create a custom user for your database:
```bash
$ sudo -u postgres createuser --superuser $USER
$ sudo -u postgres psql
```

Once you have entered the PostgreSQL REPL, setup the password for the database:
```bash
postgres=# \password [enter your username here] #e.g. neil
```

Exit the REPL by typing ```\q```.

Congratulations, your machine [and you] is now ready to proceed to our suggested tutorials!

### Tutorials
* If you do not have any experience on python, we suggest to complete the curriculum in [Codecademy](http://www.codecademy.com/en/tracks/python).
* Since **Mezzanine** is based in **Django**, it is strongly recommended for you to complete the [first django web tutorial](https://docs.djangoproject.com/en/1.7/intro/tutorial01).
* Being someone familiar with **Django**, you can now check this **Mezzanine** [tutorial](http://rodmtech.net/docs/mezzanine/a-mezzanine-tutorial-take-2). Note that this is an outdated tutorial so it is inevitable for you to encounter errors. Still, this guide can help you grasp the power of this CMS Framework.
* Assuming that you have completed the above tutorial in spite of all the errors, we are now sure that the documentation of **Mezzanine** will finally have some sense to you. Congrats!

### Further Notes

For a high quality and readable codebase, please make these conventions as references:

1. [Python Style Guide](http://legacy.python.org/dev/peps/pep-0008)
2. [Django Style Guide](https://docs.djangoproject.com/en/dev/internals/contributing/writing-code/coding-style)
