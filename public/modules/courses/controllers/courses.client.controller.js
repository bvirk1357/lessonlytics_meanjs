'use strict';

angular.module('courses').controller('CoursesController', ['$scope', '$state', 'CoursesSrv',
  function($scope, $state, CoursesSrv) {

    // Create new Course
    $scope.create = function() {

      console.log('CoursesController.create()');
      // console.log('first_name: ' + $scope.first_name);

      // Create new Teacher object
      var course = new CoursesSrv ({
        title: this.title,
        description: this.description,
        subject: this.subject,
        properties_list: this.properties_list
      });


      // Check the status of the save
      course.$save(function(response) {

        // Redirect to courses homepage where they can see all the info for their courses
        $state.go('courses_home');

      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Login an existing Course
    $scope.login = function() {

      console.log('CoursesController.login()');

      // Redirect after save
      $state.go('courses');

      // Clear form fields
      $scope.name = '';
    };

    // Find a list of courses
    $scope.find = function() {

      console.log('CoursesController.find()');

      // Create new Course object
      var course = new CoursesSrv();

      // Check the status of the save
      course.$query(function(response) {

        $scope.course_list = response.course_list;

        // Redirect back to the teacher's home page
        $state.go('teachers_home');
      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });

    };

  }
]);