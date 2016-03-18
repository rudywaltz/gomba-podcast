'use strict';

console.log('lorem');
var Podcast = require('./podcast');
window.handleResponse = Podcast.handleResponse;

    document.addEventListener("DOMContentLoaded", function() {
       Podcast.init();
    }, false);
