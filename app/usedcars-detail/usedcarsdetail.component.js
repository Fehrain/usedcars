'use strict';


angular.
  module('usedcarsdetail').
  component('usedcarsdetail', {
    template: 'TBD: Detail view for <span>{{$ctrl.id}}</span>',
    controller: ['$routeParams',
      function UsedCarsDetailController($routeParams) {
        this.id = $routeParams.id;
      }
    ]
  });
