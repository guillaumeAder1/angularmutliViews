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
<<<<<<< HEAD
        // city selcted use to toggle the back button in view
        $scope.citySelected = false;

=======
        $scope.citySelected = false;
>>>>>>> bindingCallback
        $scope.getData = function(lookForStation) {
            if (lookForStation) {
                $scope.citySelected = true;
                getBikes.getCityStations(lookForStation).then(function(res) {
                    $scope.data = res.data;
                    $scope.$emit("_displayStations", res.data);
                }, function(err) {
                    console.log("Query error::", err);
                });

            } else {
                $scope.citySelected = false;

                getBikes.getCityList().then(function(res) {
                    $scope.data = res.data;
                }, function(err) {
                    console.log("Query error::", err);
                });
            }
        };
        $scope.getData(false);
<<<<<<< HEAD



=======
>>>>>>> bindingCallback
        $scope.selectItem = function(index) {
            console.log($scope.data[index].name);
            if (!$scope.citySelected) {
                $scope.getData($scope.data[index].name);
            }
        };
    });