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
    var queueLength = $scope.queue.length;
    var queueWatch = function(){
        if($scope.queue.length > queueLength){
            notify();
        } 
        queueLength = $scope.queue.length;
    }

    var notify = function(){
        if($scope.mentor){

            var Notification = window.Notification || window.mozNotification || window.webkitNotification;

            Notification.requestPermission(function (permission) {
                //console.log(permission);
            });
                var question = $scope.queue[$scope.queue.length - 1];
                console.log(question);

                var instance = new Notification(question.submittedBy.studentName, { body: question.text || '', icon: question.icon || '' });

                instance.onclick = function () {
                    // Something to do
                };
                instance.onerror = function () {
                    // Something to do
                };
                instance.onshow = function () {
                    // Something to do
                };
                instance.onclose = function () {
                    // Something to do
                };
                return false;
        }
    }
    $scope.$watch(queueWatch);
}]);