---
title: "Vue is not detected How to fix vue dev tools issue"
pubDatetime: 2017-01-05T00:00:00.000Z
description: "Vue dev tools is a handy tool."
slug: vue-is-not-detected-how-to-fix-vue-dev-tools-issue # Added slug manually based on title
author: Malik # Added author manually
modDatetime: null # Added modDatetime manually
featured: false # Added featured manually
draft: false # Added draft manually
tags: [] # Added empty tags manually
---

## Vue is not detected : How to fix vue dev-tools issue ?

[Vue dev-tools](https://github.com/vuejs/vue-devtools) is a handy little tool developed by VueJs to make the debugging easier when you develop Vue Applications. Currently there is a [chrome extension available](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd). Also you can install it via yarn or npm as well.

But sometimes you might come across a issue like this when you try to use this tool.

![vue-not-detected-1](https://lazydevguy.files.wordpress.com/2017/01/vue-is-not-detected1.png)

Following are few ways to fix the issue.

1. First of all , make sure you are using a non-minified version of VueJS.
2. If you are using File:// protocol , By enabling "allow access to file URL's option" in the chrome extension

![vue-not-detected-2](https://lazydevguy.files.wordpress.com/2017/01/vue-is-not-detected-chrome-extension.png?w=300&h=145)

after this try closing and reopening the chrome.

3. By adding the devtools = true in the app.js file.
Vue.config.devtools = true

More info [here](https://vuejs.org/v2/api/#devtools)

4. If non of the above doesn't work, try loading your Vue app over a local http-server.
Here is a simple http-server. And close and reopen your chrome tab.

I was able to resolve this issue by following option 2 and 3.

[vue-not-detected-3](https://lazydevguy.files.wordpress.com/2017/01/vue-is-not-detected-solved.png) 