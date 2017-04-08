var studentEdit = {
  bindings: {
    student: '<'
  },
  templateUrl: './student-edit.html',
  controller: 'StudentEditController'
};

angular
  .module('components.student')
  .component('studentEdit', studentEdit)
  .config(function ($stateProvider) {
    $stateProvider
      .state('student', {
        parent: 'app',
        url: '/student/:id',
        component: 'studentEdit',
        resolve: {
          student: function ($transition$, StudentService) {
            var key = $transition$.params().id;
            return StudentService.getStudentById(key).$loaded();
          }
        }
      });
  });
