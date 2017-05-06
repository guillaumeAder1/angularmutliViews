'use strict';

describe('Controller: ParentCtrl', function () {

  // load the controller's module
  beforeEach(module('testControllerViewsApp'));

  var ParentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ParentCtrl = $controller('ParentCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ParentCtrl.awesomeThings.length).toBe(3);
  });
});
