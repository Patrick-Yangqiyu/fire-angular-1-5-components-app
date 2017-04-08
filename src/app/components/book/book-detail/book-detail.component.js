var bookDetail = {
  bindings: {
    book: '<',
    onSave: '&',
    onUpdate: '&',
    onDelete: '&'
  },
  templateUrl: './book-detail.html',
  controller: 'BookDetailController'
};

angular
  .module('components.book')
  .component('bookDetail', bookDetail);
