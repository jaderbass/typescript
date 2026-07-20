/**
 * Stadtbibliothek – Module
 *
 * Musterlösung
 */
export function borrowBook(book, member) {
    if (!member.active) {
        throw new Error("Mitglied ist nicht aktiv");
    }
    if (!book.available) {
        throw new Error("Buch ist nicht verfügbar");
    }
    return { ...book, available: false };
}
