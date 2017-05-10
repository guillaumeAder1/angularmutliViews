'use-strict';

angular.module('testControllerViewsApp')
    .component("map", {
        bindings: { name: '@' },
        controller: "MapCtrl",
        templateUrl: "views/map.html"
    });