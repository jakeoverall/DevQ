'use strict';

var devQ = angular.module('devQ');

devQ.controller('queueCtrl', [ '$scope', 'queueRef', 'firebaseService', function($scope, queueRef, firebaseService) {

    $scope.queue = queueRef.$asArray();

    $scope.mentor = function() {
        return firebaseService.getMentor($scope.username.id).$asObject();
    };
    console.log($scope.mentor());

    $scope.isMentor = function() {
       if($scope.mentor !== null){
        return true;
       }
    };
    
    //$scope.isMentor = function() {
    //    if ($scope.mentor) {
    //        return false;
    //    } else {
    //        return true;
    //    };
    //};

    $scope.enterQueue = function () {
        var question = {};
        question.body = $scope.message || '';
        question.status = 'Red';
        question.submittedBy = $scope.username || '';
        $scope.queue.$add(question);
        $scope.message = '';
    };

    $scope.leaveQueue = function(question) {
        question.status = 'Green';
        $scope.queue.$save(question);
    };

    $scope.assigned = function(question) {
        question.status = 'yellow';
        question.mentor = $scope.mentor || '';
        $scope.queue.$save(question);
    };
}]);