'use strict';

//Setting up route
angular.module('videos').config(['$stateProvider',
	function($stateProvider) {
		// Videos state routing
		$stateProvider.
		state('videos', {
			url: '/videos',
			templateUrl: 'modules/videos/views/videos.client.view.html'
		});
	}
]);