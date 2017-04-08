var studentDetail = {
  bindings: {
    student: '<',
    onSave: '&',
    onUpdate: '&',
    onDelete: '&'
  },
  templateUrl: './student-detail.html',
  controller: 'StudentDetailController'
};

angular
  .module('components.student')
  .component('studentDetail', studentDetail);
