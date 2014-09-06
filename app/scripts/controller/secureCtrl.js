'use strict';

angular.module('devQ')
  .controller('secureCtrl', function ($scope, mentorRef, cohortsRef, mentorsRef, $state, firebaseService) {
      if (!mentorRef) {
          $state.go('cohort');
      }

      $scope.user = mentorRef;

      $scope.cohorts = cohortsRef.$asArray();
      $scope.mentors = mentorsRef.$asArray();
  });
