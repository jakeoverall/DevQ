'use strict';

angular.module('devQ')
  .controller('studentCtrl', function ($scope, studentRef, $state, firebaseService) {
      if (!studentRef || studentRef === 'undefined') {
          $state.go('cohort');
      }
      firebaseService.currentStudent(studentRef.id).then(function (curStudent) {
          $scope.student = curStudent;
      });
  });