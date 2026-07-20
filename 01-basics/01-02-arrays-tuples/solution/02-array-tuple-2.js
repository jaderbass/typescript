/**
 * Stadtbibliothek – Regalpositionen
 *
 * Musterlösung
 */
export function formatShelfPosition(position) {
    return `Regal ${position[0]}, Fach ${position[1]}`;
}
export function moveBook(position, shelfChange, compartmentChange) {
    return [position[0] + shelfChange, position[1] + compartmentChange];
}
console.log(formatShelfPosition([3, 7]) === "Regal 3, Fach 7");
console.log(moveBook([3, 7], 1, -2).join(",") === "4,5");
