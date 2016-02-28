package grangular

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view: 'index')
        "/api/books"(resources:'book')
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}