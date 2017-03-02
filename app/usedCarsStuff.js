'use strict';

//defining module

var usedCarsStuff = angular.module('usedCarsStuff',[]);

//defining controllers

usedCarsStuff.controller('UsedCarsController', function UsedCarsController($scope){
	
	
	
	var carsList = $scope.cars = [
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
	
	
	var lowerMileage = $scope.lowerMileage;
	
	
	
	$scope.compareCarMileage = function(lowMiles,highMiles){
		
	console.log(carsList[0]);
	
	
	
	console.log(lowMiles);
	console.log(highMiles);
	};
	
	
	
});
	

