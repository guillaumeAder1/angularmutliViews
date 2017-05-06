'use strict';

/**
 * @ngdoc function
 * @name testControllerViewsApp.controller:ParentCtrl
 * @description
 * # ParentCtrl
 * Controller of the testControllerViewsApp
 */
angular.module('testControllerViewsApp')
    .controller('ParentCtrl', function($scope) {

        $scope.somePrimitive = 99;
        $scope.someObject = {
            todd: {
                age: 25,
                location: 'England, UK'
            }
        };

        this.somePrimitive = 99;
        this.someObject = {
            todd: {
                age: 25,
                location: 'England, UK'
            }
        };
        this.updateValues = function() {
            this.somePrimitive = 33;
            this.someObject = {
                jilles: {
                    age: 20,
                    location: 'Netherlands'
                }
            };
        };
    });