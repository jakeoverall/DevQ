var devQ = angular.module('devQ', ['ui.bootstrap', 'firebase', 'ui.router', 'restangular']);


//Routes
devQ.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: '/app/views/login.html'
        })
        .state('secure', {
            abstract: true,
            template: '<div ui-view></div>',
            resolve: {
                username: function (environmentService) {
                    return environmentService.getUsername();
                }
            }
        })
        .state('secure.queue', {
            url: '/queue',
            templateUrl: '/app/views/queue.html',
            resolve: {
                queueRef: function(firebaseService) {
                    firebaseService.getQueue();
                }
            }
        });
}]);