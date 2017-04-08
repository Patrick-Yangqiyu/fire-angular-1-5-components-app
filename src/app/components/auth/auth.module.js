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
      apiKey: "AIzaSyA6xw3GdJGBh7ureRN4y2fup-_igs2r5vU",
      authDomain: "fir-guide-ad180.firebaseapp.com",
      databaseURL: "https://fir-guide-ad180.firebaseio.com",
      projectId: "fir-guide-ad180",
      storageBucket: "fir-guide-ad180.appspot.com",
      messagingSenderId: "739932151297"
    };

    $firebaseRefProvider
      .registerUrl({
        default: config.databaseURL,
        contacts: config.databaseURL + '/contacts',
        books : config.databaseURL + '/-Books',
        students : config.databaseURL + '/-user',
        history : config.databaseURL+'/-history'
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
