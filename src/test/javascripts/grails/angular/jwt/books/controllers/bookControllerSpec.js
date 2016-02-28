describe("grails.angular.jwt module", function() {
    var scope;

    beforeEach(angular.mock.module("grails.angular.jwt", function() {
    }));

    beforeEach(angular.mock.inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    describe("BookController", function() {

        var ctrl;

        beforeEach(angular.mock.inject(function($controller) {
            ctrl = $controller("BookController", {});
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
