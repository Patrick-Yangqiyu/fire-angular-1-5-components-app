function BookController() {
  var ctrl = this;
  ctrl.selectBook = function () {
    ctrl.onSelect({
      $event: {
        bookId: ctrl.book.$id
      }
    });
  };
}

angular
  .module('components.book')
  .controller('BookController', BookController);
