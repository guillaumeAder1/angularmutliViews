'use strict';

/**
 * @ngdoc function
 * @name testControllerViewsApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the testControllerViewsApp
 */
angular.module('testControllerViewsApp')
    .controller('MapCtrl', function($scope) {

        var mapOptions = {
            zoom: 12,
            center: new google.maps.LatLng(53.3498, -6.2603),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        };

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.value = "map toto value";

        //$scope.rep = $scope.$parent.selected
        //$scope.selected = "";

        $scope.$on("eventBroadcastedName", function(e, msg) {
            console.log(e, msg)
            $scope.evented = msg;
        })


        this.$onInit = function() {
            this.linked = $scope.$parent.selected;
            //this.test = 
        }


    });