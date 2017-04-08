function BookTagController() {
  var ctrl = this;
  ctrl.$onInit = function () {
    ctrl.tags = [
      'history', 'science-physics', 'business-economics', 'sociology-psychology'
    ];
  };
  ctrl.$onChanges = function (changes) {
    if (changes.tag) {
      ctrl.tag = angular.copy(ctrl.tag);
    }
  };
  ctrl.updateTag = function (tag) {
    ctrl.onChange({
      $event: {
        tag: tag
      }
    });
  };
}

angular
  .module('components.book')
  .controller('BookTagController', BookTagController);
