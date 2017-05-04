'use strict';

/**
 * @ngdoc directive
 * @name testControllerViewsApp.directive:listdirective
 * @description
 * # listdirective
 */
angular.module('testControllerViewsApp')
  .directive('listdirective', function () {
    return {
      templateUrl: 'views/listdirectiveview.html',
      restrict: 'E',
      replace: true,  
      // if leave commented toto = controller $scope.toto
      // scope:{
      //   toto : '='
      // },
      link: function postLink(scope, element, attrs) {
        //element.text('this is the listdirective directive');
        //scope.e = "tototototo"
      }
    };
  });
