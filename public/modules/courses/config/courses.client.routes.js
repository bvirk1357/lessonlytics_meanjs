'use strict';

//Setting up route
angular.module('courses').config(['$stateProvider',
	function($stateProvider) {
		// Courses state routing
		$stateProvider.
		state('courses', {
			url: '/courses',
			templateUrl: 'modules/courses/views/courses.client.view.html'
		});
	}
]);