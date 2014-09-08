'use strict';

angular.module('devQ')
  .controller('studentCtrl', function ($scope, studentRef, mentorsRef, $state) {
      debugger;
      if (!studentRef) {
          $state.go('cohort');
      }

      $scope.studentUser = studentRef;
      $scope.mentors = mentorsRef.$asArray();
  });
