var students = {
  bindings: {
    students: '<',
    filter: '<'
  },
  templateUrl: './students.html',
  controller: 'StudentsController'
};

angular
  .module('components.student')
  .component('students', students)
  .config(function ($stateProvider) {
    $stateProvider
      .state('students', {
        parent: 'app',
        url: '/students?filter',
        component: 'students',
        params: {
          filter: {
            value: 'none'
          }
        },
        resolve: {
          students: function (StudentService) {
            return StudentService.getStudentList().$loaded();
          },
          filter: function ($transition$) {
            return $transition$.params();
          }
        }
      });
  });
