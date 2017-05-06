'use strict';

/**
 * @ngdoc function
 * @name testControllerViewsApp.controller:ListcontrollerCtrl
 * @description
 * # ListcontrollerCtrl
 * Controller of the testControllerViewsApp
 */
angular.module('testControllerViewsApp')
    .controller('ListcontrollerCtrl', function($scope, getBikes) {
        $scope.getData = (function() {
            getBikes.getListBike().then(function(res) {
                $scope.data = res.data;
            }, function(err) {
                console.log("Query error::", err);
            });
        })();

        $scope.selectItem = function(index) {
            console.log($scope.data[index]);
        };
    });