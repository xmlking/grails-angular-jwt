//= wrapped
//= require /angular/angular
//= require /grails/angular/jwt/core/grails.angular.jwt.core
//= require /grails/angular/jwt/index/grails.angular.jwt.index

angular.module("grails.angular.jwt", [
    "grails.angular.jwt.core",
    "grails.angular.jwt.books",
    "grails.angular.jwt.index"
]);
