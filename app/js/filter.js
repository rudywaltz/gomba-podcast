'use strict';

var List = require('list.js');

var options = {
  valueNames: [ 'podcast__title', 'content' ]
};

var filterOldShow = function (list) {
  var element = document.getElementById('oldShow');
  element.addEventListener('change', function() {
    list.filter(function(item) {
      var oldShowString = 'régi';
      var oldShow = item.values().content.toLowerCase().indexOf(oldShowString) > -1 ||
        item.values().podcast__title.toLowerCase().indexOf(oldShowString) > -1;
      if(element.checked) {
        return oldShow;
      } else {
        return true;
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
