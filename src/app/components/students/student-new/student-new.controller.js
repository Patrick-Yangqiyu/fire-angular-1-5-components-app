function StudentNewController(StudentService, $state) {
  var ctrl = this;
  ctrl.$onInit = function () {
    ctrl.student = {
      user_name: '',
      email: '',
      department: '',
      phone: ''
    };
  };
  ctrl.createNewStudent = function (event) {
    return StudentService
      .createNewStudent(event.student)
      .then(function (student) {
        $state.go('student', {
          id: student.key
        });
      });
  };
}

angular
  .module('components.student')
  .controller('StudentNewController', StudentNewController);
