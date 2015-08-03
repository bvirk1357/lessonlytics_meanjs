'use strict';

angular.module('teachers').controller('TeachersController', ['$scope',
	function($scope) {

    // Create new Teacher
    $scope.create = function() {
        // Redirect after save
        $location.path('teachers');

        // Clear form fields
        $scope.name = '';
    };


    // Find a list of Teachers
    $scope.find = function() {
        // hard coded data
        $scope.teachers = [{
            'first_name': 'Bikram',
            'last_name': 'Virk'
        },
        {
            'first_name': 'Albert',
            'last_name': 'Einstien'
        }];
    };

	}
]);