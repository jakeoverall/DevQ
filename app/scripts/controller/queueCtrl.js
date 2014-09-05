'use strict';

var devQ = angular.module('devQ');

devQ.controller('queueCtrl', [ '$scope', 'queueRef', 'firebaseService', function($scope, queueRef) {

    $scope.queue = queueRef.$asArray();

    //$scope.mentor = function() {
    //    return firebaseService.getMentor($scope.username.id).$asObject();
    //};
    //console.log($scope.mentor());

    //$scope.isMentor = function() {
    //   if($scope.mentor !== null){
    //    return true;
    //   }
    //};
    
    //$scope.isMentor = function() {
    //    if ($scope.mentor) {
    //        return false;
    //    } else {
    //        return true;
    //    };
    //};

    $scope.enterQueue = function () {
        var question = {};
        question.text = $scope.text || '';
        question.status = 'Red';
        question.submittedBy = $scope.student || '';
        question.submittedAt = new Date().toISOString();
        $scope.queue.$add(question);
        $scope.text = '';
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

    $scope.mentorView = function() {
        if(isMentor());
    };
}]);