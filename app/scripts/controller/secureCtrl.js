'use strict';

angular.module('devQ')
  .controller('secureCtrl', function ($scope, username, $state) {
      if (!username || username === 'undefined') {
          $state.go('login');
      }
      $scope.username = username;
  });
  