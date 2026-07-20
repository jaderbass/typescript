/**
 * Stadtbibliothek – optionale und fehlende Werte
 *
 * Musterlösung
 */
const books = [
    { isbn: "111", title: "TypeScript kompakt" },
    { isbn: "222", title: "JavaScript verstehen" },
];
export function findBookTitle(isbn) {
    return books.find(book => book.isbn === isbn)?.title;
}
export function getReturnDateLabel(returnedAt) {
    if (returnedAt === null) {
        return "Noch nicht zurückgegeben";
    }
    return `Rückgabe: ${returnedAt.toLocaleDateString("de-DE")}`;
}
export function printLoanMessage(message) {
    console.log(message);
}
console.log(findBookTitle("222") === "JavaScript verstehen");
console.log(findBookTitle("999") === undefined);
console.log(getReturnDateLabel(null) === "Noch nicht zurückgegeben");
