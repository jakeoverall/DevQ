'use strict';

var devQ = angular.module('devQ');

devQ.controller('studentAssignmentsCtrl', ['$scope', 'studentAssignmentsRef', 'cohortAssignmentsRef', function ($scope, studentAssignmentsRef, cohortAssignmentsRef) {

    $scope.assignments = cohortAssignmentsRef;

    $scope.studentAssignments = studentAssignmentsRef.$asArray();

    $scope.submitAssignment = function (assignment) {
        assignment.submittedAt = new Date().toISOString();
        assignment.assignmentId = assignment.$id;
        $scope.studentAssignments.$add(assignment);
    };
    $scope.saveAssignment = function(assignment){
    	$scope.studentAssignments.$save(assignment);	
    }

    var checkSubmitted = function(){
    	for (var i = 0; i < $scope.studentAssignments.length; i++) {
    		for(var j = 0; $scope.assignments.length; j++){
    			if($scope.assignments[j].$id === $scope.studentAssignments[i].assignmentId){
    				$scope.assignments[i].isSubmitted = true;
    				break;
    			}
    		};
    	};
    };

    $scope.removeSubmitted = function(){
    	checkSubmitted();
    }

}]);