'use strict';

angular.module('teachers').factory('TeachersSrv', ['$resource',
	function($resource) {

		console.log('Inside Service function!!!!');

    return $resource('teachers', {first_name: '@first_name', last_name: '@last_name', username: '@username', email: '@email', password: '@password'},
    	{
      	'query': {method:'GET', isArray: false},
      	'save': {method:'POST'}
   		}
   	);

    // $resource(url, [paramDefaults], [actions], options);

	}
]);
