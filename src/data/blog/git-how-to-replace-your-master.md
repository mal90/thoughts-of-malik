---
title: "git How to replace your Master"
pubDatetime: 2017-02-16T00:00:00.000Z
description: "So in my project we had to face the following situation."
---

## git – How to replace your Master.

So in my project we had to face the following situation.

We have 2 main branches in our project repository , master and bug-fixing . bug-fixing was created as a temp branch so that the developers can create feature branches on-top of that. But after a while this temp branch sort of became as our main branch and when we finally decided that we need to update master branch it was too late . Because master branch was behind more than 300 + commits . So i had to find the easiest and safest way to replace old master with new updated commits . And this is how i did it.

Step 1 : Get all the updates from the bug-fixing remote branch using a pull


![git-pull](https://lazydevguy.files.wordpress.com/2017/02/git-branch-2.png)

Step 2 : Checkout master branch and hard reset with bug-fixing branch
`git reset –hard bug-fixing`

![git-branch](https://lazydevguy.files.wordpress.com/2017/02/git-branch-8.png)

Step 3 : Force push your local master to remote origin master.
`git push origin master –force`

![git-force](https://lazydevguy.files.wordpress.com/2017/02/git-branch-7.png)

That's it . All under 4 commands , and your master is updated ! 