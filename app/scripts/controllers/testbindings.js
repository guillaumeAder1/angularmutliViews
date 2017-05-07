 'use strict';

 var example = {
     bindings: {
         obj: '<',
         prim: '<'
     },
     template: `
    <div class="section">
      <h4>
        Component 1
      </h4>
      <p>Object: {{ $ctrl.obj }}</p>
      <p>Primitive: {{ $ctrl.prim }}</p>
      <a href="" ng-click="$ctrl.updateValues();">
        Change Isolate Values
      </a>
    </div>
  `,
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
     }
 };


 var example2 = {
     bindings: {
         obj: '=',
         prim: '='
     },
     template: `
    <div class="section">
      <h4>
        Component 2
      </h4>
      <p>Object: {{ $ctrl.obj }}</p>
      <p>Primitive: {{ $ctrl.prim }}</p>
      <a href="" ng-click="$ctrl.updateValues();">
        Change Isolate Values
      </a>
    </div>
  `,
     controller: function() {
         this.updateValues = function() {
             this.prim = 10;
             this.obj = {
                 patrick: {
                     age: 35,
                     location: 'France'
                 }
             };
         };
     }
 };

 function ParentController() {
     this.somePrimitive = 99;
     this.someObject = {
         todd: {
             age: 25,
             location: 'England, USA'
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
 }

 angular
     .module('app', [])
     .component('example', example)
     .component('example2', example2)
     .controller('ParentController', ParentController);