'use strict';

var devQ = angular.module('devQ');

devQ.controller('dashboardCtrl', ['$scope', '$state', 'cohortsRef', 'mentorsRef', 'firebaseService', function ($scope, $state, cohortsRef, mentorsRef) {

    $scope.cohorts = cohortsRef.$asArray();
    $scope.mentors = mentorsRef.$asArray();

    //$scope.selectCohort = function (cohort) {
    //    $state.go('queue', { cohortId: cohort.id });
    //};
}]);