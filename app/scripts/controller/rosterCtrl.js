'use strict';

var devQ = angular.module('devQ');

devQ.controller('rosterCtrl',[ '$scope', 'firebaseService', 'rosterRef', function($scope, firebaseService, rosterRef) {
	
    var getMentor = function () {
        firebaseService.getMentor($scope.user.id).then(function (res) {
            firebaseService.assignStudent(res.$id).then(function(mentees) {
            	$scope.mentor = res;
            	$scope.mentees = mentees;
            });
        });
    };
    getMentor();


	$scope.students = rosterRef.$asArray();

	console.log($scope.students);

	$scope.addStudent = function(student) {
		student.mentorId = $scope.mentor.$id;
		student.mentorName = $scope.mentor.name;
		$scope.students.$save(student);
	};

	$scope.removeStudent = function(student) {
			student.mentorId = '';
			student.mentorName = '';
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

	$scope.revert = function(student) {
		student.alumni = '';
		student.dropped = '';
		$scope.students.$save(student);
	};



}]);