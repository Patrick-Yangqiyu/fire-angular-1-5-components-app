function StudentDetailController() {
  var ctrl = this;
  ctrl.$onInit = function () {
    ctrl.isNewStudent = !ctrl.student.$id;
  };
  ctrl.saveStudent = function () {
    ctrl.onSave({
      $event: {
        student: ctrl.student
      }
    });
  };
  ctrl.updateStudent = function () {
    ctrl.onUpdate({
      $event: {
        student: ctrl.student
      }
    });
  };
  ctrl.deleteStudent = function () {
    ctrl.onDelete({
      $event: {
        student: ctrl.student
      }
    });
  };
  ctrl.tagChange = function (event) {
    ctrl.student.tag = event.tag;
    ctrl.updateStudent();
  }
}

angular
  .module('components.student')
  .controller('StudentDetailController', StudentDetailController);
