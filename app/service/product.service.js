(function() {
  'use strict';
  angular.module('app')
  .service('ProductService', ProductService);
  function ProductService() {
    return {
      getProducts : getProducts
    };
    function getProducts() {
      return [{PID: 'P1001', name: 'Adias'}, {PID: 'P1002', name: 'Nice'}];
    }
  }
})();