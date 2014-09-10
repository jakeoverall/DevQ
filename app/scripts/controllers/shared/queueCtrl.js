'use strict';

var devQ = angular.module('devQ');


devQ.controller('queueCtrl', ['$scope', 'queueRef', 'firebaseService', 'authService', '$state', function ($scope, queueRef, firebaseService, authService, $state) {

    $scope.queue = queueRef.$asArray();

    $scope.enterQueue = function () {
        var question = {};
        question.text = $scope.text || '';
        question.status = 'Red';
        question.submittedBy = $scope.student || '';
        question.submittedAt = new Date().toISOString();
        $scope.queue.$add(question);
        $scope.text = '';
    };

    $scope.leaveQueue = function (question) {
        if ($scope.student) {
            if (question.submittedBy.email === $scope.student.email) {
                question.status = 'Green';
                question.resolvedAt = new Date().toISOString();
            } else {
                return;
            }
        } else if ($scope.mentor) {
            question.status = 'Green';
            question.resolvedAt = new Date().toISOString();
            $scope.mentor.status = 'Available';

            $scope.mentor.$save();
        }
        $scope.queue.$save(question);
    };

    $scope.logOff = function () {
        authService.logOut().then(function () {
            $state.go('cohort');
        });
    };

    $scope.assigned = function (question) {
        if ($scope.mentor) {
            question.status = 'yellow';
            question.mentor = $scope.mentor || '';
            $scope.mentor.status = 'Busy';
            $scope.mentor.$save();
            $scope.queue.$save(question);
        }
    };
}]);