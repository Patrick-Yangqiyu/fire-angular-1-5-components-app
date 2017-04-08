var books = {
  bindings: {
    books: '<',
    filter: '<'
  },
  templateUrl: './books.html',
  controller: 'BooksController'
};

angular
  .module('components.book')
  .component('books', books)
  .config(function ($stateProvider) {
    $stateProvider
      .state('books', {
        parent: 'app',
        url: '/books?filter',
        component: 'books',
        params: {
          filter: {
            value: 'none'
          }
        },
        resolve: {
          books: function (BookService) {
            return BookService.getBookList().$loaded();
          },
          filter: function ($transition$) {
            return $transition$.params();
          }
        }
      });
  });
