'use strict';

//defining module
console.log('hi');
angular.module('usedCarsStuff')
	.component('usedcarsdetail',{
	templateUrl: 
		'usedcars-detail/usedcarsdetail.template.html',
	controller: function UsedCarsController(){
		
	console.log("hi");
	this.cars = [
	{
		id: 'tc09',
		thumbnailImageUrl: 'tc09-thumbnail.jpg',
		make: 'Toyota',
		model: 'Corolla',
		year: "2009",
		mileage: 90123,
		engine: 1.8,
		details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		id: 'hc10',
		thumbnailImageUrl: 'hc10-thumbnail.jpg',
		make: 'Honda',
		model: 'Civic',
		year: "2010",
		mileage: 85213,
		engine: 1.8,
		details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		id: 'ff11',
		thumbnailImageUrl: 'ff11-thumbnail.jpg',
		make: 'Ford',
		model: 'Fiesta',
		year: "2011",
		mileage: 60453,
		engine: 1.8,
		details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		id: 'cc12',
		thumbnailImageUrl: 'cc12-thumbnail.jpg',
		make: 'Chevy',
		model: 'Cruze',
		year: "2012",
		mileage: 32218,
		engine: 1.8,
		details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		id: 'he13',
		thumbnailImageUrl: 'he13-thumbnail.jpg',
		make: 'Hyundai',
		model: 'Elantra',
		year: "2013",
		mileage: 20020,
		engine: 1.8,
		details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}
	];
	
	var sortedCarsList = this.sortedCarsList = [];
	
	var compareCarMileage = function()
		{
			
			console.log("function");
		}
		
	}
	
	});
	


