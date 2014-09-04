'use strict';

var devQ = angular.module('devQ');

devQ.controller('dashboardCtrl', ['$scope', '$state', 'cohortsRef', 'mentorsRef', 'firebaseService', function ($scope, $state, cohortsRef, mentorsRef) {

    $scope.cohorts = cohortsRef.$asArray();
    $scope.mentors = mentorsRef.$asArray();

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