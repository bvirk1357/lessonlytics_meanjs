'use strict';

//Setting up route
angular.module('teachers').config(['$stateProvider',
	function($stateProvider) {
		// Teachers state routing
		$stateProvider.
    state('teachers', {
      url: '/teachers',
      templateUrl: 'modules/teachers/views/teachers.client.view.html'
    }).
		state('teachers_signup', {
			url: '/teachers_signup',
			templateUrl: 'modules/teachers/views/teachers_signup.client.view.html'
		}).
    state('teachers_login', {
      url: '/teachers_login',
      templateUrl: 'modules/teachers/views/teachers_login.client.view.html'
    }).
    state('teachers_home', {
      url: '/teachers_home',
      templateUrl: 'modules/teachers/views/teachers_home.client.view.html'
    });
	}
]);