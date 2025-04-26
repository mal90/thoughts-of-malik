---
title: "AngularJS Angular 2 Angular 4 Angular 5 naming confusion"
pubDatetime: 2017-12-31T00:00:00.000Z
description: "I have seen even experienced front end developers doing the mistake of using incorrect terms for the angular(js) version they are using."
---

## AngularJS, Angular 2, Angular 4, Angular 5 naming confusion

I have seen even experienced front end developers doing the mistake of using incorrect terms for the angular(js) version they are using.

This simple blog post is trying to address this issue.

### AngularJS 1.X

Anything which comes under AngularJS 1.X  can be called as AngularJS or Angular . JS

### Angular 2.X.X

--------------------------

### Following statement is wrong!

I am using AngularJS 2.

--------------------------

If you are using Angular 2.X.X or higher version then your application using Angular platform. Depending the version it can be Angular 2 , Angular 4 or Angular 5.

Example :

Angular 2.X.X is angular 2
Angular 4.X.X is angular 4

Angular 2 is complete paradigm shift from original AngularJS platform .  Another important point is Angular 2 is not backward compatible with AngularJS .

Since angular 2.X.X on wards they have started using semantic versioning . Which means Major version number will be changed for any breaking changes to the core of the library.

*After 2.X.X , next released version of Angular was 4.X.X and current version is Angular 5.X.X*

You can view the [changed log](https://github.com/angular/angular/blob/master/CHANGELOG.md) which starts from Angular 2.0.0

### This brings to another important question . What happened to Angular 3.X.X version and why was it skipped?

This happened due to a slight misalignment with the angular route package . Angular team wanted to sync the angular 2.X.X version with the angular router version 3.X.X at that time. more info can be found [here](http://angularjs.blogspot.fr/2016/12/ok-let-me-explain-its-going-to-be.html#Why_not_version_3_then_62).

TLDR of this article.

- If you are using version 1.X or earlier then you are a AngularJS developer
- If you are using angular 2 or above you are an Angular developer . 