'use strict';

angular.module('devQ')
  .controller('secureMentorCtrl', function ($scope, menteesRef, announcementsRef) {    
      $scope.mentees = menteesRef.$asArray();
      $scope.announcements = announcementsRef.$asArray();
  });
