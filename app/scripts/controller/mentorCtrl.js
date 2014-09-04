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
        $scope.error = '';
        $scope.reg = !$scope.reg;
    };

    $scope.logMeIn = function () {
        authService.logIn($scope.email, $scope.password).then(function () {
            $state.go('secure.dashboard');
        }, function (error) {
            $scope.error = error.message.slice(20);
        });
    };

    $scope.register = function () {
        authService.register($scope.registerEmail, $scope.registerPassword, $scope.registerName);
        $scope.email = $scope.registerEmail;
        $scope.registerName = '';
        $scope.registerEmail = '';
        $scope.registerPassword = '';
        $scope.showReg();
    }, function (error) {
        $scope.error = error.toString();
    };
});