'use strict';

var devQ = angular.module('devQ');

devQ.controller('dashboardCtrl', ['$scope', '$state', 'cohortsRef', 'mentorsRef','authService', 'firebaseService', function ($scope, $state, cohortsRef, mentorsRef, authService) {

    $scope.cohorts = cohortsRef.$asArray();
    $scope.mentors = mentorsRef.$asArray();

    $scope.logOff = function() {
        authService.logOut().then(function() {
           $state.go('mentor');
        });
    };

    $scope.addCohort = function() {
    	var cohort = {};
    	cohort.status = true;
    	cohort.name = $scope.cohortName;
    	$scope.cohorts.$add(cohort);
    	$scope.cohortName = '';
    }

    $scope.removeCohort = function(cohort) {
    	cohort.status = false;
    	$scope.cohorts.$save(cohort);
    }
}]);