---
title: "Debugging a weird front-end issue"
pubDatetime: 2020-06-04T00:00:00.000Z
description: "I've encountered rather odd issue which took me some time to discover."
---

I've encountered rather odd issue which took me some time to discover. This is one of those issues that you spent 99% time debugging and the rest of the 1% of the time actually fixing the issue. I found this issue really intriguing so decided to write a blog post about it.

## Little bit of background

We use angularjs in one of our SPA app ( Why we still use angularjs in 2020 is a separate topic which needs its own blog post 🙂 ). Recently we decided to update JQuery core from 3.4.0. to 3.5.0 which is the latest version todate.

Some of the libraries we use in our app are not maintained anymore and depends on JQuery. So when we decided to update we expected some issues would occur from these libraries.

### Issue

Just as expected after the update, one of our components which basically a date-picker stopped working. Below is part of the code.

```
export class DatePickerComponent {
  .......
  transclude: any = {
    iconContent: "?iconContent",
  };
  template: string = `
    <div ng-class="{ 'date-field': true, 'is-focused': $ctrl.isFocused }">
      <span
        ng-click="$ctrl.focusInput()"
        ng-transclude="iconContent"
      />
      <input
        ng-class="$ctrl.inputClass()"
        type="text"
        readonly
        ng-value="$ctrl.formattedDate()"
        ng-focus="$ctrl.beginDateSelection()"
        ng-blur="$ctrl.cancelSelection()"
      ></input>
    </div>
  `;
}
```

But the main problem was not that the date-picker was not working , but there were no console errors whatsoever being thrown by the code. Ah the horror!!!

### Debugging journey

I started looking for answers in stackoverflow and github issues. But in my case there wasn't much to go with since there were no errors.

So I did the next best thing I could do. I tried isolating the issue. I started removing line by line until i saw a difference in the behaviour. And just as I remove the below line, the whole date picker started working.

```
<span
 ng-click="$ctrl.focusInput()"
 ng-transclude="iconContent"
/>
```

So finally there was some relief. Now I know that this particular line somehow has an issue with the JQuery update. But I don't know exactly why this ng-transclude causes the entire date picker component to stop working.

So I did some digging to see if there are any connection between JQuery update vs angular ng-transclude directive. I even created a [stackoverflow](https://stackoverflow.com/questions/61767502/ng-transclude-does-not-work-any-more-after-jquery-update/61769848#61769848) question, desperately trying to find an answer. But no help there.

So I decided to dig into the actual source code of ng-transclude. If you don't know what exactly [ng-transclude](https://github.com/angular/angular.js/blob/master/src/ng/directive/ngTransclude.js) does , basically you can pass a template to a component or directive. In our case we use it to pass an image to the component called iconContent. We render the iconContent in the component.

Below I pasted part of the source-code of ng-transclude, and you can see we have the main function called ngTranscludeCompile , and the first thing we do is, we call .contents() on the tElement which is passed into the ng-transclude.


```
compile: function ngTranscludeCompile(tElement) {

  //Remove and cache any original content to act as a fallback
  var fallbackLinkFn = $compile(tElement.contents());
  tElement.empty();
```

I assumed this tElement is the `<span>` element where we added the ng-transclude="iconContent". So the line invokes contents() on this span element and contents() is a JQuery method. Okay now we are getting somewhere with this issue.

Next thing I did was looking at the release notes of [JQuery 3.5.0](https://blog.jquery.com/2020/04/10/jquery-3-5-0-released/) update to see if there are any updates to the source code related to contents method. And just as I expected there were couple of changes.

![traverse](https://lazydevguy.files.wordpress.com/2020/06/image.png)

[https://blog.jquery.com/2020/04/10/jquery-3-5-0-released/](https://blog.jquery.com/2020/04/10/jquery-3-5-0-released/)

Now I know that I am getting closer to the root cause of this issue. But I still don't know what exactly the issue is or how I can possibly fix it. So I decided to look at the code changes for the [JQuery core from 3.4.0 to 3.5.0](https://github.com/jquery/jquery/compare/3.4.0...3.5.0).

I looked for all the places where there are changes related to contents() and found there are quite a few changes to the unit test cases which basically asserts cases related to .contents().

![jquery1](https://lazydevguy.files.wordpress.com/2020/06/screenshot-2020-06-04-at-9.34.01-pm.png?w=2048)
[https://github.com/jquery/jquery/compare/3.4.0...3.5.0](https://github.com/jquery/jquery/compare/3.4.0...3.5.0)

![jquery2](https://lazydevguy.files.wordpress.com/2020/06/screenshot-2020-06-04-at-9.34.35-pm.png?w=2048)
[https://github.com/jquery/jquery/compare/3.4.0...3.5.0](https://github.com/jquery/jquery/compare/3.4.0...3.5.0)

As you can see the issue was right there and I didn't see it. After the new update, JQuery .contents() doesn't work well with the html elements which doesn't use proper closing tags. And below is the code which causes the issue in my case and has the same improper `<span>` tag!

```
<span
 ng-click="$ctrl.focusInput()"
 ng-transclude="iconContent"
/>
```

So just as you guessed, right after added `</span>` tag, component started working again. The reason why I did not see any errors because the issue is with the html template so there were no console errors.

Main takeaway from this experience for me are

– Always write proper html code.
– Invest on unit tests cause it always pays off.

TLDR: I did not close a `<span>` tag properly which caused errors after JQuery update. 