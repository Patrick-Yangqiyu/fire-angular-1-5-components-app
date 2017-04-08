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

//   var ref = $firebaseRef.books;
//   var uid = AuthService.getUser().uid;
//   return {
//     createNewContact: function (contact) {
//       return $firebaseArray(ref).$add(contact);
//     },
//     getContactById: function (id) {
//       return $firebaseObject(ref.child(id));
//     },
//     getContactList: function () {
//       return $firebaseArray(ref);
//     },
//     updateContact: function (contact) {
//       return contact.$save();
//     },
//     deleteContact: function (contact) {
//       return contact.$remove();
//     }
//   };
// }


angular
  .module('components.student')
  .factory('StudentService', StudentService);
