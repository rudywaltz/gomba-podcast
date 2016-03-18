'use strict';

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
     text += '<tr>';
     text += '<td><a href="' + item.link.href + '" target="_blank">' + item.title + '</a></td>';
     if(i<5) {
       text+='<td><audio src="' + item.link.href + '" preload="none" controls></audio></td>';
     } else {
       text+='<td></td>';
     }
     text+='<td>' + item.duration.content + '</td>';
     text += '<td class="content">' + item.subtitle.content + '</td>';
     text += '<td class="date">' + item.date + '</td>';

     text += '</tr>';
   }

   document.getElementById('table').innerHTML = text;
 }

 var init = function() {
   injectScript("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20feednormalizer%20where%20url%3D'http%3A%2F%2Fgombapresszo.hu%2Fpodcast%2Fpodcast.xml'%20and%20output%3D'atom_1.0'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=handleResponse");
 };

 module.exports = {
   init: init,
   handleResponse: handleResponse
 } ;
