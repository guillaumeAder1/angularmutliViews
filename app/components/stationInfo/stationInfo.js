'use strict';

angular.module('testControllerViewsApp')
    .component('stationinfo', {
        templateUrl: "views/stationInfo.html",
        controller: "StationinfoCtrl",
        bindings: {
            city: "<",
            updateValue: "&"
        }
    });