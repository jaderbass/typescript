// Produktdaten
const productName: string = "Weltkarte aus Holz";
const price: number = 89.9;
const category: string = "Dekoration";
const vatRate: number = 0.19;
const isActive: boolean = true;
const stock: number = 12;

// Berechnungen
const vatAmount: number = price * vatRate;
const grossPrice: number = price + vatAmount;
const totalStockValue: number = grossPrice * stock;

// Textausgabe
const availability: string = isActive && stock > 0
  ? "verfügbar"
  : "nicht verfügbar";

const productSummery: string = `
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
