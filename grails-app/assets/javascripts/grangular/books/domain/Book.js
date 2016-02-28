//= wrapped

angular
    .module("grangular.books")
    .factory("Book", Book);

function Book($resource) {
    var Book = $resource(
        "book/:id",
        null,
        {"update": {method: "PUT"}, "list": {method: "GET", isArray: true}}
    );
    return Book;
}
