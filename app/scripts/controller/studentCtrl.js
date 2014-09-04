'use strict';

angular.module('devQ')
  .controller('studentCtrl', function ($scope, studentRef, $state) {
      if (!studentRef || studentRef === 'undefined') {
          $state.go('login');
      }
      $scope.student = studentRef;
  });