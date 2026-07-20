/**
 * Stadtbibliothek – einfache Titelliste
 *
 * Musterlösung
 */
export function addBookTitle(titles, newTitle) {
    return [...titles, newTitle];
}
export function removeBookTitle(titles, titleToRemove) {
    return titles.filter(title => title !== titleToRemove);
}
export function uniqueSortedTitles(titles) {
    return [...new Set(titles)].sort();
}
const titles = ["TypeScript", "Clean Code", "TypeScript"];
console.log(addBookTitle(titles, "JavaScript").length === 4);
console.log(titles.length === 3);
console.log(removeBookTitle(titles, "TypeScript").join(",") === "Clean Code");
console.log(uniqueSortedTitles(titles).join(",") === "Clean Code,TypeScript");
