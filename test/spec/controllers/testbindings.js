'use strict';

describe('Controller: TestbindingsCtrl', function () {

  // load the controller's module
  beforeEach(module('testControllerViewsApp'));

  var TestbindingsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestbindingsCtrl = $controller('TestbindingsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TestbindingsCtrl.awesomeThings.length).toBe(3);
  });
});
