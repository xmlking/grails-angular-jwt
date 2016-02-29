//= wrapped

angular
    .module("grangular.login")
    .controller("LoginController", LoginController);

function LoginController($scope, UserService, $http, store, $stateParams, $state) {

    this.user = {};
    var self  = this;
    this.login = function(user) {
        UserService.login(user)
            .then(function(response) {
                if ($stateParams.redirect) {
                    $state.go($stateParams.redirect)
                } else {
                    $state.go('home')
                }
            });
    }

}