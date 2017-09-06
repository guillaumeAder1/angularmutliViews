'use strict';

/**
 * @ngdoc function
 * @name testControllerViewsApp.controller:ApplicationcontrollerCtrl
 * @description
 * # ApplicationcontrollerCtrl
 * Controller of the testControllerViewsApp
 */
angular.module('testControllerViewsApp')
    .controller('ApplicationcontrollerCtrl', function($scope, getBikes) {

        this.defaultCity = "dublin";
        this.stationList = false;
        // executed when a city has been selcted from stationInfo 
        this.updateValue = function(value) {
            if (value.name != this.defaultCity) {
                this.defaultCity = value.name;
                getBikes.getCityStations(this.defaultCity).then(angular.bind(this, function(res) {
                    this.stationList = res.data;
                }));
                // getBikes.getCityStations(this.defaultCity).then(function(res) {
                //     $scope.data = res.data;
                //     $scope.cityList = res.data;
                //     //MapCtrl.newDate(res, data);
                //     // $scope.$emit("_displayStations", res.data);
                // }, function(err) {
                //     console.log("Query Station error::", err);
                // });
            }
        };
    });