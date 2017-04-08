function BookEditController($state, BookService, cfpLoadingBar, $window) {
  var ctrl = this;
  /**
   * @ngdoc method
   * @name BookEditController#updateBook
   *
   * @param {event} event Receive the emitted event
   * Updates the book information
   *
   * @return {method} BookService returns the updateBook method and a promise
   */
  ctrl.updateBook = function (event) {
    cfpLoadingBar.start();
    return BookService
      .updateBook(event.book)
      .then(cfpLoadingBar.complete, cfpLoadingBar.complete);
  };
  /**
   * @ngdoc method
   * @name BookEditController#deleteBook
   *
   * @param {event} event Delete the book
   *
   * @return {method} BookService returns the deleteBook method and a promise
   */
  ctrl.deleteBook = function (event) {
    var message = 'Delete ' + event.book.name + ' from Books?';
    if ($window.confirm(message)) {
      return BookService
        .deleteBook(event.book)
        .then(function () {
          $state.go('books');
        });
    }
  };
}

/**
 * @ngdoc type
 * @module components.book
 * @name BookEditController
 *
*/
angular
  .module('components.book')
  .controller('BookEditController', BookEditController);
