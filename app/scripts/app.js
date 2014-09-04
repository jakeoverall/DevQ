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
                cohortsRef: function (firebaseService) {
                    return firebaseService.getCohorts();
                }
            }
        })
        .state('mentor', {
            url: '/mentor',
            templateUrl: '/app/views/mentor.html',
            controller: 'mentorCtrl'
        })
        .state('cohort.queue', {
            url: '/cohort/queueId:',
            templateUrl: '/app/views/queue.html',
            controller: 'queueCtrl',
            resolve: {
                queueRef: function (firebaseService, $stateParams) {
                    return firebaseService.getQueue($stateParams.queueId);
                }
            }            
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
        .state('secure.dashboard', {
            url: '/dashboard',
            templateUrl: '/app/views/dashboard.html',
            controller: 'dashboardCtrl',
            resolve: {
                cohortsRef: function (firebaseService) {
                    return firebaseService.getCohorts();
                },
                mentorsRef: function (firebaseService) {
                    return firebaseService.getMentors();
                }
            }
        })
        .state('secure.cohort', {
            url: '/cohort/:queueId',
            templateUrl: '/app/views/cohort.html',
            controller: 'queueCtrl',
            resolve: {
                queueRef: function (firebaseService, $stateParams) {
                    return firebaseService.getqueue($stateParams.queueId);
                },
                mentorsRef: function (firebaseService) {
                    return firebaseService.mentorsRef();
                }
            }
        });
}]);