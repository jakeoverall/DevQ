var devQ = angular.module('devQ');

devQ.controller('mentorCtrl', function ($scope, $state, authService) {

    $scope.reg = true;
    $scope.status = 'Register';

    $scope.showReg = function () {
        if ($scope.reg) {
            $scope.status = 'Log In';
        } else {
            $scope.status = 'Register';
        }
        $scope.reg = !$scope.reg;
    };

    $scope.logMeIn = function () {
        authService.logIn($scope.email, $scope.password).then(function () {
            $state.go('secure.cohort');
        });
    };

    $scope.register = function () {
        authService.register($scope.registerEmail, $scope.registerPassword, $scope.registerName);
        $scope.email = $scope.registerEmail;
        $scope.registerName = '';
        $scope.registerEmail = '';
        $scope.registerPassword = '';
        $scope.showReg();
    };
});