'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('../config/sass');
var jade = require('../config/jade');
var javascript = require('../config/javascript');

gulp.task('serve', ['build', 'browserSync'], function() {
  watch(sass.src, function() { gulp.start('sass'); });
  watch(javascript.files, function() { gulp.start('javascript-watch'); });
  watch(jade.src, function() { gulp.start('jade'); });
});
