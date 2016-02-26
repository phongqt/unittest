(function() {
  angular.module('app')
  .directive('myDirective', myDirective);
  function myDirective() {
    return {
      restrict: 'E',
      template: '<p>Hello world!</p>',
      link: function(scope, element, attrs) {
      }
    };
  }
})();