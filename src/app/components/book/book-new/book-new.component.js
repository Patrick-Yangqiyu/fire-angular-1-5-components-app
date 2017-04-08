var bookNew = {
  templateUrl: './book-new.html',
  controller: 'BookNewController'
};

angular
  .module('components.book')
  .component('bookNew', bookNew)
  .config(function ($stateProvider) {
    $stateProvider
      .state('new', {
        parent: 'app',
        url: '/new',
        component: 'bookNew'
      });
  });
