'use strict';

var devQ = angular.module('devQ');

devQ.controller('assignmentsCtrl', ['$scope', 'studentRef', 'assignmentsRef', function ($scope, studentRef, assignmentsRef) {
    $scope.student = studentRef;
    $scope.assignments = assignmentsRef.$asArray();

    $scope.submitAssignment = function() {

    };

}]);