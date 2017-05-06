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
        $scope.selected = "selected is empty";

        $scope.$on("listEmit", function(res, msg) {
            console.log(res, msg)
            $scope.selected = msg.data;
            $scope.$broadcast('eventBroadcastedName', $scope.selected);
        })


    });