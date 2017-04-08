function BookNewController(BookService, $state) {
  var ctrl = this;
  ctrl.$onInit = function () {
    ctrl.book = {
      name: '',
      email: '',
      job: '',
      location: '',
      social: {
        facebook: '',
        github: '',
        twitter: '',
        linkedin: ''
      },
      photo_data:{
          url:''
      },
      tag: 'none'
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
