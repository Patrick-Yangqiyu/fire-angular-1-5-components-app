var book = {
  bindings: {
    book: '<',
    onSelect: '&'
  },
  templateUrl: './book.html',
  controller: 'BookController'
};

angular
  .module('components.book')
  .component('book', book);
