'use strict';

angular.module('devQ')
  .service('environmentService', function ($window) {
      return {
          getEnv: function () {
              return $window.env;
          },
          saveUsername: function (username) {
              return $window.localStorage.setItem('username', username);
          },
          getUsername: function () {
              return $window.localStorage.getItem('username');
          },
          saveMentor: function (username) {
              $window.localStorage.setItem('username', username);
              $window.localStorage.setItem('mentor', username);
          }
      };
  });