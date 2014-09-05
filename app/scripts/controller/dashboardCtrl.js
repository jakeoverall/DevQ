'use strict';

var devQ = angular.module('devQ');

devQ.controller('dashboardCtrl', ['$scope', '$state', 'cohortsRef', 'mentorsRef','authService', 'firebaseService', function ($scope, $state, cohortsRef, mentorsRef, authService) {

    $scope.cohorts = cohortsRef.$asArray();
    $scope.mentors = mentorsRef.$asArray();

    $scope.toggleStatus = function () {
        if ($scope.mentor.status === 'Available') {
            $scope.mentor.status = 'Away';
            $scope.mentor.$save();
        } else {
            $scope.mentor.status = 'Available';
            $scope.mentor.$save();
        }
    };

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
    };

    $scope.removeCohort = function(cohort) {
        cohort.status = false;
        $scope.cohorts.$save(cohort);
    };

    $scope.viewCohort = function (cohort) {
        $state.go('secure.queue', { queueId: cohort.$id });
    };
}]);