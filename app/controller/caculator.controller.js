(function () {
  'use strict';
  angular.module('app')
  .controller('CalculatorController', CalculatorController);
  function CalculatorController() {
    var self = this;
    self.total = 0;

    self.add = add;
    self.mul = mul;
    self.sub = sub;
    self.div = div;

    function add(num1, num2) {
      self.total = num1 + num2;
    }

    function mul(num1, num2) {
      self.total = num1 * num2;
    }

    function sub(num1, num2) {
      self.total = num1 - num2;
    }

    function div(num1, num2) {
      self.total = num1 / num2;
    }
  }
})();