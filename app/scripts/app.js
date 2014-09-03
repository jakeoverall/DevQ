var devQ = angular.module('devQ', ['firebase', 'ui.router', 'restangular']);


//Routes
devQ.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: '/app/views/login.html',
            controller: 'loginCtrl'
        })
        .state('mentor', {
            url: '/mentor',
            templateUrl: '/app/views/mentor.html',
            controller: 'mentorCtrl'
        })
        .state('secure', {
            abstract: true,
            template: '<div ui-view></div>',
            controller: 'secureCtrl',
            resolve: {
                username: function (authService) {
                    return authService.getUser();
                }
            }
        })
        .state('secure.queue', {
            url: '/queue',
            templateUrl: '/app/views/queue.html',
            controller: 'queueCtrl',
            resolve: {
                queueRef: function (firebaseService) {
                    return firebaseService.getQueue();
                }
            }
        });
}]);