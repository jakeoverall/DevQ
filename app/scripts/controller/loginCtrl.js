'use strict';

angular.module('devQ')
  .controller('loginCtrl', function ($scope, $state, enviromentService) {
      
      $scope.logMeIn = function () {
          enviromentService.saveUsername($scope.username).then(function () {
              $state.go('secure.queue');
          });
      };
  });