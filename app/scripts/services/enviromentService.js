'use strict';

angular.module('devQ')
  .service('environmentService', function ($window) {
      return {
          getEnv: function () {
              return $window.env;
          },
          saveUsername: function (username) {
              $window.localStorage.setItem('username', username);
          },
          getUsername: function () {
              return $window.localStorage.getItem('username');
          }
      };
  });