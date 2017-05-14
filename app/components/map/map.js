'use-strict';

angular.module('testControllerViewsApp')
    .component("map", {

        //template: "Hello {{$ctrl.name}}, I'm {{$ctrl.myName}}!",
        bindings: {
            city: "<",
            cityList: "<"
        },

        controller: "MapCtrl",
        templateUrl: "views/map.html"
    });