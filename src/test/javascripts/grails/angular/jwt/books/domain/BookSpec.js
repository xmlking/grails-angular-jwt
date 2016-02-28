describe("grails.angular.jwt module", function() {
    var $httpBackend;

    beforeEach(angular.mock.module("grails.angular.jwt", function() {
    }));

    beforeEach(angular.mock.inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe("Book domain", function() {

        var Book;

        beforeEach(angular.mock.inject(function(_Book_) {
            Book = _Book_;
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
