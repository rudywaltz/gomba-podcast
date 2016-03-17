'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
//var sass = require('../config/sass');
var jade = require('../config/jade');

gulp.task('serve', ['browserSync'], function() {
  watch(jade.src, function() { gulp.start('jade'); });
});
