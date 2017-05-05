'use strict';

describe('Controller: ListcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('testControllerViewsApp'));

  var ListcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListcontrollerCtrl = $controller('ListcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
