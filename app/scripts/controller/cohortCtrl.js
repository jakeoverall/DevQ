'use strict';

angular.module('devQ')
  .controller('cohortCtrl', ['$scope', '$state', 'cohortsRef', 'firebaseService', 'authService', function ($scope, $state, cohortsRef, firebaseService, authService) {
      
      $scope.cohorts = cohortsRef.$asArray();
      
      // $scope.selectCohort = function () {
      //     var id = $scope.cohortId;
      //     $state.go('queue', {queueId: id});
      // };
    
    $scope.reg = true;
    $scope.status = 'Register';

    $scope.showReg = function () {
        if ($scope.reg) {
 			$scope.status = 'Log In';
        } else {
            $scope.status = 'Register';
        }
        $scope.reg = !$scope.reg;
        $scope.error = '';
    };

    $scope.logMeIn = function () {

        authService.logIn($scope.student).then(function (res) {
        	authService.getStudent().then(function(studentObj) {
        		firebaseService.currentStudent(studentObj.id).then(function(curStudent) {
        			$state.go('student.queue', {queueId: curStudent.cohortId});
        		})        		
        	});            
        }, function (error) {
            $scope.error = error.message.slice(20);
        });
    };

    $scope.registerStudent = function () {
        authService.registerStudent($scope.register);
        $scope.register = '';
        $scope.showReg();
    }, function (error) {
        $scope.error = error.toString();
    };
  }]);