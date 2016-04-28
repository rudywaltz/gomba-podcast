'use strict';

var List = require('list.js');

var options = {
  valueNames: [ 'podcast__title', 'podcast_content', 'podcast__date' ]
};

var filterOldShow = function (list) {
  var radios = document.getElementsByName('showtype');
  for (var i = 0; i < radios.length; i++) {
    radios[i].onclick = function () {
      showFilter(this.value);
    }
  }

  var showFilter =  function (type) {
    list.filter(function(item) {
      var oldShowString = 'régi';
      var oldShow = item.values().content.toLowerCase().indexOf(oldShowString) > -1 ||
        item.values().podcast__title.toLowerCase().indexOf(oldShowString) > -1;
      var newShow = !oldShow;
      if(type === "old-show") {
        return oldShow;
      } else if (type === "new-show") {
        return !oldShow;
      } else {
        return true;
      }
    })
  };
};


var initList = function () {
  var podcastList = new List('podcast-wrapper', options);
  filterOldShow(podcastList);
};

module.exports = {
  init: initList
} ;
