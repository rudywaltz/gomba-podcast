'use strict';

var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var config = require('../config/javascript');

var w = watchify(browserify(config.browserify));
var b = browserify(config.browserify);

var build = function() {
  return b.bundle()
    .pipe(source(config.src))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(config.dest));
};

var watch = function() {
  return w.bundle()
    .pipe(source(config.src))
    .pipe(buffer())
//    .pipe(uglify())
    .pipe(gulp.dest(config.dest));
};

gulp.task('javascript-watch', watch);
gulp.task('javascript-build', build);
b.on('update', watch);
