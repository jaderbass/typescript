/**
 * Stadtbibliothek – wiederverwendbare Hilfsfunktionen
 *
 * Musterlösung
 */
export function first(items) {
    return items[0];
}
export function last(items) {
    return items[items.length - 1];
}
export function mapItems(items, transform) {
    return items.map(transform);
}
const bookTitles = ["Clean Code", "TypeScript kompakt"];
console.log(first(bookTitles) === "Clean Code");
console.log(last(bookTitles) === "TypeScript kompakt");
console.log(mapItems(bookTitles, title => title.length).join(",") === "10,18");
