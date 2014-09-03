'use strict';

angular.module('devQ')
  .service('firebaseService', function (environmentService, $firebase) {
      var firebaseUrl = environmentService.getEnv().firebase;

      return {
          getQueue: function () {
              return $firebase(new Firebase(firebaseUrl + '/queue'));
          }
      };

  });
