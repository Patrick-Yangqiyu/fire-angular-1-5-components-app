function BookService(AuthService, $firebaseRef, $firebaseArray, $firebaseObject ,$firebaseStorage) {
  var ref = $firebaseRef.books;
  var uid = AuthService.getUser().uid;
  var storageRef = firebase.storage().ref('bookprofile');
  return {
    createNewBook: function (book) {
      return $firebaseArray(ref).$add(book);
    },
    getBookById: function (id) {
      return $firebaseObject(ref.child(id));
    },
    getBookList: function () {
      return $firebaseArray(ref);
    },
    updateBook: function (book) {
      return book.$save();
    },
    deleteBook: function (book) {
      return book.$remove();
    },
    uploadimage: function (id,file) {
      storageRef = storageRef.child(id).child(file.name);
      var storage = $firebaseStorage(storageRef);
      var uploadTask = storage.$put(file);
      return uploadTask;
    }
  };
}

/**
 * @ngdoc service
 * @name BookService
 * @module components.book
 *
 * @description Provides HTTP methods for our firebase connection.
 *
 * ## Lorem Ipsum 1
 * Aenean ornare odio elit, eget facilisis ipsum molestie ac. Nam bibendum a nibh ut ullamcorper.
 * Donec non felis gravida, rutrum ante mattis, sagittis urna. Sed quam quam, facilisis vel cursus at.
 *
 * ## Lorem Ipsum 2
 * Aenean ornare odio elit, eget facilisis ipsum molestie ac. Nam bibendum a nibh ut ullamcorper.
 * Donec non felis gravida, rutrum ante mattis, sagittis urna. Sed quam quam, facilisis vel cursus at.
 */

angular
  .module('components.book')
  .factory('BookService', BookService);
