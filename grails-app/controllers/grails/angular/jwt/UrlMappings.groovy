package grails.angular.jwt

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view: 'index')
        "/api/books"(resources:'book')
        "500"(view: '/application/serverError')
        "404"(view: '/application/notFound')
    }
}