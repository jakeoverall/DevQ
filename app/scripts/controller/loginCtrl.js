'use strict';

angular.module('devQ')
  .controller('loginCtrl', function ($scope, $state, AuthService) {

      $scope.register = function () {
          AuthService.register($scope.registerUsername, $scope.registerPassword);
      };

      $scope.logMeIn = function () {
          AuthService.logIn($scope.username, $scope.password).then(function () {
              $state.go('secure.questions');
          });
      };
  });