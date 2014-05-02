angular.module('simpleFormat', ['ngSanitize']).filter('simpleFormat', function($sanitize) {
  "use strict";

  return function(text) {
    text || (text = '');
    text += '';
    text = text.replace("\n", "\n<br>");

    return text;
  };
});
