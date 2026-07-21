"use strict";
// Bestehende Produktstrukturen erweitern
const woodenMap = {
    id: 1001,
    name: "Weltkarte aus Holz",
    price: 89.9,
    stock: 12,
    weightInGrams: 2400,
    shippingClass: "large",
};
const travelGuide = {
    id: 2001,
    name: "Digitaler Reiseführer Europa",
    price: 14.9,
    stock: 999,
    downloadUrl: "/downloads/reisefuehrer-europa.pdf",
    fileSizeInMb: 18.4,
};
/**
 * Gibt gemeinsame Produktdaten aus
 */
function printBaseProduct(product) {
    console.log(`${product.name} - ${product.price.toFixed(2)} €`);
}
/**
 * Gibt Versandinformationen aus
 */
function printShippingInfo(product) {
    console.log(`Gewicht: ${product.weightInGrams} g,
    Versandklasse: ${product.shippingClass}`);
}
/**
 * Gibt Downloadinformationen aus
 */
function printDownloadInfo(product) {
    console.log(`Download: ${product.downloadUrl},
    Dateigröße: ${product.fileSizeInMb} MB`);
}
printBaseProduct(woodenMap);
printShippingInfo(woodenMap);
printBaseProduct(travelGuide);
printDownloadInfo(travelGuide);
