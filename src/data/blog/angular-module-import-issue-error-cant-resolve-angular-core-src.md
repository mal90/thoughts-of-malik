---
title: "Angular module import issue Error Cant resolve angular core src"
pubDatetime: 2018-01-18T00:00:00.000Z
description: "If you are using Angular 4 or greater version, you might come across following issue."
---

## Angular module import issue. Error Can't resolve @angular/core/src/..

If you are using Angular 4 or greater version, you might come across following issue.

```
Error: Can't resolve '@angular/core/src/event_emitter'
Error: Can't resolve '@angular/core/src/metadata/directives'
```

![angular-dep-error](https://lazydevguy.files.wordpress.com/2018/01/angular-issue.png)

If you are using vscode, chances are this issue will occur frequently.

### Reason and How to fix

Since angular 4 [deep imports](https://github.com/angular/angular/blob/master/docs/PUBLIC_API.md) are not supported.

Before Angular 4 you could do this, for example ..

`import { EventEmitter } from '@angular/core/src/event_emitter'`

but now in Angular 4 you can only go to *the first level*

`import { EventEmitter } from '@angular/core'` 