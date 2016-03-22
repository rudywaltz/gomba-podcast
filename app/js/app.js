'use strict';

var Podcast = require('./podcast');
var Filter = require('./filter');

window.handleResponse = Podcast.handleResponse;

    document.addEventListener("DOMContentLoaded", function() {
      Podcast.init().then( function () {
        console.log('ready');
      });
      setTimeout(function () {
        Filter.init();
      },3000);
    }, false);
