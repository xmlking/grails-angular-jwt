//= wrapped

angular
    .module("grangular.home")
    .controller("HomeController", HomeController);

function HomeController($scope, store, jwtHelper) {
    var vm = this;

    this.username = store.get('profile') ? store.get('profile').username : undefined;
    this.jwt = store.get('token');
    this.decodedJwt = this.jwt && jwtHelper.decodeToken(this.jwt);
}
