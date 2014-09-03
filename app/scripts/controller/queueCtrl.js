'use strict';

var devQ = angular.module('devQ');

devQ.controller('queueCtrl', [ '$scope', 'queueRef', function($scope, queueRef) {

    $scope.queue = queueRef().$asArray();

    $scope.enterQueue = function () {
        var question = {};
        question.body = $scope.message || '';
        question.status = 'Red';
        question.submittedBy = $scope.username || '';
        $scope.queue.$add(question);
    };

    $scope.leaveQueue = function(question) {
        question.status = 'Green';
        $scope.queue.$save(question);
    };

    $scope.assigned = function(question) {
        question.status = 'yellow';
        question.mentor = $scope.username || '';
        $scope.queue.$save(question);
    };
}]);