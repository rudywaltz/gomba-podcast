'use strict';

var gulp = require('gulp');
var jade = require('gulp-jade');
var browserSync = require('browser-sync');
var config = require('../config/jade');

gulp.task('jade', function() {

  gulp.src(config.src)
    .pipe(jade(config.src))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({ stream: true }))
});
