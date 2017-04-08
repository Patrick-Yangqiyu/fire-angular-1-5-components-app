function StudentController() {
  var ctrl = this;
  ctrl.selectStudent = function () {
    ctrl.onSelect({
      $event: {
        studentId: ctrl.student.$id
      }
    });
  };
}

angular
  .module('components.student')
  .controller('StudentController', StudentController);
