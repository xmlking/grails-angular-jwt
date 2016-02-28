package grangular

import grails.plugin.springsecurity.annotation.Secured
import grails.rest.*
import grails.converters.*
import org.springframework.web.bind.annotation.CrossOrigin

@CrossOrigin(origins = "http://localhost:3000")
@Secured('ROLE_USER')
class BookController extends RestfulController {
    static responseFormats = ['json', 'xml']
    BookController() {
        super(Book)
    }
}
