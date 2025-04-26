---
author: Malik
pubDatetime: 2017-01-03T00:00:00.000Z
modDatetime: null
title: When to use git rebasing and why?
slug: when-to-use-git-rebasing-and-why
featured: false
draft: false
tags:
  - git
  - rebase
  - merge
  - history
description: "Note: My earlier post was post some of the useful commands of git and how to use them"
---

## When to use git rebasing and why?

Note: My earlier post was [post](http://lazydevguy.blogspot.com/2015/06/useful-git-commands.html) some of the useful commands of git and how to use them

#### Git rebase: Introduction

[Git rebase](http://git-scm.com/docs/git-rebase) is a handy mechanism when you need merge the changes of your branch with another branch (probably with the master branch) . But the process behind a git-rebase is not that simple as the definition suggests , but it is clean and awesome. In this post, I am going to go through with the process behind a git rebase, when to use it, and when to avoid it.

Let's look at the following simple scenario..

Say you are creating a development-branch out of this master branch to do your development stuff.

![git-rebase-intro](https://lazydevguy.files.wordpress.com/2017/01/git-rebase-1.png)

And you are now working on this development-branch for sometime. You make changes, you add these changes and you commit those changes to this branch. Now after few days, you decides that it is the right time to integrate your changes to the master branch . But guess what, your team members have already pushed their changes to the master branch. So you cannot just easily merge your changes to the master without messing up the changes of your peers. Following diagram illustrates the situation

![git-rebase-intro2](https://lazydevguy.files.wordpress.com/2017/01/git-rebase-4.png)

As you can see there is a gap between the branch you are working on and the master. This is where the it rebase comes in .By using git rebase you are going to integrate your changes (commit B1, B2) with the master (Where now the head is located at commit M3),

![git-rebase-intro3](https://lazydevguy.files.wordpress.com/2017/01/git-rebase-2.png)

Now the situation changes to something like below

![git-rebase-intro3](https://lazydevguy.files.wordpress.com/2017/01/git-rebase-3.png)

When you use git rebase , the commit history (commit hashes) changes entirely . That is why i have used the green color to represent the history instead of blue (color of master's commits) or red (color of development-branch commits).

#### Advantage

It creates a **Linear History** which is the very reason why we need to use git rebasing. Your history is clean flat and readable. You can identify the commits of each of your team members very easily in different timelines.

#### Disadvantage

In a situation where you have so many people consistently pushing their changes to master and when there are so many branches being merged with the master, It is kind of a pain in the a** to keep your branch upto date with master using git rebase. You have to constantly do the rebasing, and might need to resolve conflicts time to time.

Also rewriting your commit history after each and every reabsing is not always a good thing. It means that your commit hashes change consistently and also, you need to **force push** every time to the remote after a rebase

#### When to rebase:
Only when you need a clean linear history so that you can clearly see what is going on with the all the commits from all the team members.

#### When not to rebase:
If you prefer to follow a simple mechanism where you can integrate your changes with the upstream branch without a fuss you can always go with [git merge](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging#_basic_merging). 