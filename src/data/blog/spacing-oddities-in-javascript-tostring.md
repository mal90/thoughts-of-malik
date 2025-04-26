---
title: "Spacing oddities in Javascript toString()"
pubDatetime: 2017-09-07T00:00:00.000Z
description: "When you invoke javascript toString() on a number like below."
---

## Spacing oddities in Javascript toString()

When you invoke javascript [toString()](https://www.w3schools.com/jsref/jsref_tostring_number.asp) on a number like below.

![to-string](https://lazydevguy.files.wordpress.com/2017/09/space1.png)

You are thrown with an error saying there is a syntax error . But when you do the same with an space between the 123 and .toString(2) ,code executes.

![to-string-2](https://lazydevguy.files.wordpress.com/2017/09/space2.png)

Strange right ? But nothing is strange when you work with Javascript . What happens here is …

In the first example `123.toString(2)` is being evaluated as `<123.t><oString(2)>` as two different parts. Because “.” is a valid part of a Number in Javascript. So when you execute `123.WhatevertheMethod()` , the interpreter think that whatever comes after the “.” belongs to the number . In this case , it is the letter “t”. Hence the error message.

2nd example, since we are using a space, Javascript interpreter now knows that you are invoking toString(2) on “123” literal. So it executes !
Even better you can write the same as below.

Even better you can write the same as below

![to-string-3](https://lazydevguy.files.wordpress.com/2017/09/space3.png)

using a parenthesis on the number , So that the interpreter knows that it is a literal “123”.
