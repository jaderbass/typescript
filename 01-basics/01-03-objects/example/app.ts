// Objekte: Produkte als Objektstrukturen darstellen

const product: {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  isActive: boolean;
} = {
  id: 1001,
  name: "Weltkarte aus Holz",
  category: "Dekoration",
  price: 89.9,
  stock: 12,
  isActive: true,
}

console.log("Produkt:", product);

console.log(`${product.name} kostet ${product.price.toFixed(2)} €`);

product.stock -= 2; // zwei Produkte wurden verkauft

console.log(`Neuer Lagerbestand: ${product.stock}`);


// verschachteltes Objekt

const customerOrder: {
  orderNumber: string;
  customer: {
    firstName: string;
    lastName: string;
    city: string;
  };
  product: {
    name: string;
    quantity: number;
    unitPrice: number;
  };
  isPaid: boolean;
} = {
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
}

const orderTotal: number =
  customerOrder.product.quantity *
  customerOrder.product.unitPrice;

console.log(`
  ${customerOrder.customer.firstName} ${customerOrder.customer.lastName} bestellt 
  ${customerOrder.product.quantity} x 
  ${customerOrder.product.name}.
`);

console.log(`Bestellwert: ${orderTotal.toFixed(2)} €`);

console.log(`Zahlungsstatus: ${customerOrder.isPaid ? "bezahlt" : "offen"}`);
