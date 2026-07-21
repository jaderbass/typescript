"use strict";
// Einheitliche Strukturen für Produkte und Kunden
const shopProduct = {
    id: 1001,
    name: "Weltkarte aus Holz",
    price: 89.9,
    stock: 12,
    isActive: true,
};
const shopCustomer = {
    customerNumber: "K-100",
    firstName: "Anna",
    lastName: "Müller",
    email: "anna.mueller@example.org",
};
const order = {
    orderNumber: "GS-2026-001",
    shopCustomer,
    shopProduct,
    quantity: 2,
};
/**
 * Berechnet den Gesamtpreis der Bestellung
 */
function calculateOrderTotal(order) {
    return order.shopProduct.price * order.quantity;
}
/**
 * Gibt eine Bestellübersicht aus
 */
function printOrder(order) {
    const total = calculateOrderTotal(order);
    console.log(`
    Bestellung: ${order.orderNumber}  
    Kunde: ${order.shopCustomer.firstName} ${order.shopCustomer.lastName}
    Produkt: ${order.shopProduct.name}
    Menge: ${order.quantity}
    Gesamtpreis: ${total.toFixed(2)} €
  `);
}
printOrder(order);
