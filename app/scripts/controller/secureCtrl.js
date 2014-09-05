'use strict';

angular.module('devQ')
  .controller('secureCtrl', function ($scope, mentorRef, cohortsRef, mentorsRef, $state, firebaseService) {
      if (!mentorRef) {
          $state.go('cohort');
      }
      firebaseService.getMentor(mentorRef.id).then(function (mentor) {
          $scope.user = mentorRef;
          $scope.mentor = mentor;
      });
      $scope.cohorts = cohortsRef.$asArray();
      $scope.mentors = mentorsRef.$asArray();
  });
  