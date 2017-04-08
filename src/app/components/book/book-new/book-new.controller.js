function BookNewController(BookService, $state) {
  var ctrl = this;
  ctrl.$onInit = function () {
    ctrl.book = {
      title: '',
      author: '',
      publisher: '',
      preview: '',
      photo_data: {
        url: ''
      },
      tag: 'none',
      isbn: '',
      call_numer: ''
    };
  };
  ctrl.createNewBook = function (event) {
    return BookService
      .createNewBook(event.book)
      .then(function (book) {
        $state.go('book', {
          id: book.key
        });
      });
  };
}

angular
  .module('components.book')
  .controller('BookNewController', BookNewController);
