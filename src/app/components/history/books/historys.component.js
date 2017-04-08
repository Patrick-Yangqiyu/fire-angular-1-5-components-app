var historys = {
  bindings: {
    historys: '<',
    filter: '<'
  },
  templateUrl: './historys.html',
  controller: 'HistorysController'
};

angular
  .module('components.history')
  .component('historys', historys)
  .config(function ($stateProvider) {
    $stateProvider
      .state('historys', {
        parent: 'app',
        url: '/historys?filter',
        component: 'historys',
        params: {
          filter: {
            value: 'none'
          }
        },
        resolve: {
          historys: function (HistoryService) {
            return HistoryService.getHistoryList().$loaded();
          },
          filter: function ($transition$) {
            return $transition$.params();
          }
        }
      });
  });
