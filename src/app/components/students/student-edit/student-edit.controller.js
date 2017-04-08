function StudentEditController($state, StudentService, cfpLoadingBar, $window) {
  var ctrl = this;
  /**
   * @ngdoc method
   * @name StudentEditController#updateStudent
   *
   * @param {event} event Receive the emitted event
   * Updates the student information
   *
   * @return {method} StudentService returns the updateStudent method and a promise
   */
  ctrl.updateStudent = function (event) {
    cfpLoadingBar.start();
    return StudentService
      .updateStudent(event.student)
      .then(cfpLoadingBar.complete, cfpLoadingBar.complete);
  };
  /**
   * @ngdoc method
   * @name StudentEditController#deleteStudent
   *
   * @param {event} event Delete the student
   *
   * @return {method} StudentService returns the deleteStudent method and a promise
   */
  ctrl.deleteStudent = function (event) {
    var message = 'Delete ' + event.student.name + ' from Books?';
    if ($window.confirm(message)) {
      return StudentService
        .deleteStudent(event.student)
        .then(function () {
          $state.go('students');
        });
    }
  };
}

/**
 * @ngdoc type
 * @module components.student
 * @name StudentEditController
 *
*/
angular
  .module('components.student')
  .controller('StudentEditController', StudentEditController);
