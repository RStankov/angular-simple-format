angular.module('simpleFormat', ['ngSanitize']).filter('simpleFormat', function($sanitize) {
  "use strict";

  return function(text) {
    return ((text || '') + '')
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace("\n", "\n<br>");
  };
});
