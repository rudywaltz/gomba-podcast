'use strict';

var gulp = require('gulp');
var config = require('../config/index');
var awspublish = require('gulp-awspublish');
// var argv = require('yargs').argv;


var publisher =  awspublish.create({
  region : 'eu-west-1',
  params: {
    Bucket: 'gombapresszo-podcast'
  }
});


var headers = {
  'Cache-Control': 'max-age=315360000, no-transform, public',
  'x-amz-acl': 'bucket-owner-full-control'
};

gulp.task('s3-publish', function() {
  return gulp.src('./dest/**/*')
       // gzip, Set Content-Encoding headers and add .gz extension
      // .pipe(awspublish.gzip({ ext: '.gz' }))

      // publisher will add Content-Length, Content-Type and headers specified above
      // If not specified it will set x-amz-acl to public-read by default
      .pipe(publisher.publish(headers))

      // create a cache file to speed up consecutive uploads
      .pipe(publisher.cache())

       // print upload updates to console
      .pipe(awspublish.reporter());
});
