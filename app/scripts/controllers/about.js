'use strict';

/**
 * @ngdoc function
 * @name testControllerViewsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testControllerViewsApp
 */
angular.module('testControllerViewsApp')
  .controller('AboutCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.toto = "hello toto";
    $scope.templateUrl = 'views/about.html';
    $scope.listelement = ["john", "jake", "peter", "patrik"];
  });
