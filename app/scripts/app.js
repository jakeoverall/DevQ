var devQ = angular.module('devQ', ['firebase', 'ui.router', 'restangular', 'angularMoment', 'ui.gravatar', 'dangle']);


//Routes
devQ.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/cohort');

    $stateProvider
        .state('cohort', {
            url: '/cohort',
            templateUrl: '/app/views/student/cohort.html',
            controller: 'cohortCtrl',
            resolve: {
                cohortsRef: function (firebaseService) {
                    return firebaseService.getCohorts();
                }
            }
        })
        .state('mentor', {
            url: '/mentor',
            templateUrl: '/app/views/mentor/mentor.html',
            controller: 'mentorCtrl'

        })
        .state('student', {
            abstract: true,
            url: '/student',
            template: '<div ui-view></div>',
            controller: 'studentCtrl',
            resolve: {
                studentRef: function (authService) {
                    return authService.getStudent();
                },
                mentorsRef: function (firebaseService) {
                    return firebaseService.getMentors();
                }
            }
        })
        .state('student.queue', {
            url: '/cohort/:queueId',
            templateUrl: '/app/views/student/queue.html',
            controller: 'queueCtrl',
            resolve: {
                queueRef: function (firebaseService, $stateParams) {
                    return firebaseService.getQueue($stateParams.queueId);
                }
            }
        })
         .state('secure', {
             abstract: true,
             url: '/secure',
             template: '<div ui-view></div>',
             controller: 'secureCtrl',
             resolve: {
                 mentorRef: function (authService) {
                     return authService.getUser();
                 },
                 cohortsRef: function (firebaseService) {
                     return firebaseService.getCohorts();
                 },
                 mentorsRef: function (firebaseService) {
                     return firebaseService.getMentors();
                 },
                 studentsRef: function (firebaseService) {
                     return firebaseService.getStudents();
                 }
             }
         })
        .state('secure.dashboard', {
            url: '/dashboard',
            templateUrl: '/app/views/mentor/dashboard.html',
            controller: 'dashboardCtrl',
        })
        .state('secure.mentor', {
            abstract: true,
            url: '/mentor/:mentorId',
            template: '<div ui-view></div>',
            controller: 'secureMentorCtrl',
            resolve: {
                menteesRef: function (firebaseService, $stateParams) {
                    return firebaseService.getMentees($stateParams.mentorId);
                }
            }
        })
        .state('secure.mentor.queue', {
            url: '/cohort/:queueId',
            templateUrl: '/app/views/mentor/mentor-queue.html',
            controller: 'queueCtrl',
            resolve: {
                queueRef: function (firebaseService, $stateParams) {
                    return firebaseService.getQueue($stateParams.queueId);
                }
            }
        })
        .state('secure.mentor.studentRoster', {
            url: '/roster',
            templateUrl: '/app/views/mentor/roster.html',
            controller: 'rosterCtrl'
        })
        .state('secure.mentor.mentees', {
            url: '/mentees',
            templateUrl: '/app/views/mentor/mentees.html',
            controller: 'menteesCtrl'
        });
}]);