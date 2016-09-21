(function () {
    'use strict';

    angular
        .module("app", ["ui.router", "ui.bootstrap"])
        .config(['$stateProvider', '$urlRouterProvider', config]);
    // .run(['$rootScope', '$location', '$cookieStore', '$http', run]);

    // config
    function config($stateProvider, $urlRouterProvider) {
        // For any other not proived url, redirect to home
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './views/login.html',
                controller: 'loginCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: './views/login.html',
                controller: 'loginCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: './views/about.html',
                controller: 'aboutCtrl'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: './views/contact.html',
                controller: 'contactCtrl'
            });
    }

    // run
    // function run($rootScope, $location, $cookieStore, $http) {
    //
    // }
})();
