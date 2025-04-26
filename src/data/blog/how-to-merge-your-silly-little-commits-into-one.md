---
author: Malik
pubDatetime: 2016-12-29T00:00:00.000Z
modDatetime: null
title: How to merge your silly little commits into one
slug: how-to-merge-your-silly-little-commits-into-one
featured: false
draft: false
tags:
  - git
  - squash
  - reset
  - commit
description: "There are three kinds of git users. People who commits every single change ; People who wait and compile all the changes into one gigantic commit."
---

## Git : How to merge your silly little commits into one

There are three kinds of git users. People who commits every single change ; People who wait and compile all the changes into one gigantic commit. And the last kind is the best kind, who commits in a responsible way. I used to be the first kind, but realized later it is annoying to the people who reviews my PR's. So here is the thing, git has 2 helpful ways of dealing with this problem.

1. git squash
2. git reset

Here is the scenario. Say if you made some commits with small changes like remove small space 1, change variable name, remove space 2. Later you realize the commits are kind of silly, you want all these commits to be merge into one called something like code cleanup.

Using squash for this problem a bit complex (not if you get used to it). But it sort of gives you an overall idea on what is happening. This is how you do it.

## Method 1: Using squash

First of all make sure your master branch is up-to date with the related upstream branch. And say you are in a feature branch called, well feature-branch.

in your git bash, run this command `git rebase -i master`

![git squash](https://lazydevguy.files.wordpress.com/2016/12/git-sqush-1.png)

you will get the vim interactive console and you will see all of your 3 commits listed.

![git squash](https://lazydevguy.files.wordpress.com/2016/12/git-sqush-2.png)

Here the process is simple. You can pick one commit which can be your parent commit  using pick, and the rest of the commits can be linked under this parent commit using squash command. Also you can change the order of the commits as well. So according to our scenario, we can follow this way.

And that is it. Just save and exit. And you will get another interactive console like below.

![git squash](https://lazydevguy.files.wordpress.com/2016/12/git-sqush-5.png)

And you have successfully merge 3 of your commits into one commit which is going to make a better commit history for you. Now you can just run `git push origin feature-branch –force` to push your single commit to the remote repository.

Note: we are using `–force` because this process has changed the commit hashes. In any case, when you use force push, you need to absolutely make sure you know what you are doing.

If you view the commit history, you can see the squashed commits like this visualized in a different way.

![git squash](https://lazydevguy.files.wordpress.com/2016/12/git-sqush-6.png)

So that's how you squash your commits in Git. It is a bit time consuming process, but if you get used to it, it is very useful


## Method 2: Using `git reset`

So unlike squashing your commits, you can easily merge your little commits into one using git reset command. It is really simple. Take the same scenario i have mentioned above. Now what you need is, Taking the HEAD position 3 commits back. By doing this you are resetting the last 3 commits.

```
git reset –soft HEAD~3
```

Now you have un-stage changes. All you need to do now is to put them into a single commit.

```
git commit -m "Code cleanup"
```

Or do these both together

```
git reset –soft HEAD~3 && git commit -m "Code cleanup"
```

Now push `–force` to push the new commit into the remote repository. The same warning regarding force push applies here as well.

more info on squashing can be found [here](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History) 