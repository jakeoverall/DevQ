var devQ = angular.module('devQ');

devQ.controller('mentorCtrl', function ($scope, $state, authService) {

    $scope.reg = true;
    $scope.status = 'Register';

    $scope.titles = ['Mentor', 'Instructor'];

    $scope.showReg = function () {
        if ($scope.reg) {
            $('.modal').modal('show');
        } else {
            $scope.status = 'Register';
            $scope.reg = !$scope.reg;
        }
        $scope.error = '';
    };

    $scope.logMeIn = function () {
        $scope.error = '';
        authService.logIn($scope.user).then(function () {
            $state.go('secure.dashboard');
        }, function (error) {
            $scope.error = error.message.slice(20);
        });
    };

    $scope.register = function () {
        authService.register($scope.mentorInfo);
        $scope.mentorInfo = '';
        $scope.showReg();
    }, function (error) {
        $scope.error = error.toString();
    };


    $scope.registerCont = function (initPW) {
        authService.initRegistrantPassword(initPW).then(function (res) {
            if (res.valid) {
                $scope.pinError = '';
                $scope.status = 'Log In';
                $scope.reg = !$scope.reg;
                $('.modal').modal('hide');
            } else {
                $scope.initPassword = '';
                $scope.pinError = 'Incorrect Pin Provided';
            }
        });
    };
});