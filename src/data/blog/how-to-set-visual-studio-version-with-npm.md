---
author: Malik
pubDatetime: 2015-06-24T00:00:00.000Z
modDatetime: null
title: How to set Visual Studio Version With NPM
slug: how-to-set-visual-studio-version-with-npm
featured: false
draft: false
tags:
  - npm
  - visual-studio
  - windows
description: When you install NPM modules in windows environment , some times you might ran into an error like below.
---

## How to set Visual Studio Version With NPM

When you install NPM modules in windows environment  , some times you might ran into an error like below.

> C:\Program Files (x86)\MSBuild\Microsoft.Cpp\v4.0\V120\Microsoft.Cpp.Platform.targets(64,5): error MSB8020: The build tools for Visual Studio 2010 (Platform Toolset = 'v100') cannot be found. To build using the v100 build tools, please install Visual Studio 2010 build tools. Alternatively, you may upgrade to the current Visual Studio tools by selecting the Project menu or right-click the solution, and then selecting "Upgrade Solution...". [C:\Users\Documents\FLIS.Client.Tests\node_modules\karma\node_modules\socket.io\node_modules\socket.io-client\node_modules\ws\build\bufferutil.vcxproj]

As you can see the error says that it cannot find the Visual studio 2010 platform toolset. In this case you can externally specify build platform toolset to NPM like this.

```
–msvs-version=2013 // I am running visual studio 2013 . So…
```

For E.g If you want to install protractor with `–msvs-version=2013`

```
npm install protractor –msvs-version=2013
``` 