'use strict';

var devQ = angular.module('devQ');

devQ.controller('assignmentsCtrl', ['$scope', 'studentRef', 'studentAssignmentsRef', function ($scope, studentRef, studentAssignmentsRef) {
    $scope.student = studentRef;
    $scope.assignments = studentAssignmentsRef.$asArray();

    $scope.review = function(assignment) {
    	assignment.reviewedBy = $scope.mentor.name;
    	$scope.assignments.$save(assignment);
    };

}]);