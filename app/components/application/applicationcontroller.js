'use strict';

/**
 * @ngdoc function
 * @name testControllerViewsApp.controller:ApplicationcontrollerCtrl
 * @description
 * # ApplicationcontrollerCtrl
 * Controller of the testControllerViewsApp
 */
angular.module('testControllerViewsApp')
    .controller('ApplicationcontrollerCtrl', function($scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        this.defaultCity = "dublin";

        this.updateValue = function() {
            this.defaultCity = "London"
        }
    });