'use strict';

var devQ = angular.module('devQ');

devQ.controller('rosterCtrl', ['$scope', 'firebaseService', function ($scope) {

    $scope.addStudent = function (student) {
        student.mentorId = $scope.mentor.$id;
        student.mentorName = $scope.mentor.name;
        student.menteeId = $scope.mentees.length;
        student.userId = student.$id;
        $scope.mentees.$add(student);
        $scope.students.$save(student);
    };

	$scope.graduate = function(student) {
		student.alumni = true;
		$scope.students.$save(student);
	};

	$scope.boot = function(student) {
		student.dropped = true;
		$scope.students.$save(student);
	};

    $scope.revert = function (student) {
        student.alumni = '';
        student.dropped = '';
        $scope.students.$save(student);
    };

}]);