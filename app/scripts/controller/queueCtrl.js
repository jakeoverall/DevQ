'use strict';

var devQ = angular.module('devQ');

devQ.controller('queueCtrl', [ '$scope', 'queueRef', function($scope, queueRef) {

    var mentor = $scope.mentor || false;

    $scope.queue = queueRef.$asArray();

    var checkMentor = function () {
        if (mentor) {
            $scope.isMentor = true;
        } else {
            $scope.isMentor = false;
        }
    };
    checkMentor();

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
        debugger;
        if (question.submittedBy.email === $scope.student.email || mentor) {
            question.status = 'Green';
            $scope.queue.$save(question);
        }
    };

    $scope.assigned = function(question) {
        debugger;
        if (mentor) {
            question.status = 'yellow';
            question.mentor = $scope.mentor || '';
            $scope.queue.$save(question);
        }
    };
}]);