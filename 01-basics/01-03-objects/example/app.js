"use strict";
// Objekte: Produkte als Objektstrukturen darstellen
const product = {
    id: 1001,
    name: "Weltkarte aus Holz",
    category: "Dekoration",
    price: 89.9,
    stock: 12,
    isActive: true,
};
console.log("Produkt:", product);
console.log(`${product.name} kostet ${product.price.toFixed(2)} €`);
product.stock -= 2; // zwei Produkte wurden verkauft
console.log(`Neuer Lagerbestand: ${product.stock}`);
// verschachteltes Objekt
const customerOrder = {
    orderNumber: "GS-2026-001",
    customer: {
        firstName: "Anna",
        lastName: "Müller",
        city: "Erfurt"
    },
    product: {
        name: "Weltkarte aus Holz",
        quantity: 2,
        unitPrice: 89.9,
    },
    isPaid: true,
};
const orderTotal = customerOrder.product.quantity *
    customerOrder.product.unitPrice;
console.log(`
  ${customerOrder.customer.firstName} ${customerOrder.customer.lastName} bestellt 
  ${customerOrder.product.quantity} x 
  ${customerOrder.product.name}.
`);
console.log(`Bestellwert: ${orderTotal.toFixed(2)} €`);
console.log(`Zahlungsstatus: ${customerOrder.isPaid ? "bezahlt" : "offen"}`);
