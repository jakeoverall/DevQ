'use strict';

var devQ = angular.module('devQ');

devQ.directive('studentNav', function () {
    return {
        restrict: 'AE',
        templateUrl: 'app/views/shared/student-nav.html',
        controller: 'studentDashboardCtrl'
    };
});