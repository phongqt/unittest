describe('calculator', function () {
  var _$controller, $scope;

  beforeEach(module('app'));
  
  beforeEach(angular.mock.inject(function($controller) {
    _$controller = $controller;
  }));

  
  describe('add', function () {
    it('1 + 2 should equal 3, 2 * 2 should equal 4, 2 - 2 should equal 0, 2/2 should equal 1', function () {
      var controller = _$controller('CalculatorController', {$scope: $scope});
      console.log(controller);

      // Add
      controller.add(1,2);
      expect(3).toBe(controller.total);

      // Multiplication
      controller.mul(2,2);
      expect(4).toBe(controller.total);

      // Subtraction
      controller.sub(2,2);
      expect(0).toBe(controller.total);

      // Division
      controller.div(2,2);
      expect(1).toBe(controller.total);
    }); 
  });

});