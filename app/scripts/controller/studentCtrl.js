'use strict';

angular.module('devQ')
  .controller('studentCtrl', function ($scope, studentRef, $state, firebaseService, mentorsRef) {
      if (!studentRef) {
          $state.go('cohort');
      }
      firebaseService.currentStudent(studentRef.id).then(function (curStudent) {
          $scope.user = studentRef;
          $scope.student = curStudent;
      });
      $scope.mentors = mentorsRef.$asArray();
  });