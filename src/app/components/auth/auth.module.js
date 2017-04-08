/**
 *
 * @ngdoc module
 * @name components.auth
 *
 * @requires ui.router
 * @requires firebase
 *
 * @description
 *
 * This is the auth module. It includes our auth components
 *
 **/
angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])
  .config(function ($firebaseRefProvider) {

    var config = {
      apiKey: "AIzaSyBtwLvf3QHwmMpeulHsRoUfCU08RW5TW_g",
      authDomain: "mobiledemo1-d50ce.firebaseapp.com",
      databaseURL: "https://mobiledemo1-d50ce.firebaseio.com",
      projectId: "mobiledemo1-d50ce",
      storageBucket: "mobiledemo1-d50ce.appspot.com",
      messagingSenderId: "211930341987"
    };

    $firebaseRefProvider
      .registerUrl({
        default: config.databaseURL,
        contacts: config.databaseURL + '/contacts',
        books : config.databaseURL + '/books'
      });

    firebase.initializeApp(config);
  })
  .run(function ($transitions, $state, AuthService) {
    $transitions.onStart({
      to: function (state) {
        return !!(state.data && state.data.requiredAuth);
      }
    }, function() {
      return AuthService
        .requireAuthentication()
        .catch(function () {
          return $state.target('auth.login');
        });
    });
    $transitions.onStart({
      to: 'auth.*'
    }, function () {
      if (AuthService.isAuthenticated()) {
        return $state.target('app');
      }
    });
  });
