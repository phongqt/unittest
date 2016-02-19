(function () {
  'use strict';
  angular.module('app')
  .controller('ProductController', ProductController);

  ProductController.$inject = ['ProductService'];

  function ProductController(ProductService) {
    var self = this;
    self.products = ProductService.getProducts();
  }
})();
