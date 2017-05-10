'use strict';

/**
 * @ngdoc directive
 * @name testControllerViewsApp.directive:application
 * @description
 * # application
 */
angular.module('testControllerViewsApp')
    .component('application', {
        templateUrl: 'views/application.html',
        controller: 'ApplicationcontrollerCtrl'

    });