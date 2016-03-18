'use strict';

var config = require('./');

module.exports = {
  browserify: {
    entries: config.src + '/js/app.js',
    debug: true
  },
  files: config.src + '/js/**/*.js',
  src: 'app.js',
  dest: config.dest + '/js',
};
