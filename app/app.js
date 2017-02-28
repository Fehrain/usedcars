'use strict';

//defining module

var usedCarsStuff = angular.module('usedCarsStuff',[]);

//defining controllers

usedCarsStuff.controller('UsedCarsController', function UsedCarsController($scope){
	$scope.cars = [
	{
		make: 'Toyota',
		model: 'Corolla',
		year: "2009",
		mileage: "90123"
	},
	{
		make: 'Honda',
		model: 'Civic',
		year: "2010",
		mileage: "85213"
	}
	];	
});
	
		