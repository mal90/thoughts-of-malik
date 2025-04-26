---
author: Malik
pubDatetime: 2015-06-25T00:00:00.000Z
modDatetime: null
title: Git rebase merge conflict resolving. Did you forget to use add?
slug: git-rebase-merge-conflict-resolving-did-you-forget-to-use-add
featured: false
draft: false
tags:
  - git
  - rebase
  - merge
  - conflict
description: Sometimes when you rebase your branch with the master branch and after fixing a merge conflict you might encounter following issue
---

## Git rebase merge conflict resolving. Did you forget to use add?

Sometimes when you rebase your branch with the master branch and after fixing a merge conflict you might encounter following issue

### The loopy problem of git rebasing

```
$ git rebase –continue
Applying: loglevel equal to silent
No changes – did you forget to use 'git add'?
```

If there is nothing left to stage, chances are that something else. already introduced the same changes; you might want to skip this patch.

When you have resolved this problem, run `git rebase –continue`. If you prefer to skip this patch, run `git rebase –skip` instead.
To check out the original branch and stop rebasing, run `git rebase –abort`.

![git-rebase-loop](https://lazydevguy.files.wordpress.com/2015/06/git2.png)

But the problem you might having is that you have already added the file using git add `yourconfilctedfilename`  And might have added several times but still Git telling you to add the file again??

### The loopy problem of git rebasing
I have encountered this issue couple of times and it turns out is a [git bug](https://github.com/git/git/commit/95104c7e257652b82aed089494def344e3938928) which was later fixed with Git 2.0.2 version. So anyway in this case rather than updating your git application, you can simply do the git rebase –skip and just skip the patch. It will not do any harm because the patch was empty anyway. 