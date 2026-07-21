// Type Aliases
// Wiederverwendbare Typen für Preise und Produkte
const product = {
    id: 1001,
    name: "Weltkarte aus Holz",
    category: "Dekoration",
    price: {
        net: 89.9,
        vatRate: 0.19,
    },
    stock: 12,
    status: "active",
};
/**
 * Berechnet den Bruttopreis eines Produkts
 * */
function calculateGrossPrice(price) {
    return price.net * (1 + price.vatRate);
}
/**
 * Gibt die wichtigsten Produktinformationen aus
 */
function printProduct(product) {
    const grossPrice = calculateGrossPrice(product.price);
    console.log(`
    Produkt: ${product.name}
    Kategorie: ${product.category}
    Bruttopreis: ${grossPrice.toFixed(2)}
    Lagerbestand: ${product.stock}
    Status: ${product.status}
  `);
}
printProduct(product);
export {};
