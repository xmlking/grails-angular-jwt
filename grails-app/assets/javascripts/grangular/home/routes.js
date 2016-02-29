//= wrapped

angular.module('grangular.home')
    .config(function($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            pageTitle: 'Welcome to Grails',
            controller: 'HomeController as ctrl',
            templateUrl: '/grangular/home/home.html'
        });
    });