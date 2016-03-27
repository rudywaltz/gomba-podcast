'use strict';

var gulp = require('gulp');
var jade = require('gulp-jade');
var browserSync = require('browser-sync');
var revReplace = require('gulp-rev-replace');
var config = require('../config/jade');

gulp.task('jade', function() {
  var manifest = gulp.src(config.dest + '/rev-manifest.json');

  gulp.src(config.src)
    .pipe(jade(config.src))
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({ stream: true }))
});
