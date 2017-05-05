'use-strict';

angular.module('testControllerViewsApp')
    .component("map", {
        template: "Hello {{$ctrl.name}}, I'm {{$ctrl.myName}}!",
        bindings: { name: '@' },
        controller: function() {
            this.myName = 'Alain';
        }
    });