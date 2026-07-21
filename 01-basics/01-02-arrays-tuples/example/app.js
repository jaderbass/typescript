// Produktlisten und feste Wertepaare
// einfache Produktlisten
const productNames = [
    "Weltkarte aus Holz",
    "Globus Retro",
    "Reiseatlas Europa",
    "Kompass Adventure"
];
const prices = [
    89.9,
    49.5,
    24.95,
    19.9
];
// Array ergänzen
productNames.push("Poster Sternenhimmel");
prices.push(14.9);
// Array ausgeben
console.log("Produkte im GeoShop:");
productNames.forEach((productName, index) => {
    const price = prices[index];
    console.log(`${index + 1}. ${productName} -- ${price.toFixed(2)} €`);
});
// Tuple: fixe Liste mit nicht variablen Werten
// Tuple: Produktname und Produktnummer
const productReference = [
    "Weltkarte aus Holz",
    1001
];
// Tuple: Lagerort mit Regal und Fach
const storageLocation = [
    "Erfurt",
    3,
    12
];
const [referenceName, productNumber] = productReference;
const [warehouse, shelf, compartment] = storageLocation;
console.log(`${referenceName} hat die Produktnummer ${productNumber}`);
console.log(`Lagerort: ${warehouse}, Regal ${shelf}, Fach ${compartment}`);
export {};
