---
author: Malik
pubDatetime: 2016-02-07T00:00:00.000Z
modDatetime: null
title: Resolve NPM install "unmet dependency" warning
slug: resolve-npm-install-unmet-dependency-warning
featured: false
draft: false
tags:
  - npm
  - node
  - dependency
  - warning
description: "Sometimes when you try to install node modules, npm prompts the following warning message:"
---

## Resolve NPM install `unmet dependency` warning

Sometimes when you try to install node modules, npm prompts the following warning message:

![npm dependency issue](https://lazydevguy.files.wordpress.com/2016/02/capture.png)

> npm WARN unmet dependency undefined,
npm WARN unmet dependency which is version undefined

Because of this some of the node modules might not get installed correctly. There are couple of main reasons why this could happen.

1. You might be using a older version of NPM.
Solution : Check your NPM version and make sure it is upto date . If not try updating your NPM application globally.

2. Network interruptions while downloading dependencies or NPM cache problems Solution:  `rm -rf` the local node_modules folder and run `npm cache clean`. This should enable you to run a clean `npm install`. again. 