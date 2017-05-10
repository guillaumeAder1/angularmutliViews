'use strict';

angular.module('testControllerViewsApp')
    .component('stationinfo', {
        templateUrl: "components/stationInfo/stationInfo.html",
        controller: "StationinfoCtrl",
        bindings: {
            city: "<",
            callback: "&"
        }
    });