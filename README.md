Angular Simple Format
=====================

Angular filter for applying simple html formatting to text.

Formatting applied:

* Appending linebreak (&lt;br&gt;) after newline(\n).
* Converts urls to link tags
* Escapes html tags

### Example usage

```javascript
app.controller('showPostCtrl', function($scope){
  $scope.text = "example:\n line 1\n line 2\n line 3\n http://example.com"
});
```

```html
<p ng-bind-html='text|simpleFormat'>
```

### Requirements

```
angular.js
angular-sanitize.js
```

### Installation

Include [lib/angular_simple_format.js](https://github.com/RStankov/angular-simple-format/blob/master/lib/angular_simple_format.js) into your page and then list `simpleFormat` as your module dependency.

```js
window.app = angular.module('YourApp', ['simpleFormat'])
```

### Running the tests

Install bower developer dependencies - ```bower install```.

Just open - ```test/runner.html```.

### Contributing

Every fresh idea and contribution will be highly appreciated.

### License

MIT License.

