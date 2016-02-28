//= wrapped

angular
    .module("grails.angular.jwt.books")
    .factory("Book", Book);

function Book(DomainServiceFactory) {
    return DomainServiceFactory("book/:id");
}
