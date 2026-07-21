"use strict";
// Intersection Types
// Mehrere Typbausteine miteinander kombinieren
const inventoryItem = {
    id: 1001,
    name: "Weltkarte aus Holz",
    price: 89.9,
    stock: 12,
    warehouse: "Erfurt",
};
const reportItem = {
    id: 1001,
    name: "Weltkarte aus Holz",
    price: 89.9,
    stock: 12,
    warehouse: "Erfurt",
    unitsSold: 48,
    revenue: 4315.2,
};
/**
 * Gibt den Lagerbestand aus
 */
function printInventory(product) {
    console.log(`${product.name}: ${product.stock} Stück im Lager ${product.warehouse}`);
}
/**
 * Gibt einen kombiierten Lager- und Verkaufsbericht aus.
 */
function printProductReport(product) {
    console.log(`
    Produkt: ${product.name}  
    Preis: ${product.price.toFixed(2)} €  
    Lagerbestand: ${product.stock}
    Lagerort: ${product.warehouse}
    Verkaufte Einheiten: ${product.unitsSold}
    Umsatz: ${product.revenue.toFixed(2)} €
  `);
}
printInventory(inventoryItem);
printProductReport(reportItem);
