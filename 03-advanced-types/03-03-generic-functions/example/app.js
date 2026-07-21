// Generic Functions - Wiederverwendbare Funktionen für verschiedenen Datentypen
const products = [
    {
        id: 1001,
        name: "Weltkarte aus Holz",
        price: 89.9,
    },
    {
        id: 1002,
        name: "Globus Retro",
        price: 49.5,
    }
];
const customers = [
    {
        customerNumber: "K-100",
        firstName: "Anna",
        lastName: "Bolika",
    },
    {
        customerNumber: "K-101",
        firstName: "Thomas",
        lastName: "Schmidt",
    },
];
// Gib einen Typ rein und ich versichere, dass der selbe Typ raus kommt.
/**
 * Gibt das erste Element eines Arrays zurück
 */
function getFirstItem(items) {
    return items[0];
}
const firstProduct = getFirstItem(products);
const firstCustomer = getFirstItem(customers);
console.log("Erstes Produkt:", firstProduct);
console.log("Erster Kunde:", firstCustomer);
/**
 * Erzeugt ein neues Array mit genau einem Wert
 */
function createSingleItemList(item) {
    return [item];
}
const productList = createSingleItemList({
    id: 1003,
    name: "Kompass Adventure",
    price: 19.9,
});
const categoryList = createSingleItemList("Outdoor");
console.log(productList);
console.log(categoryList);
/**
 * Liefert einen Wert zusammen mit einer Statusmeldung aus
 */
function createResult(data, message) {
    return {
        data,
        message,
    };
}
const productResult = createResult(products[0], "Produkt wurde geladen.");
console.log(productResult);
export {};
