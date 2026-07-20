/**
 * Stadtbibliothek OOP – Bücher komfortabel erzeugen
 *
 * Musterlösung
 */
export class LibraryBook {
    constructor(id, title, author, available = true) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.available = available;
    }
    getLabel() {
        return `${this.title} von ${this.author}`;
    }
}
const cleanCode = new LibraryBook("b-1", "Clean Code", "Robert C. Martin");
const unavailableBook = new LibraryBook("b-2", "1984", "George Orwell", false);
console.log(cleanCode.available === true);
console.log(unavailableBook.available === false);
