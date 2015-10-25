+++
date = "2015-10-22T11:21:00+08:00"
title = "Git"
tech = "Week 1c"
tracks = ["Web"]
authors = ["genesis"]

+++

# Background

## What is Git

For a quick background on what is git (and why it's relevant to you), [read this short __article__](http://www.gamedev.net/page/resources/_/technical/game-programming/how-to-reverse-time-introduction-to-git-cloud-computing-and-version-control-r3434) written a while back. Read only until the SVN section.

Git was originally developed by Linus Torvalds for development of the Linux kernel. It is a distributed version control system, allowing you to save _versions_ (called `commit`s) of your code to your local repository, as well as `push`ing it to a remote repository. This allows you to track changes and synchronize with fellow developers easily in a peer-to-peer fashion.

## What is [github.com](http://github.com)?

GitHub is an online git repository, where you can upload your git repository online. This allows you to make a 'remote' version of your repository, so that losing your local repository does not hinder your progress (since you have it available online).

# Using Git

`git add <path>` adds a file or directory to your local repository.

`git commit -m "YOUR MESSAGE"` commits all of the changes you have made to files in your local repository. Take the habit in __commit__-ing often to save your progress

`git push` pushes your local commits to the remote repository.

`git pull` pulls changes from the remote repository, to _your_ local repository.

`git diff` can be used to view the changes you have made since your last commit.

To get started with Git, feel free to follow this interactive tutorial [here](https://try.github.io/levels/1/challenges/)

You can also follow this much more hands-on [tutorial](https://gitlab.com/braincraft/GitTutorial) developed by [Gian](/authors/gian)

## Good VCS practices

- Keep your commit messages short, and make them imperative - describing the action you have just done. For example, say "Add index.html file" instead of "Added index.html file"
- Always, always use good commit messages. Tell everyone what you did with your commit, so they can track your changes. There's nothing more scary than 'fix bug' or 'updated game' so you have no idea what was changed.
- Note the side effects of your changes. If you edited the GUI, which in turn changed how the levels work, make sure to note it.
- Branch your code when necessary.
- Test your code before you commit on the main branch.
