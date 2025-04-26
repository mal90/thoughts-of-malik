---
title: "Vue.js .Is it worth it to learn yet another javascript library?"
pubDatetime: 2017-08-29T00:00:00.000Z
description: "This is a very highlevel take on Vue.js and the reason for its popularity ."
author: "Malik"
tags:
  - vuejs
  - javascript
slug: vuejs-is-it-worth-it-to-learn-yet-another-javascript-library
featured: false
draft: false
modDatetime: null
---

## Vue.js .Is it worth it to learn yet another javascript library?

This is a very highlevel take on Vue.js and the reason for its popularity . If you want to go deeper , i suggest you to have look at the [documentation](https://vuejs.org/v2/guide/#What-is-Vue-js) and the [official comparison between Vue.js other modern javascript frameworks/libraries](https://vuejs.org/v2/guide/comparison.html).

Vue.js (pronounced /vjuː/, like view) is a [lightweight](https://vuejs.org/v2/guide/comparison.html#Size-and-Performance) library which can be used to develop data-reactive web components.It mainly focuses on building the "view" part of a web application.It also provide state management with [vuex](https://github.com/vuejs/vuex).[Version 2 of Vue.js released just over an year ago](https://github.com/vuejs/vue/releases/tag/v2.0.0-alpha.1) , So you could say that it is relatively new when compared with other frameworks such as AngularJS , Angular , React or EmberJS.Vue.Js also contains a mix of some of the features you can find it in both AngularJs and React.But since it is a new library , the user community and the ecosystem of Vue.js are also relatively small , but its popularity growing rapidly as you can see below.

![vue-trend](https://lazydevguy.files.wordpress.com/2017/08/vue-trend.png)
vue.js google trend in within last 12 months


source : [https://trends.google.com/trends/explore?q=vue.js,react.js,angular.js](https://trends.google.com/trends/explore?q=vue.js,react.js,angular.js)

This brings us to the next question . Why is it so popular ?

### It has adapted good features from similar , older javascript libraries.

From React, it got component-based approach, props, one-way data flow for components hierarchy, performance, virtual rendering ability and focuses on core library instead of bloating with so much of unwanted features .
From Angular, it got similar templates with good syntax, and two-way data binding when you need it (inside single component)

### Easy to setup and use

Vue.js is extremely easy to setup and use . It all just takes few lines of code to setup to start using it . As someone who worked with AngularJs for the past few years , it was really surprising to see how little code is needed to [configure Vue.js](https://jsfiddle.net/9Lw6yxpp/). Even if you are a person who just entered in to modern javascript development, you can easily start using it by just referring the guidelines of the official documentation.

### Lightweight
Vue.js only focusing on the core functionalities . If you want to add more features you have the freedom to add them as additional dependencies into your project.

### Easy documentation and rapidly growing user community
Vue.js is still at its early stage . But the community is growing due to its simplicity . The official website provides a clear and comprehensive documentation on its API . Stackoverflow has a growing community on Vue.js as well. Vue.js has been starred on github more than 60k times surpassing Angularjs and is only behind React among modern , popular javascript libraries/frameworks.


### My experience so far with Vue.js
I've been developing Single Page Applications for the past 3 years using AngularJs.

Some of the issues I've faced while using AngularJs such as steeper learning curve , tightly coupled core with unwanted features/plugins and complex configuration were bugging me for a long time.

I was never really comfortable with React and never had the chance to switch to React.But when i came across Vue.js right after its 2nd major release , i saw that all of my problems stated above were immediately solved.I loved it because of the simplicity it provides.Recently we have integrated Vue.Js to one of our core projects.My opinion is that if there is a requirement to create data-reactive webcomponants without much configuration , then Vue.js is the answer.


### Valuable resources for Vue.js
1. [vue-devtools](https://github.com/vuejs/vue-devtools) : This is a tool to debug Vue.js applications . There is a chrome [extension](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en) available under the same. I have written a blog post related to this tool awhile back.
2. [Awesome Vue.js](https://github.com/vuejs/awesome-vue) : Long list of various resources for Vue.Js.
3. [30 minute video](https://www.youtube.com/watch?v=VPUdtEf3oXI&t=616s) tutorial by dev coffee.
4. [An introduction](http://wordpress.redirectingat.com/?id=725X1342&isjs=1&jv=15.2.4-stackpath&sref=https%3A%2F%2Flazydevguy.wordpress.com%2F2017%2F08%2F29%2Fvue-js-is-it-worth-it-to-learn-yet-another-javascript-library%2F&url=https%3A%2F%2Fwww.udemy.com%2Flearn-vue-js-introduction-to-simple-reactive-javascript%2F&xs=1&xtz=-330&xuuid=4b8858e9fdbb54a6e5a9132c179d7aa2&xcust=8982&xjsf=other_click__contextmenu%20%5B2%5D) to Vue.js Udemy course.
5. [A sample application](https://coligo.io/real-time-analytics-with-nodejs-socketio-vuejs/) done using Vue.js and Node (Code is provided).
6. [Getting started with Vuex](https://scotch.io/tutorials/state-management-in-vue-getting-started-with-vue) :  State management with Vue.js.
7. [vue-cli](https://github.com/vuejs/vue-cli) : Simple command line tool for scaffolding Vue.js applications 