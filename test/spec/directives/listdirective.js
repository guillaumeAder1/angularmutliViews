'use strict';

describe('Directive: listdirective', function () {

  // load the directive's module
  beforeEach(module('testControllerViewsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<listdirective></listdirective>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the listdirective directive');
  }));
});
