//= wrapped

angular.module('grangular.login')
    .config(function($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            params: {
                redirect: null
            },
            pageTitle: 'Login',
            controller: 'LoginController as ctrl',
            templateUrl: '/grangular/login/login.html'
        });
    });