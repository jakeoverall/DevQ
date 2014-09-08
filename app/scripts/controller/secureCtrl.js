'use strict';

angular.module('devQ')
  .controller('secureCtrl', function ($scope,  $state, mentorRef, cohortsRef, mentorsRef, studentsRef) {
      if (!mentorRef) {
          $state.go('cohort');
      }

      $scope.user = mentorRef;

      $scope.students = studentsRef.$asArray();
      $scope.cohorts = cohortsRef.$asArray();
      $scope.mentors = mentorsRef.$asArray();
  });
