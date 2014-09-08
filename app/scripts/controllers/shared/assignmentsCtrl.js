'use strict';

var devQ = angular.module('devQ');

devQ.controller('assignmentsCtrl', ['$scope', 'studentRef', function ($scope, studentRef) {
    $scope.student = studentRef;
    


}]);