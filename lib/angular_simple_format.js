angular.module('simpleFormat', ['ngSanitize']).filter('simpleFormat', function($sanitize) {
  "use strict";

  return function(text) {
    return text;
  };
});
