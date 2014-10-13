'use strict';

var devQ = angular.module('devQ');

devQ.controller('assignmentsListCtrl', ['$scope', 'assignmentsRef', 'firebaseService', function ($scope, assignmentsRef, firebaseService) {

    $scope.assignments = assignmentsRef.$asArray();

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

    $scope.addAssignment = function () {
        firebaseService.getCohortAssignments($scope.cohortId.$id).then(function (res) {
            var cohortAssignments = res;
            var questionsAdded = 0;
            for (var i = 0; i < $scope.assignments.length; i++) {
                if ($scope.assignments[i].add === true) {
                    questionsAdded++;
                    cohortAssignments.$add($scope.assignments[i]);
                    $scope.assignments[i].add = false;
                }
            }
            $scope.message = 'Added ' + questionsAdded + ' questions';
        });
    };
}]);