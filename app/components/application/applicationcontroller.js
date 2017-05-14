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
        this.stationList = ["no data"];


        this.updateValue = function(value) {
            if (value.name != this.defaultCity) {
                this.defaultCity = value.name;
                var that = this;
                getBikes.getCityStations(this.defaultCity).then(function(res) {
                    //return res.data;
                    that.stationList = res.data;
                });
                console.log(this.cityList);
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

        this.successCallback = function(res) {
            this.cityList = res.data;
        }
    });