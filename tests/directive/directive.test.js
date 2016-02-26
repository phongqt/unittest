describe('test directive', function() {
  var $compile, $rootScope;
  beforeEach(module('app'));
  beforeEach(angular.mock.inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));
  it('testing', function() {
     // Compile a piece of HTML containing the directive
     var elememt = $compile('<my-directive> </my-directive>')($rootScope);
      $rootScope.$digest();
      // Check that the compiled element contains the templated content
     expect(elememt.html()).toContain("Hello world")
  });
});