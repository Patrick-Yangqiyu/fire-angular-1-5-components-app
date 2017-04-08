function lengthCheck() {
  return {
    restrict: 'A',
    require: 'ngModel',
    compile: function ($element) {
      $element.addClass('dynamic-input');
      return function ($scope, $element, $attrs, $ctrl) {
        var dynamicClass = 'dynamic-input--no-contents';
        $scope.$watch(function () {
          return $ctrl.$viewValue;
        }, function (newValue) {
          if (newValue) {
            $element.removeClass(dynamicClass);
          } else {
            $element.addClass(dynamicClass);
          }
        });
      };
    }
  };
}

/**
 * @ngdoc directive
 * @name lengthCheck

 **/
angular
  .module('components.student')
  .directive('lengthCheck', lengthCheck);
