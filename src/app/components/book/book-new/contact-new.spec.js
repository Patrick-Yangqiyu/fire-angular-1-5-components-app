describe('Book', function () {
  beforeEach(module('components.book', function ($provide) {
    $provide.value('cfpLoadingBar', {
      start: angular.noop,
      complete: angular.noop
    })

    $provide.value('BookService', {
      createNewBook: angular.noop
    });
  }));

  beforeEach(module('components.auth'));

  beforeEach(module(function ($stateProvider) {
    $stateProvider.state('app', {
      redirectTo: 'books',
      url: '/app',
      data: {
        requiredAuth: true
      }
    });
  }));

  describe('Routes', function () {
    var $state, $location, $rootScope, AuthService;

    function goTo(url) {
      $location.url(url);
      $rootScope.$digest();
    }

    beforeEach(inject(function ($injector) {
      $state = $injector.get('$state');
      $location = $injector.get('$location');
      $rootScope = $injector.get('$rootScope');
      AuthService = $injector.get('AuthService');
    }));

    it('should go to the book state', function() {
      spyOn(AuthService, 'isAuthenticated').and.returnValue(true);

      goTo('/app/new');

      expect($state.current.name).toEqual('new')
    });
  });

  describe('BookNewController', function () {
    var $componentController,
      controller,
      $state,
      BookService,
      $rootScope,
      $q;

    beforeEach(inject(function ($injector) {
      $componentController = $injector.get('$componentController');
      $state = $injector.get('$state');
      BookService = $injector.get('BookService');
      $rootScope = $injector.get('$rootScope');
      $q = $injector.get('$q');

      controller = $componentController('bookNew',
        { $scope: {}, $state: $state, BookService: BookService }
      );
    }));

    it('should create a book', function () {
      var event = { book: { email: 'test@test.com', password: 'insecure' } };
      spyOn(BookService, 'createNewBook').and.callFake(
        function () {
          return $q.when({ key: 1})
        }
      );
      spyOn($state, 'go');

      var promise = controller.createNewBook(event);

      promise.then(function () {
        expect(BookService.createNewBook).toHaveBeenCalled();
        expect($state.go).toHaveBeenCalledWith('book', {id: 1});
      });

      $rootScope.$digest();
    });
  });
});
