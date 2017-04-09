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

### Step 05 | Configure app & clean code & update test
In this step we'll config app files and update all test to have build pass true

<b>app.module</b>
- add
```
const ionicAppConfig:Object = {
  tabsPlacement: 'top',
  mode: 'md'
};
```
- update `IonicModule.forRoot(MyApp),` with `IonicModule.forRoot(MyApp, ionicAppConfig),`

<b>manifest.json</b>
- update datas

<b>ionic.config.json</b>
- update datas

<b>config.xml</b>
- update datas

<b>./src/index.html</b>
- update datas

## About author
Hi, i'm a Front-end developper living in Geneva Switzerland and i build hybrid mobile & web applications for almost 15 years. You can follow me on Twitter @FazioNico or checkout my own website http://nicolasfazio.ch
