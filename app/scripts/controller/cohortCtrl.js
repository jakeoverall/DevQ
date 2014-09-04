'use strict';

angular.module('devQ')
  .controller('cohortCtrl', ['$scope', '$state', 'cohortsRef', 'firebaseService', function ($scope, $state, cohortsRef, firebaseService) {
      
      $scope.cohorts = cohortsRef.$asArray();

      $scope.selectCohort = function () {
          firebaseService.getCohort($scope.cohort);
          $state.go('queue');
      };
  }]);