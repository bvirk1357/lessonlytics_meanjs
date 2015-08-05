'use strict';

angular.module('teachers').controller('TeachersController', ['$scope', '$state', 'TeachersSrv',
	function($scope, $state, TeachersSrv) {

    // Create new Teacher
    $scope.create = function() {

      console.log('TeachersController.create()');
      console.log('first_name: ' + $scope.first_name);

      // Create new Teacher object
      var teacher = new TeachersSrv ({
        first_name: this.first_name,
        last_name: this.last_name,
        username: this.username,
        email: this.email,
        password: this.password
      });


      // Check the status of the save
      teacher.$save(function(response) {

        // Redirect to teachers homepage where they can see all the info for their courses
        $state.go('teachers_home');

      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });

      // Redirect after save
      //$location.path('teachers');
      // $state.go('teachers');

      // Clear form fields
      // $scope.name = '';
    };

    // Login an existing Teacher
    $scope.login = function() {

      console.log('TeachersController.login()');

      // Redirect after save
      // $location.path('teachers');
      $state.go('teachers');

      // Clear form fields
      $scope.name = '';
    };

    // Find a list of Teachers
    $scope.find = function() {

      console.log('TeachersController.find()');

      // Create new Teacher object
      var teacher = new TeachersSrv();

      // Check the status of the save
      teacher.$query(function(response) {

        $scope.teacher_list = response.teacher_list;

        // Redirect to teachers homepage where they can see all the info for their courses
        $state.go('teachers_home');
      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });

    };

	}
]);