// Einheitliche Strukturen für Produkte und Kunden

// TypeAlis vs. Interface
// TypeAlias ist ein fixer Typ
// Interface ist erweiterbar

interface ProductInterface {
  id: number;
  name: string;
  price: number;
  stock: number;
  isActive: boolean;
}

interface CustomerInterface {
  customerNumber: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface OrderInterface {
  orderNumber: string;
  shopCustomer: CustomerInterface;
  shopProduct: ProductInterface;
  quantity: number;
}

const shopProduct: ProductInterface = {
  id: 1001,
  name: "Weltkarte aus Holz",
  price: 89.9,
  stock: 12,
  isActive: true,
}

const shopCustomer: CustomerInterface = {
  customerNumber: "K-100",
  firstName: "Anna",
  lastName: "Müller",
  email: "anna.mueller@example.org",
}

const order: OrderInterface = {
  orderNumber: "GS-2026-001",
  shopCustomer,
  shopProduct,
  quantity: 2,
}

/**
 * Berechnet den Gesamtpreis der Bestellung
 */
function calculateOrderTotal(order: OrderInterface): number {
  return order.shopProduct.price * order.quantity;
}

/**
 * Gibt eine Bestellübersicht aus
 */
function printOrder(order: OrderInterface): void {
  const total: number = calculateOrderTotal(order);

  console.log(`
    Bestellung: ${order.orderNumber}  
    Kunde: ${order.shopCustomer.firstName} ${order.shopCustomer.lastName}
    Produkt: ${order.shopProduct.name}
    Menge: ${order.quantity}
    Gesamtpreis: ${total.toFixed(2)} €
  `);
}

printOrder(order);