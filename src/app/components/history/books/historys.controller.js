function HistorysController($filter, $state) {
  var ctrl = this;

  ctrl.$onInit = function() {
       ctrl.filteredHistorys = ctrl.historys;
       console.log(ctrl.historys)
      };
  ctrl.goToHistory = function (event) {
    $state.go('history', {
      id: event.historyId
    });
  };
}

angular
  .module('components.history')
  .controller('HistorysController', HistorysController);
