'use strict';

angular.module('devQ')
  .service('firebaseService', function (environmentService, $firebase) {

      var firebaseUrl = environmentService.getEnv().firebase;

      return {
          getCohorts: function () {
              return $firebase(new Firebase(firebaseUrl + '/db/cohorts'));
          },
          getQueue: function (queueId) {
              return $firebase(new Firebase(firebaseUrl + '/db/cohorts/' + queueId + '/questions'));
          },
          getMentors: function () {
              return $firebase(new Firebase(firebaseUrl + '/users'));
          },
          getMentor: function (id) {
              return $firebase(new Firebase(firebaseUrl + '/users/' + id)).$asObject().$loaded().then(function (res) {
                  return res;
              });
          },
          currentStudent: function (id) {
              return $firebase(new Firebase(firebaseUrl + '/students/' + id)).$asObject().$loaded().then(function (res) {
                  return res;
              });
          },
          getStudents: function () {
              return $firebase(new Firebase(firebaseUrl + '/students'));
          },
          assignStudent: function (mentorId) {
              return $firebase(new Firebase(firebaseUrl + '/users/' + mentorId + '/students')).$asArray().$loaded().then(function (res) {
                  return res;
              });
          },
          getMentees: function (mentorId) {
              return $firebase(new Firebase(firebaseUrl + '/users/' + mentorId + '/students'));
          },
          getStudentAssignments: function(studentId) {
              return $firebase(new Firebase(firebaseUrl + '/students/' + studentId + '/assignments'));
          },
          getCohortAssignments: function(cohortId) {
              return $firebase(new Firebase(firebaseUrl + '/db/cohorts/' + cohortId + '/assignments')).$asArray().$loaded().then(function(res) {
                  return res;
              });
          },
          getAssignmentsList: function() {
              return $firebase(new Firebase(firebaseUrl + '/db/assignments'));
          }
      };
  });
