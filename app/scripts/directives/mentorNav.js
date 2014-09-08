'use strict';

var devQ = angular.module('devQ');

devQ.directive('mentorNav', function() {
	return {
		restrict: 'AE',
		templateUrl: 'app/views/shared/mentor-nav.html',
		controller: 'dashboardCtrl'
	}
});