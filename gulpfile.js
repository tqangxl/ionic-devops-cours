/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   13-04-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 13-04-2017
 */

 var gulp = require('gulp');
 var ghPages = require('gulp-gh-pages');

 let path = './www'; //deploy path

 gulp.task('deploy', function() {
   return gulp.src(path+'/**/*')
     .pipe(ghPages());
 });
