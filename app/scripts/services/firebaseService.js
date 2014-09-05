'use strict';

angular.module('devQ')
  .service('firebaseService', function (environmentService, $firebase) {

      var firebaseUrl = environmentService.getEnv().firebase;

      return {
          getCohorts: function() {
              return $firebase(new Firebase(firebaseUrl + '/cohorts'));
          },
          getQueue: function (queueId) {
              return $firebase(new Firebase(firebaseUrl + '/cohorts/' + queueId + '/questions'));
          },
          getMentors: function () {
              return $firebase(new Firebase(firebaseUrl + '/users'));
          },
          getMentor: function (id) {
              return $firebase(new Firebase(firebaseUrl + '/users/' + id)).$asObject().$loaded().then(function (res) {
                  return res;
              });
          },
          currentStudent: function(id) {
              return $firebase(new Firebase(firebaseUrl + '/students/' + id)).$asObject().$loaded().then(function(res) {
                return res;
              });
          }
      };
  });
