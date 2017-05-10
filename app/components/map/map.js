'use-strict';

angular.module('testControllerViewsApp')
    .component("map", {
        //template: "Hello {{$ctrl.name}}, I'm {{$ctrl.myName}}!",
        bindings: {
            name: '@',
            city: "<"
        },
        controller: "MapCtrl",
        templateUrl: "components/map/map.html"
    });