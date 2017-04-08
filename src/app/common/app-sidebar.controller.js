function AppSidebarController() {
  var ctrl = this;
  ctrl.bookTags = [{
    label: 'All Books',
    icon: 'star',
    state: 'none'
  }];


  ctrl.studentTags = [{
    label: 'All Users',
    icon: 'star',
    state: 'none'
  }];

  ctrl.historyTags = [{
    label: 'All History',
    icon: 'star',
    state: 'none'
  }]






}

/**
 * @ngdoc type
 * @module common
 * @name AppSidebarController
 *
 * @description
 *
 * ## Lorem Ipsum 1
 * Aenean ornare odio elit, eget facilisis ipsum molestie ac. Nam bibendum a nibh ut ullamcorper.
 * Donec non felis gravida, rutrum ante mattis, sagittis urna. Sed quam quam, facilisis vel cursus at.
 *
 * ## Lorem Ipsum 2
 * Aenean ornare odio elit, eget facilisis ipsum molestie ac. Nam bibendum a nibh ut ullamcorper.
 * Donec non felis gravida, rutrum ante mattis, sagittis urna. Sed quam quam, facilisis vel cursus at.
 */
angular
  .module('common')
  .controller('AppSidebarController', AppSidebarController);
