var history = {
  bindings: {
    history: '<',
    onSelect: '&'
  },
  templateUrl: './history.html',
  controller: 'HistoryController'
};

angular
  .module('components.history')
  .component('history', history);
