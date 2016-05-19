'use strict';

var Filter = require('./filter');
var svgDownload = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M446.844 208.875A121.541 121.541 0 0 0 448 192c0-70.563-57.406-128-128-128-40.938 0-78.531 19.344-102.344 51.063A108.881 108.881 0 0 0 192 112c-61.75 0-112 50.25-112 112 0 1.563.031 3.094.094 4.625C33.813 242.375 0 285.313 0 336c0 61.75 50.25 112 112 112h272c70.594 0 128-57.406 128-128 0-46.656-25.656-88.812-65.156-111.125zM384 416H112c-44.188 0-80-35.813-80-80s35.813-80 80-80c2.438 0 4.75.5 7.125.719-4.5-10-7.125-21.031-7.125-32.719 0-44.188 35.813-80 80-80 14.438 0 27.813 4.125 39.5 10.813C246 120.25 280.156 96 320 96c53.031 0 96 42.969 96 96 0 12.625-2.594 24.625-7.031 35.688C449.813 238.75 480 275.688 480 320c0 53.031-42.969 96-96 96z"/><path d="M288 192h-64v96h-64l96 96 96-96h-64z"/></svg>';

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
     text += '<h2 class="podcast__title">' + item.title + '</h2>';
     text += '<div class="podcast__meta">';
     text += '<time class="podcast__date">' + item.date + '</time>';
     text += '<div class="podcast__duration">' + item.duration.content + '</div>';
     text += '</div>';
     text += '<p class="podcast__content">' + item.subtitle.content + '</p>';
     text += '<div class="podcast__player">';
     text += '<a href="' + item.link.href + '" download class="podcast__download">' + svgDownload + '</a>';
     text += '<audio src="' + item.link.href + '" preload="none" controls></audio>';
     text += '</div>';
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
