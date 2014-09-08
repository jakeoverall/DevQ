'use strict';

var devQ = angular.module('devQ');

devQ.controller('menteesCtrl', ['$scope', function ($scope) {

    $scope.removeStudent = function (student) {
        $scope.mentees.$removeUserObject($scope.mentees, student);
        student.mentorId = '';
        student.mentorName = '';
        $scope.students.$saveUserObject($scope.students, student);
    };
    
}]);