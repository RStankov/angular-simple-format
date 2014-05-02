"use strict";

function loadFilter(module, name) {
  name || (name = module);

  var filter;
  angular.injector(['ng', module], false).invoke(function($filter) {
    filter = $filter(name);
  });

  return filter;
}

describe('Angular Simple Format', function() {
  var simpleFormat = loadFilter('simpleFormat')

  it ("return string as it is if not formatting is needed", function () {
    expect(simpleFormat('string')).to.eq('string');
  });

  it ("return string as it even other data types are provided", function () {
    expect(simpleFormat(null)).to.eq('');
    expect(simpleFormat(false)).to.eq('');
    expect(simpleFormat(undefined)).to.eq('');
    expect(simpleFormat(1)).to.eq('1');
  });
});
