/**
 * Stadtbibliothek OOP – statische Eigenschaften und Methoden
 *
 * Musterlösung
 */
export class CatalogNumberFactory {
    static next(prefix = "MED") {
        return `${prefix}-${this.counter++}`;
    }
    static reset() {
        this.counter = 1;
    }
}
CatalogNumberFactory.counter = 1;
CatalogNumberFactory.reset();
console.log(CatalogNumberFactory.next("BOOK") === "BOOK-1");
console.log(CatalogNumberFactory.next("BOOK") === "BOOK-2");
