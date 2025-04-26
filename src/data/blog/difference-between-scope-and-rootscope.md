---
author: Malik
pubDatetime: 2015-02-04T00:00:00.000Z
modDatetime: null
title: Difference between $scope and $rootscope
slug: difference-between-scope-and-rootscope
featured: false
draft: false
tags:
  - angular
  - scope
  - javascript
description: Whenever you declare a controller in angular , you automatically create a `$scope` which is relevant to that controller.
---

## Difference between \$scope and \$rootscope

Whenever you declare a controller in angular , you automatically create a `$scope` which is relevant to that controller.

### So what does a \$scope mean

from documentation
> `$scope` is an object that refers to the application model. It is an execution context for expressions. `$scopes` are arranged in hierarchical structure which mimic the DOM structure of the application. `$scope` can watch expressions and propagate events.” .

In simpler terms it means that it is a way of tying an object to the DOM . If you consider the MVC model in Angular , the scope acts as a model . It is a template which hosts all the functions and the related data . Okay now that we have gotten some insight into the `$scope`.

Now let talk about `$rootscope`.

`$rootscope` is the parent (more like a root parent) of all the `$scopes` you create . It is the ultimate boss . It is (almost) like the Object class of Java .It is the top most `$scope` of your app and it contains ng-app directive . There is only one `$rootscope` for each of the Angular application .

![ difference ](https://lazydevguy.files.wordpress.com/2015/02/blog.png) 