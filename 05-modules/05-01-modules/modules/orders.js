/**
 * Bestellmodul
 */
import { formatCurrency } from "./utils.js";
// Berechnet den Gesamtpreis einer Bestellung
export function calculateOrderTotal(order) {
    return order.product.price * order.quantity;
}
// Gibt eine Bestellübersicht aus.
export function printOrder(order) {
    const total = calculateOrderTotal(order);
    console.log(`
    Bestellung: ${order.orderNumber}
    Produkt: ${order.product.name}
    Menge: ${order.quantity}
    Gesamtpreis: ${formatCurrency(total)}
  `);
}
