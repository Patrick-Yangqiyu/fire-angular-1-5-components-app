var bookTag = {
  bindings: {
    tag: '<',
    onChange: '&'
  },
  templateUrl: './book-tag.html',
  controller: 'BookTagController'
};

angular
  .module('components.book')
  .component('bookTag', bookTag);
