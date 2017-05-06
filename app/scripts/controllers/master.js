'use strict';

/**
 * @ngdoc function
 * @name testControllerViewsApp.controller:MasterCtrl
 * @description
 * # MasterCtrl
 * Controller of the testControllerViewsApp
 */
angular.module('testControllerViewsApp')
    .controller('MasterCtrl', function($scope) {

        $scope.data = [
            { id: 1, name: "toto" },
            { id: 2, name: "etet" },
            { id: 3, name: "xaxa" },
            { id: 4, name: "ikik" }
        ];
        $scope.selected = "";

        $scope.$on("_displayStations", function(e, res) {
            // console.log(e, res)
            $scope.$broadcast("_displayStations::send", res);
        })


    });