'use strict';

angular.module('devQ')
  .service('firebaseService', function (environmentService, $firebase) {

      var firebaseUrl = environmentService.getEnv().firebase;

      return {
          getCohorts: function() {
              return $firebase(new Firebase(firebaseUrl + '/cohorts'));
          },
          setCohort: function(cohort) {
              firebaseUrl = firebaseUrl + '/' + cohort;
          },
          getQueue: function () {
              return $firebase(new Firebase(firebaseUrl + '/queue'));
          },
          getMentor: function (id) {
              return $firebase(new Firebase(firebaseUrl + '/users/' + id));
          }
      };

  });
