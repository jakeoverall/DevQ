'use strict';

angular.module('devQ')
  .controller('mentorCtrl', function ($scope, $state, environmentService) {

      $scope.logMeIn = function () {
          environmentService.saveMentor($scope.username).then(function () {
              $state.go('secure.queue');
          });
      };
  });