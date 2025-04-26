---
title: "Issue creating Angular custom elements on Stackblitz Error Failed to construct HTMLElement"
pubDatetime: 2018-05-27T00:00:00.000Z
description: "Angular elements is the newest addition to web component development ."
---

## Issue creating Angular custom elements on Stackblitz. Error Failed to construct ‘HTMLElement’ Please use the ‘new’ …"

Angular elements is the newest addition to web component development . It was released with Angular 6 release. If you create an Angular element application in stackblitz you might come across the following issue.

```js
Error: Failed to construct 'HTMLElement': Please use the 'new' operator, this DOM object constructor cannot be called as a function.
```

To overcome this issue , you need to add this shim to the external resources section in your stackblitz app.

Check out the following very simple hello-world angular elements application made on stackblitz 