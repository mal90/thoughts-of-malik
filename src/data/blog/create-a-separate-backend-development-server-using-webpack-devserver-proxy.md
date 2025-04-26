---
title: "Create a separate backend development server using webpack devServer.proxy"
pubDatetime: 2017-10-23T00:00:00.000Z
description: "This post assumes that you have a basic knowledge on webpack and javascript."
---

## Create a separate backend development server using webpack devServer.proxy

![webpack-banner](https://lazydevguy.files.wordpress.com/2017/10/web-pack-9.png?w=1024&h=633&crop=1)

*This post assumes that you have a basic knowledge on webpack and javascript.*

### Setting up client-end
I recently started using vue-webpack-simple-template as a boilerplate to develop a vue application for one of my projects.This template consists of webpack configuration which does the following functionalities.

1. Build all the related into one single file called build.js inside /dist director

![webpack-1](https://lazydevguy.files.wordpress.com/2017/10/web-pack-5.png)

2. Use webpack dev-server to host the front-end of the application in localhost.

![https://lazydevguy.files.wordpress.com/2017/10/web-pack-6.png](https://lazydevguy.files.wordpress.com/2017/10/web-pack-6.png)

So this was easy . All i had to do was run the command npm run dev and it will fire up the webpack-dev-server in localhost:8080 so that i can immediately get on with the development.

### Setting up the server

I created a simple back-end using node , express . I created a server.js file for this purpose . There i wanted to have create a simple api end-point to test whether the back-end works. So this is what i did.

![webpack-3](https://lazydevguy.files.wordpress.com/2017/10/web-pack-11.png)

Created a simple back-end api-end point to retrieve list of products from local mongodb collection called products. Note that i am using a different port (3000) for the back-end.

![webpack-4](https://lazydevguy.files.wordpress.com/2017/10/web-pack-2.png)

and added a npm script to run the server.

![webpack-5](https://lazydevguy.files.wordpress.com/2017/10/web-pack-3.png)

And i executed the command npm run server , and tried accessing the api-end by typing

*the url localhost:3000/api/products*

![webpack-5](https://lazydevguy.files.wordpress.com/2017/10/web-pack-4.png)

Okay everything seems to be working up to this point. Okay what is the problem then...


### Problem

### Integration front-end to back-end

Next i wanted do was integrating the front-end with the simple back-end i have made.
So i wrote a simple $http.get to get results from /api/products in Main.vue file.

![webpack-6](https://lazydevguy.files.wordpress.com/2017/10/web-pack-7.png)

And reloaded the page. But when i checked the console all i got was a 404 error. It says `localhost:8080/api/products/ was not found`.

I rechecked the api-end by checking the url localhost:3000/api/products in the browser just to confirm the server runs okay and i got results!

Okay what was the problem then?

### Different ports

After putting my mind on this for few minutes i realized what the problem was . And as usual it was a very stupid mistake.

My front-end configured by webpack was running on port 8080 while the simple back-end api i have created using node,express running on port 3000. So when i tried to access the /api/products from the application using $http.get method it was trying to get the resource from following url ..

`localhost:8080/api/products`

It is trying to access something which isn't there , hence the 404 error. A classic dummy dev err.

### Solution

So the solution is really simple . When you do developments using webpack and when you come across a scenario where you want to have a separate back-end server you can proxy the back-end api urls to the front-end using a special webpack-dev-server configuration.

![webpack-7](https://lazydevguy.files.wordpress.com/2017/10/web-pack-8.png)

It will proxy any request from `localhost:8080/api/` to `localhost:3000/api/`

So for example when i do this in my application `/api/products/`

it will access `localhost:3000/api/products` and NOT `localhost:8080/api/products` even though the application is running on port 8080.

Conclusion

When i had this problem , i was surprised that i couldn't find a decent solution specified anywhere with a proper explanation. That is why i decided to write a blog post my personal experience. Hope anyone with a similar issue will find this post useful.

You can find the relevant documentation for webpack devserver proxy [here](https://webpack.js.org/configuration/dev-server/#devserver-proxy). 