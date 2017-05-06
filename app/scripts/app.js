'use strict';

/**
 * @ngdoc overview
 * @name testControllerViewsApp
 * @description
 * # testControllerViewsApp
 *
 * Main module of the application.
 */
angular
    .module('testControllerViewsApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ])
    .config(function($routeProvider, $stateProvider) {
        // $routeProvider
        //   .when('/', {
        //     templateUrl: 'views/main.html',
        //     controller: 'MainCtrl',
        //     controllerAs: 'main'
        //   })
        //   .when('/about', {
        //     templateUrl: 'views/about.html',
        //     controller: 'AboutCtrl',
        //     controllerAs: 'about'
        //   })
        //   .otherwise({
        //     redirectTo: '/'
        //   });
    });