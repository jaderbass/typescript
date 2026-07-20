/**
 * Stadtbibliothek – verschiedene Medien
 *
 * Musterlösung
 */
export function itemStatus(item) {
    return `${item.title}: ${item.available ? "verfügbar" : "ausgeliehen"}`;
}
export function bookDetails(book) {
    return `${book.title} von ${book.author} (ISBN ${book.isbn})`;
}
