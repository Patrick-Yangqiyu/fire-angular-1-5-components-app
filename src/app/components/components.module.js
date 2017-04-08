
/**
 *
 * @ngdoc module
 * @name components
 *
 * @requires components.book
 * @requires components.auth
 *
 * @description
 *
 * This is the components module. It includes all of our components.
 *
 **/

angular
  .module('components', [
    'components.book',
    'components.auth',
    'components.student'
  ]);
