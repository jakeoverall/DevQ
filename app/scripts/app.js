var devQ = angular.module('devQ', ['firebase', 'ui.router']);


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
                username: function (environmentService) {
                    return environmentService.getUsername();
                }
            }
        })
        .state('secure.queue', {
            url: '/queue',
            templateUrl: '/app/views/queue.html',
            controller: 'queueCtrl',
            resolve: {
                queueRef: function (firebaseService) {
                    firebaseService.getQueue();
                }
            }
        });
}]);