function StudentNewController(StudentService, $state) {
  var ctrl = this;
  ctrl.$onInit = function () {
    ctrl.student = {
      name: '',
      email: '',
      job: '',
      location: '',
      social: {
        facebook: '',
        github: '',
        twitter: '',
        linkedin: ''
      },
      tag: 'none'
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
