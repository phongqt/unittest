(function() {
  'use strict';
  angular.module('app')
  .service('ProductService', ProductService);
  function ProductService(CategoryService) {
    return {
      getProducts : getProducts
    };
    function getProducts() {
      return [{PID: 'P1001', name: 'Adias', category: CategoryService.getCategories()}, {PID: 'P1002', name: 'Nice', category: CategoryService.getCategories()}];
    }
  }
})();