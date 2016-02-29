//= wrapped
//= require /angular/angular
//= require /angular/angular-resource
//= require /angular-ui-router/angular-ui-router
//= require /lodash/lodash
//= require /restangular/restangular
//= require /a0-angular-storage/angular-storage
//= require /angular-jwt/angular-jwt
//= require /angular/ui-bootstrap-tpls
//= require /ng-table/ng-table

//= require core/index
//= require grails/index
//= require home/index
//= require login/index
//= require books/index

angular.module('grangular', [
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'ngTable',
    'angular-storage',
    'angular-jwt',
    'restangular',

    'grangular.core',
    'grangular.grails',
    'grangular.home',
    'grangular.login',
    'grangular.books'

])
    .controller(function AppCtrl ( $scope, $location ) {
        console.log('app')

    });
