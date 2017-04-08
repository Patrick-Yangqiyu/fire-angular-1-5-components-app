function ContactDetailController(ContactService) {
  var ctrl = this;
  ctrl.$onInit = function () {
    ctrl.isNewContact = !ctrl.contact.$id;
  };
  ctrl.image = function (event) {
    var file = event.target.files[0];
    var uploadtask = ContactService.uploadimage(ctrl.contact.$id,file);

    uploadtask.$complete(function(snapshot) {
      ctrl.contact.photo_data = {
        url: snapshot.downloadURL,
        bytes: snapshot.totalBytes,
      };
      ctrl.onUpdate({
        $event:{
          contact: ctrl.contact
        }
      });
    });

  };
  ctrl.saveContact = function () {
    ctrl.onSave({
      $event: {
        contact: ctrl.contact
      }
    });
  };
  ctrl.updateContact = function () {
    ctrl.onUpdate({
      $event: {
        contact: ctrl.contact
      }
    });
  };
  ctrl.deleteContact = function () {
    ctrl.onDelete({
      $event: {
        contact: ctrl.contact
      }
    });
  };
  ctrl.tagChange = function (event) {
    ctrl.contact.tag = event.tag;
    ctrl.updateContact();
  };








}

angular
  .module('components.contact')
  .controller('ContactDetailController', ContactDetailController)
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
