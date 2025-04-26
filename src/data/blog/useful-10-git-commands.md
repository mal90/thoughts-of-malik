---
title: "Useful 10 git commands"
pubDatetime: 2018-05-07T00:00:00.000Z
description: "`git checkout -b <branchname>` :  create a branch from the parent branch and checkout the branch."
---

## Useful 10 git commands


- `git checkout -b <branchname>` :  create a branch from the parent branch and checkout the branch.
- `git checkout –` : switch between 2 branches. (between last branch and the current branch)
- `git diff <filename>` : dump the changes of the file in the console by comparing it with the unmodifed file.
- `git add . && git commit -m “commit message”` : add all the changes and commit with a message. Here basically we are executing 2 commands with '&&'.
- `git log –oneline` : get all the commit messages in the current branch and display in one line with the hashcode.
- `git branch -a `: view  all local and remote branches in the repositories.
- `git branch -D <branchname>` : delete a local (un-merged) branch. Note you cannot delete a branch when it is your current branch.
- `git push origin :<branchname>` : delete a remote branch.
- `git fetch origin <branchname>` : fetch a specific remote branch without getting all the remote changes.
- `git reset –hard <commit-hash>` : reset your local commit history to a specific commit-hash. Note after this reset , the changes will be permanently lost. If you - do not want to lose permanently use –soft instead. 