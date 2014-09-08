'use strict';

var devQ = angular.module('devQ');

devQ.controller('rosterCtrl', ['$scope', 'firebaseService', function ($scope, firebaseService) {

    var getMentor = function () {
        firebaseService.getMentor($scope.user.id).then(function (res) {
            $scope.mentor = res;
        });
    };
    getMentor();

    $scope.addStudent = function (student) {
        debugger;
        student.mentorId = $scope.mentor.$id;
        student.mentorName = $scope.mentor.name;
        student.menteeId = $scope.mentees.length;
        $scope.mentees.$add(student);
        $scope.students.$save(student);
    };

    $scope.removeStudent = function (student) {
        debugger;
        $scope.mentees.$removeUserObject($scope.mentees, student);
        student.mentorId = '';
        student.mentorName = '';
        $scope.students.$save(student);
    };

    $scope.graduate = function (student) {
        student.alumni = true;
        $scope.students.$save(student);
    };

    $scope.boot = function (student) {
        student.dropped = true;
        $scope.students.$save(student);
    };

    $scope.revert = function (student) {
        student.alumni = '';
        student.dropped = '';
        $scope.students.$save(student);
    };

}]);