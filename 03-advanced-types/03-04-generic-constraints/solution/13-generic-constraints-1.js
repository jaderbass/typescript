/**
 * Stadtbibliothek – Datensätze sicher durchsuchen
 *
 * Musterlösung
 */
export function findById(items, id) {
    return items.find(item => item.id === id);
}
export function pluck(obj, key) {
    return obj[key];
}
const catalog = [
    { id: "b-1", title: "Clean Code" },
    { id: "b-2", title: "TypeScript kompakt" },
];
console.log(findById(catalog, "b-2")?.title === "TypeScript kompakt");
console.log(pluck(catalog[0], "title") === "Clean Code");
// pluck(catalog[0], "author"); // TypeScript-Fehler wie gewünscht
