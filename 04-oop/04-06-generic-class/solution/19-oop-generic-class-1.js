/**
 * Stadtbibliothek OOP – generische Sammlung
 *
 * Musterlösung
 */
export class Repository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return [...this.items];
    }
    find(predicate) {
        return this.items.find(predicate);
    }
    remove(predicate) {
        this.items = this.items.filter(item => !predicate(item));
    }
}
const books = new Repository();
books.add({ id: "b-1", title: "Clean Code" });
console.log(books.find(book => book.id === "b-1")?.title === "Clean Code");
const members = new Repository();
members.add({ memberNumber: 1042, name: "Mia Sommer" });
console.log(members.getAll().length === 1);
