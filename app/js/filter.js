'use strict';

var List = require('list.js');

var options = {
  valueNames: [ 'podcast__title', 'content' ]
};

var initList = function () {
  var podcastList = new List('podcast-wrapper', options);
};

module.exports = {
  init: initList
} ;
