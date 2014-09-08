'use strict';

angular.module('devQ')
  .controller('secureMentorCtrl', function ($scope, menteesRef) {    
      $scope.mentees = menteesRef.$asArray();
  });
