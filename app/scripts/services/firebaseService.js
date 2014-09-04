'use strict';

angular.module('devQ')
  .service('firebaseService', function (environmentService, $firebase) {

      var firebaseUrl = environmentService.getEnv().firebase;

      return {
          getCohorts: function() {
              return $firebase(new Firebase(firebaseUrl + '/cohorts'));
          },
          getQueue: function (queueId) {
              return $firebase(new Firebase(firebaseUrl + '/cohorts/' + queueId));
          },
          getMentors: function () {
              return $firebase(new Firebase(firebaseUrl + '/users'));
          },
          getMentor: function (id) {
              return $firebase(new Firebase(firebaseUrl + '/users/' + id));
          }
      };
  });
