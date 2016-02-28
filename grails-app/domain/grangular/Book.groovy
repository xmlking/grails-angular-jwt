package grangular

class Book {
    String title
    Date releaseDate
    String ISBN
    Double price
    static constraints = {
        releaseDate(nullable: true)
        ISBN(nullable: true, blank: true)
        price(nullable: true)
    }
}