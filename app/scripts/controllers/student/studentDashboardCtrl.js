'use strict';

angular.module('devQ')
  .controller('studentDashboardCtrl', function ($scope, firebaseService, $state) {
      firebaseService.currentStudent($scope.studentUser.id).then(function (student) {
          $scope.student = student;

          if ($scope.student.title !== 'Student') {
              $state.go('mentor');
          };

          $scope.currentStudent = function (question) {
              if (question.submittedBy.email === $scope.student.email) {
                  return true;
              } else {
                  return false;
              }
          };

      });
  });