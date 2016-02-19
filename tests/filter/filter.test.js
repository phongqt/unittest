describe('Test filter', function() {
  var truncate;
  
  beforeEach(module('app'));

  beforeEach(angular.mock.inject(function($filter) {
    truncate = $filter('truncate');
  }));

  describe('Test filter', function() {
    it('filter truncate', function() {
      var result = truncate("Hello world", 3);
      expect(result).toEquals("Hel");
    });
  });
});