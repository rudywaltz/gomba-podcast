'use strict';

var List = require('list.js');

var options = {
  valueNames: [ 'podcast__title', 'content' ]
};

var filterOldShow = function (list) {
  var element = document.getElementById('oldShow');
  element.addEventListener('change', function() {
    console.log('change');
    list.filter(function(item) {
      var oldShow = 'régi';
      if (item.values().content.toLowerCase().indexOf(oldShow) > -1 ||
        item.values().podcast__title.toLowerCase().indexOf(oldShow) > -1) {
        return true;
      } else {
        return false;
      }
    });
    return false;
  }, false);
};


var initList = function () {
  var podcastList = new List('podcast-wrapper', options);
  filterOldShow(podcastList);
};

module.exports = {
  init: initList
} ;
