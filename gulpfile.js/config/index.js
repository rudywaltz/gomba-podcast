'use strict';
var config = {};
var p = require('../../package.json');

config.src = './app';
config.dist = './dest';
config.dest = config.dist;
config.version = p.version;
config.homepage = p.homepage;

module.exports = config;
