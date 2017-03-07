'use strict';

//defining module

var usedCarsStuff = angular.module('usedCarsStuff',[]);

//defining controllers

usedCarsStuff.controller('UsedCarsController', function UsedCarsController($scope){
	
	
	
	var carsList = $scope.cars = [
	{
		location: 0,
		make: 'Toyota',
		model: 'Corolla',
		year: "2009",
		mileage: 90123,
		engine: 1.8,
		details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		location: 1,
		make: 'Honda',
		model: 'Civic',
		year: "2010",
		mileage: 85213,
		engine: 1.8,
		details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		location: 2,
		make: 'Honda',
		model: 'Civic',
		year: "2011",
		mileage: 60453,
		engine: 1.8,
		details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		location: 3,
		make: 'Honda',
		model: 'Civic',
		year: "2012",
		mileage: 32218,
		engine: 1.8,
		details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		location: 4,
		make: 'Honda',
		model: 'Civic',
		year: "2013",
		mileage: 20020,
		engine: 1.8,
		details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}
	];
	
	

	
	
	var sortedCarsList = $scope.sortedCarsList = [];

	
	
	$scope.compareCarMileage = function(lowMiles,highMiles){
	
	var x = document.getElementById('originalUsedCars');
    x.style.display = 'none';

	
	for (var x = 0; x < carsList.length; x++)
	{
		if (carsList[x].mileage>lowMiles && carsList[x].mileage<highMiles)
		{
			sortedCarsList.push(carsList[x]);
		}
	}

	$scope.sortedCarsList = [];
	
	for (var x = 0; x < carsList.length; x++)
	{
		
		
		if (carsList[x].mileage > lowMiles && carsList[x].mileage < highMiles)
		{
			
			$scope.sortedCarsList.push(carsList[x]);
			
		};
	};

	
	console.log($scope.sortedCarsList);
	
	};
	
	$scope.detailsPage = function(location){
		
		window.location.href = 'details'+location+'.html';
		console.log(location);
	}
	
	
});
	

