'use strict';

var devQ = angular.module('devQ');

devQ.controller('cohortAssignmentsCtrl', ['$scope', 'cohortAssignmentsRef', 'firebaseService', function ($scope, cohortAssignmentsRef, firebaseService) {

    $scope.assignments = cohortAssignmentsRef.$asArray();
    
    $scope.createAssignment = function () {
        var assignment = {
            name: $scope.assignment.name,
            week: $scope.assignment.week,
            url: $scope.assignment.repoUrl,
            details: $scope.assignment.details,
            type: $scope.assignment.type,
            active: true
        };
        $scope.assignments.$add(assignment);
        $scope.assignment = '';
    };

    $scope.weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    $scope.types = ['Web Dev', 'iOS'];

    $scope.editAssignment = function (assignment) {
        $scope.assignments.$save(assignment);
    };

    $scope.removeAssignment = function (assignment) {
        $scope.assignments.$remove(assignment);
    };
}]);