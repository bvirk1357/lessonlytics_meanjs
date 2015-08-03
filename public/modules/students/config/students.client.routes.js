'use strict';

//Setting up route
angular.module('students').config(['$stateProvider',
	function($stateProvider) {
		// Students state routing
		$stateProvider.
		state('students', {
			url: '/students',
			templateUrl: 'modules/students/views/students.client.view.html'
		});
	}
]);