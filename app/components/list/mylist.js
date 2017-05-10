'use strict';

/**
 * @ngdoc directive
 * @name testControllerViewsApp.directive:mylist
 * @description
 * # mylist
 */
angular.module('testControllerViewsApp')
    .directive('mylist', function() {
        return {
            templateUrl: 'views/mylist.html',
            restrict: 'AE',
            controller: "ListcontrollerCtrl",
            controllerAs: "listCtrl",
            scope: true,
            // link: function postLink(scope, element, attrs) {
            //     //element.text('this is the mylist directive');
            //     console.log(scope)
            // }
        };
    });