'use strict';

angular.module('devQ')
  .controller('cohortCtrl', ['$scope', '$state', 'cohortsRef', 'firebaseService', function ($scope, $state, cohortsRef, firebaseService) {
      debugger;
      $scope.cohorts = cohortsRef.$asArray();

      $scope.selectCohort = function () {
          firebaseService.setCohort($scope.cohort);
          $state.go('queue');
      };
  }]);