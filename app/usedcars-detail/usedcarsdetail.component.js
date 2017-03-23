'use strict';

//defining module
console.log('hi');
angular.module('usedCarsStuff')
	.component('usedcarsdetail',{
	templateUrl: 
		'usedcars-detail/usedcarsdetail.template.html',
	controller: ['$http', '$routeParams', function UsedCarsController($http,$routeParams){
		var self = this;
		
		$http.get('cars/'+$routeParams.id + '.json').then(function(response){
			self.car= response.data;
		});
	}
	]
	
	
	
	
	
	});
	


