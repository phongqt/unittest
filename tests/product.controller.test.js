describe('Product Controller', function () {
  var _$controller, $scope;

  beforeEach(module('app'));
  
  beforeEach(angular.mock.inject(function ($controller) {
    _$controller = $controller;
  }));

  describe('product', function() {
    it('get list product from service', function() {
      var controller = _$controller('ProductController', {$scope: $scope});
      expect(controller.products).toBe('abc');
    });
  });
});