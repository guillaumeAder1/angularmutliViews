'use-strict';

angular.module('testControllerViewsApp')
    .component("map", {
        //template: "Hello {{$ctrl.name}}, I'm {{$ctrl.myName}}!",
        bindings: { linked: '@', test: "<" },
        controller: "MapCtrl",
        templateUrl: "components/map/map.html",
        //scope: true
    });