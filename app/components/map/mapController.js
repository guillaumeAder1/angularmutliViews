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

        $scope.renderModeList = ["heatmap", "marker"];
        $scope.renderMode = "heatmap";
        $scope.heatmap = null;

        this.$onInit = function() {
            console.log("on init");
        };
        this.$onChanges = function(changes) {
            console.log(changes)
            if (changes.cityList && changes.cityList.currentValue) {
                $scope.newData(changes.cityList.currentValue);
            }
        };


        var mapOptions = {
            zoom: 12,
            center: new google.maps.LatLng(53.3498, -6.2603),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        };

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        $scope.bounds = new google.maps.LatLngBounds();
        $scope.markers = [];
        var infoWindow = new google.maps.InfoWindow();

        $scope.changeRender = function(mode) {
            $scope.renderMode = mode;
            $scope.newData($scope.data);
        };


        $scope.newData = function(data) {
            console.log(data)
            $scope.data = data;
            $scope.clearMarker();
            // use boud to stock the position of the point and get extent later
            $scope.bounds = new google.maps.LatLngBounds();

            if ($scope.renderMode === "heatmap") {
                var heatData = [];
                for (var i in data) {
                    var _data = returnData(data[i])
                    var lng = _data.lng;
                    var lat = _data.lat;
                    var position = new google.maps.LatLng(lat, lng)
                    heatData.push(position);
                    $scope.bounds.extend(position);
                }
                $scope.heatmap = new google.maps.visualization.HeatmapLayer({
                    data: heatData,
                    radius: 20,
                    map: $scope.map
                });
                $scope.heatmap.setMap($scope.map);

            } else if ($scope.renderMode === "marker") {
                if ($scope.heatmap) {
                    $scope.heatmap.setMap(null);
                }
                for (var i in data) {
                    createMarker(returnData(data[i]));
                }
            }

            $scope.map.fitBounds($scope.bounds);
        };
        // on data received
        // $scope.$on("_displayStations::send", function(e, results) {
        //     $scope.clearMarker();
        //     // use boud to stock the position of the point and get extent later
        //     $scope.bounds = new google.maps.LatLngBounds();
        //     for (var i in results) {
        //         createMarker(returnData(results[i]));
        //     }
        //     $scope.map.fitBounds($scope.bounds);
        // });

        // format data to use (title/address/coordinates)
        var returnData = function(data) {
            return {
                lng: data.position.lng,
                lat: data.position.lat,
                name: data.name,
                status: data.status,
                address: data.address
            };
        };

        // remove previsou markers
        $scope.clearMarker = function(val) {
            for (var i in $scope.markers) {
                $scope.markers[i].setMap(null);
            }
            $scope.markers = [];
        };

        // create marker and infowindow
        var createMarker = function(info) {
            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.lat, info.lng),
                title: info.name
            });
            marker.content = '<div class="infoWindowContent">' + info.address + '</div>';
            google.maps.event.addListener(marker, 'click', function() {
                infoWindow.setContent('<h4>' + marker.title + '</h4>' + marker.content);
                infoWindow.open($scope.map, marker);
            });
            $scope.markers.push(marker);
            $scope.bounds.extend(marker.getPosition());
        };


        // $scope.openInfoWindow = function(e, selectedMarker) {
        //     e.preventDefault();
        //     google.maps.event.trigger(selectedMarker, 'click');
        // };

        // DEBUG::helper (get boundarBx event) 
        var initEvent = function() {
            var initialBounds;
            google.maps.event.addListener($scope.map, 'bounds_changed', function() {
                console.log($scope.map.getBounds());
            });
        };
        //initEvent();
    });