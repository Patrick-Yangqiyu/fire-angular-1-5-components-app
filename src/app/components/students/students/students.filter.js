function studentsFilter() {
  return function (collection, params) {
    return collection.filter(function (item) {
      return item.tag === (
        params.filter === 'none' ? item.tag : params.filter
      );
    });
  };
}

angular
  .module('components.student')
  .filter('studentsFilter', studentsFilter);
