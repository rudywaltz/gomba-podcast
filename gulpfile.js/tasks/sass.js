var gulp          = require('gulp');
var browserSync   = require('browser-sync');
var sass          = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var config        = require('../config/sass');
var rev = require('gulp-rev');

gulp.task('sass', function() {
  return gulp.src(config.src)
    .pipe(sass(config.settings))
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({ stream: true }));
});
