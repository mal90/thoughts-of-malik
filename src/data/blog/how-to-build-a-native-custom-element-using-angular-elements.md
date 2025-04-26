---
title: "How to build a native custom element using Angular Elements"
pubDatetime: 2018-06-02T00:00:00.000Z
description: "Custom elements is one of the few ways to create a web component."
---

## How to build a native custom element using Angular Elements

[Custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) is one of the few ways to create a web component. Angular 6 provides a module called ‘elements’ to create custom elements easily. Using angular elements , you can create reusable components which can be used outside an angular app.

For example you can use angular elements to create a custom widget and use it in a react or vue application by just importing the build script of the element and adding the custom element tag as follows …

```
<you-custom-element></your-custom-element>
<script src="path to your-custom-element-script.js"></script>
```

Pretty cool right ? Lets now see how we can build a simple custom element using angular elements library.

### Prerequisites:
Before you start creating angular elements , you need to make sure that you have installed Angular 6+ globally. You can check your current ng-cli version by running following command.

`> ng --version`

![ng-version](https://lazydevguy.files.wordpress.com/2018/06/ng-version.png)

If you don’t have Angular 6+ version installed globally, you could easily do it by running following command.

`> npm install -g @angular/cli`

Alright now let’s get into the real action.

### Step 1: Create new angular project.

```
> ng new sample-el
> cd sample-el
```

### Spte 2: Add angular elements module to your project.

```
> ng add @angular/elements
```

*Notice the ng add we have used here. This is a new angular 6+ feature will make you life easier by downloading dependencies , doing config changes and adding additional dependencies without manual intervention. In this scenario it will add elements modules to your project and document-register-element.js polyfill to your project configuration which is needed for creating custom elements.*

### Step 3: Create an Angular Component.

```
> ng g c sample-element
```

*Open the sample-element.component.html file and add some simple markup.*

![code-1](https://lazydevguy.files.wordpress.com/2018/06/html.png)

[https://github.com/mal90/angular-elements-sample/blob/master/src/app/sample-element/sample-element.component.html](https://github.com/mal90/angular-elements-sample/blob/master/src/app/sample-element/sample-element.component.html)

*Open sample-element.component.html file and add following code.*

![code-2](https://lazydevguy.files.wordpress.com/2018/06/ts1.png)

[https://github.com/mal90/angular-elements-sample/blob/master/src/app/sample-element/sample-element.component.ts](https://github.com/mal90/angular-elements-sample/blob/master/src/app/sample-element/sample-element.component.ts)

*It is important to note here that we are using Encapsulation.Native , so that our css will be compiled into javascript (instead of separate css file) and bundled into the component itself using the shadom-dom method.*

### Step 4: Converting "Sample Element" component into a custom element

![code-3](https://lazydevguy.files.wordpress.com/2018/06/module-ts.png)

[https://github.com/mal90/angular-elements-sample/blob/master/src/app/app.module.ts](https://github.com/mal90/angular-elements-sample/blob/master/src/app/app.module.ts)

### Importent points to be taken from above implementation in app.module.ts

- We’re Importing createCustomElement module from @angular/elements.
- Adding our sample element component to entryComponents array. This is because we need to direct the angular application to compile the component since we do not use it anywhere in the application.
- We are registering and converting our sample-component to native custom element using createCustomElements.define method.
- Finally we are using ngDoBootstrap() to manually bootstrap the app module.


And we are done. We have created your a simple angular custom element.

But wait , how do we know this is actually working?

### Step 5: Creating a single script file out of the Angular Custom Elements

First we need to install a simple node packages locally.

```
First we need to install a simple node packages locally.

```

And modify the script section of the package.json file like below.

![code-5](https://lazydevguy.files.wordpress.com/2018/06/package.png)

[https://github.com/mal90/angular-elements-sample/blob/master/package.json](https://github.com/mal90/angular-elements-sample/blob/master/package.json)

- we have create a npm script called “build” to build our app in prod mode. Also we are making hashing flag to none so that we will get 4 script files with standard names called main, polyfills , runtime and script.
- we have npm script called “package” to concatenate all 4 files into 1 script file called elements.js so that we can easily import in elsewhere.

Now we need run both “build “and “package” scripts to create our elements.js file using following command

```
> npm run build && package
```

### Step 6: Testing our Custom Element in a simple HTTP local server

Let’s install the following simple node http server globally.

```
> npm i http-server -g
```

Let’s create a index.html file out side of your angular app folder and place the elements.js file in the same location. Your index.html should look like below.

![code-6](https://lazydevguy.files.wordpress.com/2018/06/index.png)

Now open a cmd in the same location and run the following command.

```
> http-server
```

![code-7](https://lazydevguy.files.wordpress.com/2018/06/http-server.png)

This will spin a local http server where you can view your angular custom element you have created completely outside of an angular application. Isn’t it exciting!?

![code-8](https://lazydevguy.files.wordpress.com/2018/06/indexhtml1.png)

Using elements you could plug your angular web components in other applications such as vue , react or even in wordpress. But it is still pretty new and for the most part i would say it is still experimental. But it is a solid start.

Source of the above application can be found [here](https://github.com/mal90/angular-elements-sample).

Below are few tech talks by some industry experts you could refer to learn about angular elements.

- [A look into the future: Angular Elements – Antal Andrei](https://www.youtube.com/watch?v=-pS8M_RBf84)
- [Elements in v6 and Beyond – Rob Wormald](https://www.youtube.com/watch?v=Z1gLFPLVJjY)
- [Angular Elements by Pascal Precht](https://lazydevguy.wordpress.com/2018/01/18/angular-module-import-issue-error-cant-resolve-angular-core-src/)
