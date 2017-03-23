'use strict';

angular.
  module('usedCarsStuff').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('');

      $routeProvider.
        when('/usedcars-list', {
          template: '<usedcarslist></usedcarslist>'
        }).
        when('/cars/:id', {
          template: '<usedcarsdetail></usedcarsdetail>'
        }).
        otherwise('/usedcars-list');
    }
  ]);
