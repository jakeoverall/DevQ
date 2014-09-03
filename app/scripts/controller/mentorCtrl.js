'use strict';

angular.module('devQ')
  .controller('mentorCtrl', function ($scope, $state, enviromentService) {

      $scope.logMeIn = function () {
          enviromentService.saveMentor($scope.username).then(function () {
              $state.go('secure.queue');
          });
      };
  });