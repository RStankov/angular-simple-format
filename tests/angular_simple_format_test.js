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

  it("doesn't format text if not needed", function() {
    expect(simpleFormat('string')).to.eq('string');
  });

  it("convert input data to string", function() {
    expect(simpleFormat(null)).to.eq('');
    expect(simpleFormat(false)).to.eq('');
    expect(simpleFormat(undefined)).to.eq('');
    expect(simpleFormat(1)).to.eq('1');
  });

  it("appends linebreaks after newlines", function() {
    expect(simpleFormat("line 1\nline 2")).to.eq('line 1&#10;<br>line 2');
    expect(simpleFormat("line 1\nline 2\nline 3")).to.eq('line 1&#10;<br>line 2&#10;<br>line 3');
  });

  it("escapes html input", function() {
    expect(simpleFormat("<html>")).to.eq('&lt;html&gt;');
    expect(simpleFormat('<input type="text">')).to.eq('&lt;input type=&#34;text&#34;&gt;');
  });

  it("converts url into link tags", function() {
    expect(simpleFormat('http://rstankov.com')).to.eq('<a href="http://rstankov.com">http://rstankov.com</a>');
  });
});
