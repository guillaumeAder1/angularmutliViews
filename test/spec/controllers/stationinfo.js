'use strict';

describe('Controller: StationinfoCtrl', function () {

  // load the controller's module
  beforeEach(module('testControllerViewsApp'));

  var StationinfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StationinfoCtrl = $controller('StationinfoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StationinfoCtrl.awesomeThings.length).toBe(3);
  });
});
