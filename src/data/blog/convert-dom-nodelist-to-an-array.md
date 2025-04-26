---
title: "Convert DOM NodeList to an Array"
pubDatetime: 2018-09-22T00:00:00.000Z
description: "When you work with DOM related implementations using Javascript , a common issue you would face is manipulating a NodeList collection."
---

## Convert DOM NodeList to an Array

When you work with DOM related implementations using Javascript , a common issue you would face is manipulating a NodeList collection.

Example :

when you use document.querySelectAll('some selecter') , it will return a NodeList which is a collection of html nodes.

![nodelist](https://lazydevguy.files.wordpress.com/2018/09/q2.png)

As shown in the above example , this is NodeList appears to be an Array. We can even invoke .length property on it.

![nodelist-2](https://lazydevguy.files.wordpress.com/2018/09/q2.png)


If you are new to Javascript , you would probably assume this NodeList to be an Array.  Even i made that mistake when i came across this for the first time.

To test this , Let's use [Shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) method of Array , which removes the first element of the given Array.

![shift](https://lazydevguy.files.wordpress.com/2018/09/shifte.png)

Well it didn't work. To reassure let's go another step ahead . let's use instanceof property like below.It returns false. Which means it is not a type of Array.

![shift2](https://lazydevguy.files.wordpress.com/2018/09/inaceof.png)

Okay, now back to the main problem of this post , how to convert this NodeList to an actual array.

### Solution 1

using [].slince.call() method , you can convert a NodeList collection to an Array.

![slice](https://lazydevguy.files.wordpress.com/2018/09/call.png)

Let's now test instanceof, shift() on above.

![slice-2](https://lazydevguy.files.wordpress.com/2018/09/call2.png)

Nice, now we know how to convert a NodeList to an Array . Pretty neat , right.

Some of you might be wondering  , when we use [].slice.call , what is happening under the hood ?

### BREAKDOWN OF [].SLICE.CALL

`[]`: This is an array object

`[].slice`:  Returns a new array object , Since we have not specified the start and end of the array , it returns an exact copy of that Array.

`[].slice.call(nodelist)`: Using call method , you can borrow a function from another object. In this case , Nodelist is borrowing the [].slice() method and using it in own context. Instead of .call , we could use .apply() and it will basically give you the same result.


### Solution 2

Same thing you could do this without much hassle using ES6 syntax `Array.from()`.

![arrayfrom](https://lazydevguy.files.wordpress.com/2018/09/es6.png)

![array-from-2](https://lazydevguy.files.wordpress.com/2018/09/es6-ii.png) 