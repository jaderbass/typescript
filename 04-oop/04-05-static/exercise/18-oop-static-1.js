/**
 * Stadtbibliothek OOP – statische Eigenschaften und Methoden
 *
 * Aufgaben:
 * Erstelle die Klasse `CatalogNumberFactory`.
 *
 * Anforderungen:
 * - privater statischer Zähler, Startwert 1
 * - `next(prefix = "MED")` erzeugt "MED-1", "MED-2" usw.
 * - `reset()` setzt den Zähler wieder auf 1
 * - es sollen keine Instanzen der Klasse benötigt werden
 */
export class CatalogNumberFactory {
    static next(prefix = "MED") {
        // TODO
        return "";
    }
    static reset() {
        // TODO
    }
}
CatalogNumberFactory.counter = 1;
CatalogNumberFactory.reset();
console.log(CatalogNumberFactory.next("BOOK") === "BOOK-1");
console.log(CatalogNumberFactory.next("BOOK") === "BOOK-2");
