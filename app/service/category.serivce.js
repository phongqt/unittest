(function() {
  angular.module('app')
    .service('CategoryService', CategoryService);

  function CategoryService() {
    return {
      getCategories: getCategories
    };
  }

  function getCategories() {
    return {
      CID: 'C10001', name: 'Hat'
    };
  }
})();