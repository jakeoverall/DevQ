'use strict';

var devQ = angular.module('devQ');


devQ.controller('queueCtrl', ['$scope', 'queueRef', 'firebaseService', 'authService', '$state', function ($scope, queueRef, firebaseService, authService, $state) {
    var getMentor = function () {
        firebaseService.getMentor($scope.user.id).then(function (res) {
            $scope.mentor = res;
            var mentor = res || false;
            checkMentor(mentor);
        });
    };
    var getstudent = function () {
        firebaseService.currentStudent($scope.studentUser.id).then(function (res) {
            $scope.student = res;
        });
    };

    if ($scope.user) {
        getMentor();
    } else {
        getstudent();
    }



    $scope.queue = queueRef.$asArray();

    var checkMentor = function (mentor) {
        if (mentor) {
            $scope.isMentor = true;
        } else {
            $scope.isMentor = false;
        }
    };

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
            } else {
                return;
            }
        } else if ($scope.mentor) {
            question.status = 'Green';
            $scope.mentor.status = 'Available';
            $scope.mentor.$save();
        }
        $scope.queue.$save(question);
    };

    $scope.logOff = function() {
        authService.logOut().then(function() {
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

    // $window.onbeforeunload = function() {
    //   return "Data will be lost if you leave the page, are you sure?";
    // };    
}]);