function StudentService(AuthService, $firebaseRef, $firebaseArray, $firebaseObject) {


  var ref = $firebaseRef.students;
  var uid = AuthService.getUser().uid;
  return {
    createNewStudent: function (student) {
      return $firebaseArray(ref).$add(student);
    },
    getStudentById: function (id) {
      return $firebaseObject(ref.child(id));
    },
    getStudentList: function () {
      return $firebaseArray(ref);
    },
    updateStudent: function (student) {
      return student.$save();
    },
    deleteStudent: function (student) {
      return student.$remove();
    }
  };
}


angular
  .module('components.student')
  .factory('StudentService', StudentService);
