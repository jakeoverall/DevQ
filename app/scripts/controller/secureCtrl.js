'use strict';

angular.module('devQ')
  .controller('secureCtrl', function ($scope, mentorRef, $state, firebaseService) {
      if (!mentorRef || mentorRef === 'undefined') {
          $state.go('cohort');
      }
      firebaseService.getMentor(mentorRef.id).then(function (mentor) {
          $scope.mentor = mentor;
      });
  });
  