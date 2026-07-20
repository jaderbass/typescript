"use strict";
// Produktdaten
const productName = "Weltkarte aus Holz";
const price = 89.9;
const category = "Dekoration";
const vatRate = 0.19;
const isActive = true;
const stock = 12;
// Berechnungen
const vatAmount = price * vatRate;
const grossPrice = price + vatAmount;
const totalStockValue = grossPrice * stock;
// Textausgabe
const availability = isActive && stock > 0
    ? "verfügbar"
    : "nicht verfügbar";
const productSummery = `
  Produkt: ${productName}
  Kategorie: ${category}
  Nettopreis: ${price.toFixed(2)} €
  Mehrwertsteuer: ${vatAmount.toFixed(2)} €
  Bruttopreis: ${grossPrice.toFixed(2)} €
  Lagerbestand: ${stock} Stück
  Status: ${availability}
  Gesamtwert des Lagerbestands: ${totalStockValue.toFixed(2)} €
`;
console.log(productSummery);
