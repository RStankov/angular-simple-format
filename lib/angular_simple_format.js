angular.module('simpleFormat', ['ngSanitize']).filter('simpleFormat', function($filter) {
  "use strict";

  var linky = $filter('linky');

  return function(text) {
    return linky((text || '') + '').replace(/\&#10;/g, "&#10;<br>");
  };
});
