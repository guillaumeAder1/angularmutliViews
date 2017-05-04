'use strict';

/**
 * @ngdoc function
 * @name testControllerViewsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testControllerViewsApp
 */
angular.module('testControllerViewsApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.values = [125,9595,135641,6546464,6486484,445];
        $scope.templateUrl = 'views/main.html';

  });
