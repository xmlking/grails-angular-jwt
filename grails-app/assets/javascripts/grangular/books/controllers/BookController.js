//= wrapped

angular
    .module("grangular.books")
    .controller("BookListController", BookListController)
    .controller("BookCreateEditController", BookCreateEditController)
    .controller("BookShowController", BookShowController);

function BookListController($scope, BookService, books, BOOK_SEARCH_PARAMS, BOOK_SEARCH_CONFIG) {
    var self = this;
    this.books = books;
    this.seatchParams = BOOK_SEARCH_PARAMS;

    console.log('this.seatchParams', this.seatchParams);

    $scope.$watchCollection(function () {
        return self.seatchParams.filter
    }, function () {
        self.reload();
    });

    this.load = function () {
        BookService.list().then(function (items) {
            self.books = items;
        });
    };

    this.reload = function () {
        self.seatchParams.page = 1;
        self.load();
    }
}

function BookCreateEditController(BookService, book) {

}

function BookShowController(BookService, book) {
    this.book = book;
}

