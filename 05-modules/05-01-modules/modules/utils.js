/**
 * Hilfsfunktionen-Modul
 */
// Formatiert einen Zahlenwert als Euro-Betrag
export function formatCurrency(value, currency = "€") {
    return `${value.toFixed(2)} ${currency}`;
}
// Formatiert einen Produktnamen für die Ausgabe
export function formatProductName(name) {
    return name.trim().toUpperCase();
}
