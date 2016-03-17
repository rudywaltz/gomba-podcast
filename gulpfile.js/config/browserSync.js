'use strict';

var config = require('./');
module.exports = {
  open: false,
  port: 6789,
  notify: true,
  logLevel: 'silent',
  server: {
    baseDir: [config.dest + '/doc', config.dest]
  }
};
