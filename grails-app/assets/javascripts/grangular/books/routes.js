//= wrapped

angular.module("grangular.books")
    .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('books', {
            url: "/books",
            requiresLogin: true,
            controller: "BookListController as ctrl",
            templateUrl: "/grangular/books/list.html",
            resolve: {
                books: function(BookService) {
                    return BookService.list();
                }
            }
        })
        .state('books.create', {
            url: '/create',
            controller: 'BookCreateEditController as ctrl',
            templateUrl: '/grangular/books/create-edit.html',
            resolve: {
                book: function(BookService) {
                    return BookService.create();
                }
            }
        })
        .state('books.edit', {
            url: '/edit/:id',
            controller: 'BookCreateEditController as ctrl',
            templateUrl: '/grangular/books/create-edit.html',
            resolve: {
                book: function($stateParams, BookService) {
                    return BookService.get($stateParams.id);
                }
            }
        })
        .state('books.show', {
            url: '/show/:id',
            controller: 'BookShowController as ctrl',
            templateUrl: '/grangular/books/show.html',
            resolve: {
                book: function($stateParams, BookService) {
                    return BookService.get($stateParams.id);
                }
            }
        });
    });
