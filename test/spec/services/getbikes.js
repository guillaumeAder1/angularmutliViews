'use strict';

describe('Service: getBikes', function () {

  // load the service's module
  beforeEach(module('testControllerViewsApp'));

  // instantiate service
  var getBikes;
  beforeEach(inject(function (_getBikes_) {
    getBikes = _getBikes_;
  }));

  it('should do something', function () {
    expect(!!getBikes).toBe(true);
  });

});
