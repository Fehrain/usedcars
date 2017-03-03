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
	},
	{
		make: 'Honda',
		model: 'Civic',
		year: "2011",
		mileage: "85213"
	},
	{
		make: 'Honda',
		model: 'Civic',
		year: "2012",
		mileage: "85213"
	},
	{
		make: 'Honda',
		model: 'Civic',
		year: "2013",
		mileage: "85213"
	}
	];
	
	
	var lowerMileage = $scope.lowerMileage;
	
	
	
	
	$scope.compareCarMileage = function(lowMiles,highMiles){
	
	
	
	$scope.sortedCarsList = [];
	for (var x = 0; x < carsList.length; x++)
	{
		console.log(x);
		
		if (carsList[x].mileage>lowMiles && carsList[x].mileage<highMiles)
		{
			$scope.sortedCarsList.push(carsList[x]);
			
		}
	}
	
	
	};
	
	
	
});
	

