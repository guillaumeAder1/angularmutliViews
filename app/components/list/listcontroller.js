'use strict';

/**
 * @ngdoc function
 * @name testControllerViewsApp.controller:ListcontrollerCtrl
 * @description
 * # ListcontrollerCtrl
 * Controller of the testControllerViewsApp
 */
angular.module('testControllerViewsApp')
    .controller('ListcontrollerCtrl', function($scope) {
        $scope.toto = "ojpo";

        $scope.data = ["oooo", "uuuuu", "eeeeee", "oooooo"];

        $scope.getText = function() {
            return "totototot";
        }

        $scope.logme = function(val) {
            console.log(val);
        }
    });