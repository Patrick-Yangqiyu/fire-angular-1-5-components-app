function StudentsController($filter, $state) {
  var ctrl = this;

  ctrl.$onInit = function() {
       ctrl.filteredStudents = $filter('studentsFilter')(ctrl.students, ctrl.filter);
      };
  ctrl.goToStudent = function (event) {
    $state.go('student', {
      id: event.studentId
    });
  };
}

angular
  .module('components.student')
  .controller('StudentsController', StudentsController);
