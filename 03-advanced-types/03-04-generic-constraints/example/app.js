/**
 * Kapitel 3.4
 * Generic Constraints
 *
 * GeoShop – Generische Funktionen gezielt einschränken
 */
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
    },
];
const customers = [
    {
        id: 1,
        firstName: "Anna",
        lastName: "Müller",
    },
    {
        id: 2,
        firstName: "Thomas",
        lastName: "Schmidt",
    },
];
const categories = [
    {
        id: 10,
        title: "Dekoration",
    },
    {
        id: 20,
        title: "Outdoor",
    },
];
/**
 * T muss mindestens eine Eigenschaft id besitzen.
 */
// extends bedeutet in diesem Fall "Einschränken"
function findById(items, id) {
    return items.find((item) => item.id === id);
}
const foundProduct = findById(products, 1002);
const foundCustomer = findById(customers, 1);
const foundCategory = findById(categories, 20);
console.log("Produkt:", foundProduct);
console.log("Kunde:", foundCustomer);
console.log("Kategorie:", foundCategory);
/**
 * T muss mindestens die Eigenschaften name und price besitzen.
 */
function printPricedItem(item) {
    console.log(`${item.name} kostet ${item.price.toFixed(2)} €.`);
}
printPricedItem({
    id: 1001,
    name: "Weltkarte aus Holz",
    price: 89.9,
    stock: 12,
});
printPricedItem(products[1]);
export {};
