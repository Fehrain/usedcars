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
	
	var sortedCarsList = [];
	
	for (var x = 0; x < carsList.length; x++)
	{
		if (carsList[x].mileage>lowMiles && carsList[x].mileage<highMiles)
		{
			sortedCarsList.push(carsList[x]);
		}
	}
	console.log(sortedCarsList);
	
	console.log("sdfsdf");
	
	console.log(lowMiles);
	console.log(highMiles);
	};
	
	
	
});
	

