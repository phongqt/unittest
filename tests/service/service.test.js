describe('test service', function() {
  var productService;
  beforeEach(module('app'));

  beforeEach(angular.mock.inject(function(ProductService) {
    productService = ProductService;
  }));

  describe('Test service', function() {
    it('test service get products', function() {
      var listProduct = productService.getProducts();
      console.log(listProduct);
    });
  });

})