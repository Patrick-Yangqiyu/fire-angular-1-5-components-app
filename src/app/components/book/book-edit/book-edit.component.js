var bookEdit = {
  bindings: {
    book: '<'
  },
  templateUrl: './book-edit.html',
  controller: 'BookEditController'
};

angular
  .module('components.book')
  .component('bookEdit', bookEdit)
  .config(function ($stateProvider) {
    $stateProvider
      .state('book', {
        parent: 'app',
        url: '/book/:id',
        component: 'bookEdit',
        resolve: {
          book: function ($transition$, BookService) {
            var key = $transition$.params().id;
            return BookService.getBookById(key).$loaded();
          }
        }
      });
  });
