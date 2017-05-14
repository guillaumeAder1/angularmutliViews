'use-strict';

angular.module('testControllerViewsApp')
    .component("map", {
        bindings: { name: '@' },

        //template: "Hello {{$ctrl.name}}, I'm {{$ctrl.myName}}!",
        bindings: {
            name: '@',
            city: "<"
        },

        controller: "MapCtrl",
        templateUrl: "views/map.html"
    });