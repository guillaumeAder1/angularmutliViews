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
        $scope.toto = "ojpo";

        //$scope.data = ["oooo", "uuuuu", "eeeeee", "oooooo"];

        $scope.getText = function() {
            return "totototot";
        }

        $scope.getData = (function() {
            getBikes.getListBike().then(function(res) {
                console.log(res);
                $scope.data = res.data;
            }, function(err) {
                console.log(err);
            });
        })();

        $scope.logme = function(index) {

            //this.$parent.$parent.selected = this.data[index].name;
            $scope.$emit("listEmit", { data: this.data[index].name });
        };


        var vm = this;
        vm.$onInit = function() {
            console.log("on init")
        }


    });