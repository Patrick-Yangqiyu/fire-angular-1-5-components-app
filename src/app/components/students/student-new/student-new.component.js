var studentNew = {
  templateUrl: './student-new.html',
  controller: 'StudentNewController'
};

angular
  .module('components.student')
  .component('studentNew', studentNew)
  .config(function ($stateProvider) {
    $stateProvider
      .state('addstudent', {
        parent: 'app',
        url: '/addstudent',
        component: 'studentNew'
      });
  });
