'use strict';

angular.module('angularUiApp')
  .directive('titleDirective', function () {
    return {
      template: '<h1>Welcome to MyApp</h1>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the titleDirective directive');
      }
    };
  });
