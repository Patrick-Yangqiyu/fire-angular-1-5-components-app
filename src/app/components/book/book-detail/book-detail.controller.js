function BookDetailController(BookService) {
  var ctrl = this;
  ctrl.$onInit = function () {
    ctrl.isNewBook = !ctrl.book.$id;
  };
  ctrl.image = function (event) {
    var file = event.target.files[0];
    var uploadtask = BookService.uploadimage(ctrl.book.$id,file);

    uploadtask.$complete(function(snapshot) {
      ctrl.book.photo_data = {
        url: snapshot.downloadURL,
        bytes: snapshot.totalBytes,
      };
      ctrl.onUpdate({
        $event:{
          book: ctrl.book
        }
      });
    });

  };
  ctrl.saveBook = function () {
    ctrl.onSave({
      $event: {
        book: ctrl.book
      }
    });
  };
  ctrl.updateBook = function () {
    ctrl.onUpdate({
      $event: {
        book: ctrl.book
      }
    });
  };
  ctrl.deleteBook = function () {
    ctrl.onDelete({
      $event: {
        book: ctrl.book
      }
    });
  };
  ctrl.tagChange = function (event) {
    ctrl.book.tag = event.tag;
    ctrl.updateBook();
  };








}

angular
  .module('components.book')
  .controller('BookDetailController', BookDetailController)
  .directive('customOnChange', customOnChange);

function customOnChange() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var onChangeHandler = scope.$eval(attrs.customOnChange);
      element.bind('change', onChangeHandler);
    }
  };
}
