import grails.angular.jwt.auth.*
import grails.angular.jwt.Book

class BootStrap {

    def init = { servletContext ->

        def userRole = new Role('ROLE_USER').save(failOnError: true)
        def adminRole = new Role('ROLE_ADMIN').save(failOnError: true)
        def superRole = new Role('ROLE_SWITCH_USER').save(failOnError: true)


        def user = new User('user', 'user').save(failOnError: true)
        def admin = new User('admin', 'admin').save(failOnError: true)
        def superUser = new User('super', 'super').save(failOnError: true)

        UserRole.create user, userRole, true
        UserRole.create admin, adminRole, true
        UserRole.create superUser, adminRole, true
        UserRole.create superUser, superRole, true

        new Book(title: 'Book1', ISBN: 'BOOK1', releaseDate: new Date(), price: 35.45).save(failOnError: true)
        new Book(title: 'Book2', ISBN: 'BOOK2', releaseDate: new Date(), price: 24.99).save(failOnError: true)
    }
    def destroy = {
    }
}
