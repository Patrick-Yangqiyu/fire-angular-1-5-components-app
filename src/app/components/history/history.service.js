function HistoryService(AuthService, $firebaseRef, $firebaseArray, $firebaseObject ,$firebaseStorage) {
  var ref = $firebaseRef.history;
  return {
    getHistoryList: function () {
      return $firebaseArray(ref);
    },
  };
}


angular
  .module('components.history')
  .factory('HistoryService', HistoryService);
