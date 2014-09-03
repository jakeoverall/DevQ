var devQ = angular.module('devQ', ['firebase', 'ui.router', 'restangular']);


//Routes
devQ.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/cohort');

    $stateProvider
        .state('cohort', {
            url: '/cohort',
            templateUrl: '/app/views/cohort.html',
            controller: 'cohortCtrl',
            resolve: {
                cohortsRef: function(firebaseService) {
                    firebaseService.getCohorts();
                }
            }
        })
        .state('mentor', {
            url: '/mentor',
            templateUrl: '/app/views/mentor.html',
            controller: 'mentorCtrl'
        })
        .state('queue', {
            url: '/queue',
            templateUrl: '/app/views/queue.html',
            controller: 'queueCtrl',
            resolve: {
                queueRef: function(firebaseService) {
                    return firebaseService.getQueue();
                }
            }
        })
        .state('secure', {
            abstract: true,
            template: '<div ui-view></div>',
            controller: 'secureCtrl',
            resolve: {
                username: function(authService) {
                    return authService.getUser();
                }
            }
        })
        .state('secure.dashboard', {
            url: '/dashboard',
            templateUrl: '/app/views/dashboard.html',
        });
    //.state('secure.queue', {
    //    url: '/queue',
    //    templateUrl: '/app/views/queue.html',
    //    controller: 'queueCtrl',
    //    resolve: {
    //        queueRef: function (firebaseService) {
    //            return firebaseService.getQueue();
    //        }
    //    }
    //});
}]);