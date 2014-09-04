'use strict';

angular.module('devQ')
  .service('environmentService', function ($window) {
      return {
          getEnv: function () {
              return $window.env;
          }
      };
  });