var student = {
  bindings: {
    student: '<',
    onSelect: '&'
  },
  templateUrl: './student.html',
  controller: 'StudentController'
};

angular
  .module('components.student')
  .component('student', student);
