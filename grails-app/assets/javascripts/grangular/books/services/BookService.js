//= wrapped

const BOOK_SEARCH_CONFIG =
{
    BASE_API_URL: 'http://localhost:8080/api',
    pageSize: 3//33
};

const BOOK_SEARCH_PARAMS =
{
    pageSize: BOOK_SEARCH_CONFIG.pageSize,
    page: 1,
    filter: {},
    sort:{},
    includes:'id,title,ISBN,price,releaseDate'
};

angular
    .module("grangular.books")
    .constant('BOOK_SEARCH_CONFIG', BOOK_SEARCH_CONFIG)
    .constant('BOOK_SEARCH_PARAMS', BOOK_SEARCH_PARAMS)
    .factory('BookRestangular',BookRestangular)
    .service("BookService", BookService);



function BookRestangular(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
        RestangularConfigurer.setBaseUrl('http://localhost:8080/api');
        RestangularConfigurer.addResponseInterceptor(function (data, operation, what, url, response, deferred) {
            var extractedData = data;
            if (response.headers('Content-Range')) {
                var totalCount = response.headers('Content-Range').split('/')[1];
                extractedData.totalCount = parseInt(totalCount);
            }
            return extractedData;
        });
    });
}

function BookService(BookRestangular, $state, BOOK_SEARCH_PARAMS) {

    this.list = function(params) {
        params = params || BOOK_SEARCH_PARAMS;
        var copy = Object.assign({}, params);
        delete copy.filter;
        delete copy.sort;

        if (params.filter) {
            angular.forEach(params.filter, function (value, key) {
                if(value) {
                    copy['filter.' + key ] = value;
                }
            });
        }

        if (params.sort && params.sort.sort) {
            copy.sort = params.sort.sort;
            copy.order = (params.sort.order == 'asc') ? 'desc' : 'asc';
        }
        console.log('xxxx',copy);
        return BookRestangular.all('books').getList(copy);
    };

    this.get = function(id) {
        return BookRestangular.one('books', id).get().then( function (book) {
            return book;
        });
    };

    this.create = function() {
        return BookRestangular.one('books','create').get().then( function (book) {
            book.fromServer = false;
            return book;
        });
    };

    this.delete = function(id) {
        return BookRestangularr.one('books', id).delete();
    };

    this.save = function(data) {
        return data.save();
    };

    this.update = function(data) {
        return data.update();
    };

    this.getResourceName = function() {
        return 'Book';
    };
}