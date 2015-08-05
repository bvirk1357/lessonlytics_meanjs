'use strict';

angular.module('courses').factory('CoursesSrv', ['$resource',
  function($resource) {

    console.log('Inside Course Service function!!!!');

    return $resource('courses', {title: '@title', description: '@description', subject: '@subject', properties_list: '@properties_list'},
      {
        'query': {method:'GET', isArray: false},
        'save': {method:'POST'}
      }
    );

  }
]);
