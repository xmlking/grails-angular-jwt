//= wrapped
//= require /angular/angular
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree templates

angular.module("grangular.core", [])
    .config(function config($urlRouterProvider, jwtInterceptorProvider, $httpProvider) {

        $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
        
        $urlRouterProvider.otherwise('/home');

        jwtInterceptorProvider.tokenGetter = function(UserService) {
            return UserService.getToken();
        };

        $httpProvider.interceptors.push('jwtInterceptor');
        $httpProvider.interceptors.push('AuthInterceptor')
    })
    .run(function run($rootScope, $state, store, jwtHelper) {
            $rootScope.$on('$stateChangeStart', function(event, toState) {
                if (toState.requiresLogin) {
                    if (!store.get('token') || jwtHelper.isTokenExpired(store.get('token'))) {
                        event.preventDefault();
                        $state.go('login', {redirect: toState.name});
                    }
                }
                if (store.get('token') && !jwtHelper.isTokenExpired(store.get('token'))
                    && toState.name === 'login') {
                    event.preventDefault();
                    $state.go('home')
                }
            });

            $rootScope.$on('$stateChangeSuccess', function(event, toState) {
                if (toState) {
                    $rootScope.pageTitle = angular.isDefined( toState.pageTitle ) ? toState.pageTitle : toState.name  ;
                }
            });
        }
    );


