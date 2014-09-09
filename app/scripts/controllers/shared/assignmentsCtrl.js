'use strict';

var devQ = angular.module('devQ');

devQ.controller('assignmentsCtrl', ['$scope', 'studentRef', 'studentAssignmentsRef', function ($scope, studentRef, studentAssignmentsRef) {
    $scope.student = studentRef;
    $scope.assignments = studentAssignmentsRef.$asArray();

    $scope.submitAssignment = function(assignment) {

    };

}]);