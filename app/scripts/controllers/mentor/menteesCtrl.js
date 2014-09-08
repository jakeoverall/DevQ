'use strict';

var devQ = angular.module('devQ');

devQ.controller('menteesCtrl', ['$scope', function ($scope) {

    $scope.removeStudent = function (student) {
        var id = student.$id;
        student.mentorId = '';
        student.mentorName = '';
        student.$id = student.userId;
        $scope.students.$saveUserObject($scope.students, student);
        student.$id = id;
        $scope.mentees.$removeUserObject($scope.mentees, student);
    };
    
}]);