'use strict';

angular.module('devQ')
  .controller('loginCtrl', function ($scope, $state, environmentService) {

      $scope.logMeIn = function () {
          environmentService.saveUsername($scope.username);
          $state.go('secure.queue');
      };
  });