// Produktlisten und feste Wertepaare

// einfache Produktlisten
const productNames: string[] = [
  "Weltkarte aus Holz",
  "Globus Retro",
  "Reiseatlas Europa",
  "Kompass Adventure"
];

const prices: number[] = [
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

productNames.forEach((productName: string, index: number): void => {
  const price: number = prices[index];

  console.log(`${index + 1}. ${productName} -- ${price.toFixed(2)} €`);

});

// Tuple: fixe Liste mit nicht variablen Werten

// Tuple: Produktname und Produktnummer
const productReference: [string, number] = [
  "Weltkarte aus Holz",
  1001
];

// Tuple: Lagerort mit Regal und Fach
const storageLocation: [string, number, number] = [
  "Erfurt",
  3,
  12
];

const [referenceName, productNumber] = productReference;
const [warehouse, shelf, compartment] = storageLocation;

console.log(`${referenceName} hat die Produktnummer ${productNumber}`);
console.log(`Lagerort: ${warehouse}, Regal ${shelf}, Fach ${compartment}`);
