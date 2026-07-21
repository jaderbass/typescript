// Objekte: Produkte als Objektstrukturen darstellen
const productDeko = {
    id: 1001,
    name: "Weltkarte aus Holz",
    category: "Dekoration",
    price: 89.9,
    stock: 12,
    isActive: true,
};
console.log("Produkt:", productDeko);
console.log(`${productDeko.name} kostet ${productDeko.price.toFixed(2)} €`);
productDeko.stock -= 2; // zwei Produkte wurden verkauft
console.log(`Neuer Lagerbestand: ${productDeko.stock}`);
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
export {};
