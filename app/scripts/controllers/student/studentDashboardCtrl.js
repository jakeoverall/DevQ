'use strict';

angular.module('devQ')
  .controller('studentDashboardCtrl', function ($scope, firebaseService) {
      firebaseService.currentStudent($scope.studentUser.id).then(function (student) {
          $scope.student = student;
      });
  });