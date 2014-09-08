'use strict';

angular.module('devQ')
  .controller('studentCtrl', function ($scope, studentRef, firebaseService, mentorsRef, $state) {
      
      if (!studentRef) {
          $state.go('cohort');
      }

      $scope.studentUser = studentRef;
      $scope.mentors = mentorsRef.$asArray();
  });
