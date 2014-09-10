'use strict';

var devQ = angular.module('devQ');

devQ.controller('studentAssignmentsCtrl', ['$scope', 'studentAssignmentsRef', 'cohortAssignmentsRef', function ($scope, studentAssignmentsRef, cohortAssignmentsRef) {

    $scope.assignments = cohortAssignmentsRef;

    $scope.studentAssignments = studentAssignmentsRef.$asArray();

    $scope.submitAssignment = function (assignment) {
        debugger;
        assignment.submittedAt = new Date().toISOString();
        $scope.studentAssignments.$add(assignment);
    };
}]);