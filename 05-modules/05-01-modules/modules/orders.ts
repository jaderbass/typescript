/**
 * Bestellmodul
 */

import { type Product } from "../modules/products.js";
import { formatCurrency } from "./utils.js";

export type Order = {
  orderNumber: string;
  product: Product;
  quantity: number;
}

// Berechnet den Gesamtpreis einer Bestellung
export function calculateOrderTotal(order: Order): number {
  return order.product.price * order.quantity;
}

// Gibt eine Bestellübersicht aus.
export function printOrder(order: Order): void {
  const total: number = calculateOrderTotal(order);

  console.log(`
    Bestellung: ${order.orderNumber}
    Produkt: ${order.product.name}
    Menge: ${order.quantity}
    Gesamtpreis: ${formatCurrency(total)}
  `);
}