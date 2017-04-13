<!--
@Author: Nicolas Fazio <webmaster-fazio>
@Date:   09-04-2017
@Email:  contact@nicolasfazio.ch
@Last modified by:   webmaster-fazio
@Last modified time: 09-04-2017
-->

<img src="http://cloudoki.com/images/frameworks/ionic.png" width="80"><img src="https://live.zoomdata.com/zoomdata/service/connection/types/icon/MONGO_MONGO?v=$%7Btimestamp%7D" width="80"><img src="http://apps.octoconsulting.com/images/expressIcon.png" width="80"><img src="https://material.angularjs.org/latest/img/icons/angular-logo.svg" width="80"><img src="http://code.runnable.com/images/provider-icons/icon-node.js.svg" width="80">

# Ionic DevOps - Cours
Ionic MEAN Stack DevOps cours for [Nomades Advenced Technologie](http://nomades.ch).


### Step 09 | Deploy Front-end to test in device
In this step we'll all see how to deploy IOS version

<b>CLI</b>
- `$ ionic platform add ios`
- `$ ionic build ios`

<b>At this step we'have tree possible way</b>
#### 1. Build pass True and result work in Prod & in Dev
- YOUR_DEPLOY_PATH is `./platforms/ios`

#### 2. Build pass True and result NOT work in Prod but WORK in Dev
- open projet in browser and open console...
- see wath you can track and fix error one by one..
  - try build one more time...
- if error is type of `ERROR Error: No provider for t!...` maybe you can't fix bug... so we have to build app in Angular Dev Mode but with Prod environments variable.- we have to build app without `--prod` but pass `NODE_ENV`variable to catch Production environments variable.
- YOUR_DEPLOY_PATH is `./platforms/ios`

#### 3. Build pass False and result NOT work in prod but WORK in Dev
- track cli error and fix it one by one.
- Good luck.
- try build one more time...

#### Final step
<b>IOS</b>
- enable devlopper option in mobile
- open project into xCode
- deploy app on your device.
- test with safari dev tools.


## About author
Hi, i'm a Front-end developper living in Geneva Switzerland and i build hybrid mobile & web applications for almost 15 years. You can follow me on Twitter @FazioNico or checkout my own website http://nicolasfazio.ch
