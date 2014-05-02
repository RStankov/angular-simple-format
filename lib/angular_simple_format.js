angular.module('simpleFormat', ['ngSanitize']).filter('simpleFormat', function($filter) {
  "use strict";

  var linky = $filter('linky');

  return function(text) {
    text = ((text || '') + '');
    text = linky(text);

    return text.replace(/\&#10;/g, "&#10;<br>");
  };
});
