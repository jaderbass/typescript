/**
 * Hilfsfunktionen-Modul
 */

// Formatiert einen Zahlenwert als Euro-Betrag
export function formatCurrency(value: number, currency: string = "€"): string {
  return `${value.toFixed(2)} ${currency}`;
}

// Formatiert einen Produktnamen für die Ausgabe
export function formatProductName(name: string): string {
  return name.trim().toUpperCase();
}