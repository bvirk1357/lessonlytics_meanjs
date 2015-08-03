'use strict';

//Setting up route
angular.module('teachers').config(['$stateProvider',
	function($stateProvider) {
		// Teachers state routing
		$stateProvider.
		state('teachers', {
			url: '/teachers',
			templateUrl: 'modules/teachers/views/teachers.client.view.html'
		});
	}
]);