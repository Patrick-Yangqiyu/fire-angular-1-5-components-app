function AppSidebarController() {
  var ctrl = this;
  ctrl.contactTags = [{
    label: 'All Books',
    icon: 'star',
    state: 'none'
  }, {
    label: 'History',
    icon: 'account_balance',
    state: 'history'
  }, {
    label: 'Science&Physics',
    icon: 'school',
    state: 'science-physics'
  }, {
    label: 'Business&Economics',
    icon: 'business_center',
    state: 'business-economics'
  }, {
    label: 'Sociology&Psychology',
    icon: 'people',
    state: 'sociology-psychology'
  }];
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
