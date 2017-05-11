'use strict';

/**
 * @ngdoc function
 * @name testControllerViewsApp.controller:StationinfoCtrl
 * @description
 * # StationinfoCtrl
 * Controller of the testControllerViewsApp
 */
angular.module('testControllerViewsApp')
    .controller('StationinfoCtrl', function($scope, getBikes) {
        $scope.citySelected = false;
        $scope.getData = function(lookForStation) {
            if (lookForStation) {
                $scope.citySelected = true;
                getBikes.getCityStations(lookForStation).then(function(res) {
                    $scope.data = res.data;
                    $scope.$emit("_displayStations", res.data);
                }, function(err) {
                    console.log("Query Station error::", err);
                });
            } else {
                $scope.citySelected = false;
                getBikes.getCityList().then(function(res) {
                    $scope.data = res.data;
                }, function(err) {
                    console.log("Query City error::", err);
                });
            }
        };
        $scope.getData(false);
        $scope.selectItem = function(index) {
            console.log($scope.data[index].name);
            if (!$scope.citySelected) {
                $scope.getData($scope.data[index].name);
            }
        };

        // this.updateValue = function() {
        //     this.city = "paris";
        // }
    });