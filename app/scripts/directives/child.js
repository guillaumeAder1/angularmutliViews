'use strict';

/**
 * @ngdoc directive
 * @name testControllerViewsApp.directive:Child
 * @description
 * # Child
 */
angular.module('testControllerViewsApp')
    .component('example', function() {
        return {
            bindings: {
                obj: '<',
                prim: '<'
            },
            templateUrl: 'views/exampleview.html',
            controller: function() {
                this.updateValues = function() {
                    this.prim = 10;
                    this.obj = {
                        john: {
                            age: 35,
                            location: 'Unknown'
                        }
                    };
                };
                var vm = this;
                vm.$onInit = function() {
                    console.log("on init")
                }
            }


        };
    });