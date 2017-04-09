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


### Step 07 | Deploy Server on Heroku
In this step we'll deploy server side on Heroku.

Package.json
- add script `"start": "node ./dist/server.js", `

CLI
- `$ git checkout master`
- `$ heroku create`
- optional: `$ git checkout <WORKING_BRANCH>`
- `$ git subtree push --prefix dist heroku master` or `git subtree push --prefix dist heroku <YOUR_BRANCH>:master`
- `$ heroku ps:scale web=1`
- `$ heroku open`

Web
- go on
[https://devcenter.heroku.com/articles/git](https://devcenter.heroku.com/articles/git)
and more details on  [https://devcenter.heroku.com/articles/getting-started-with-nodejs](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
- follow each points

APP providers
- Change url endPoints by the herokuapp server

## About author
Hi, i'm a Front-end developper living in Geneva Switzerland and i build hybrid mobile & web applications for almost 15 years. You can follow me on Twitter @FazioNico or checkout my own website http://nicolasfazio.ch
