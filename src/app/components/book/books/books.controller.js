function BooksController($filter, $state) {
  var ctrl = this;

  ctrl.$onInit = function() {
       ctrl.filteredBooks = $filter('booksFilter')(ctrl.books, ctrl.filter);
      };
  ctrl.goToBook = function (event) {
    $state.go('book', {
      id: event.bookId
    });
  };
}

angular
  .module('components.book')
  .controller('BooksController', BooksController);
