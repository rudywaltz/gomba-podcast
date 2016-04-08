'use strict';

var Filter = require('./filter');

function injectScript(url) {
   var scriptElement = document.createElement('script');
   scriptElement.setAttribute('type', 'text/javascript');
   scriptElement.setAttribute('src', url);
   document.getElementsByTagName('head')[0].appendChild(scriptElement);
 }
 function handleResponse(response) {
   var text = '';
   var item;
   for (var i = 0, k = response.query.results.feed.entry.length; i < k; i++) {
     item = response.query.results.feed.entry[i];
     text += '<li class="podcast">';
     text +='<div class="podcast__duration">' + item.duration.content + '</div>';
     text += '<h1 class="podcast__title">' + item.title + '</h1>';
     text +='<audio src="' + item.link.href + '" preload="none" controls></audio>';
     text += '<div class="content">' + item.subtitle.content + '</div>';
     text += '<time class="date">' + item.date + '</time>';

     text += '</li>';
   }
   document.getElementById('target').innerHTML = text;
   Filter.init();
 }

 var init = function() {
   injectScript("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20feednormalizer%20where%20url%3D'http%3A%2F%2Fgombapresszo.hu%2Fpodcast%2Fpodcast.xml'%20and%20output%3D'atom_1.0'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=handleResponse");
 };

 module.exports = {
   init: init,
   handleResponse: handleResponse
 } ;
