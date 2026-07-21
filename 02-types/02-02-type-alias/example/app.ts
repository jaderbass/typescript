// Type Aliases
// Wiederverwendbare Typen für Preise und Produkte

type ProductId = number | string;

type ProductStatus = "active" | "inactive" | "sold-out";

type Price = {
  net: number;
  vatRate: number;
}

type ProductType = {
  id: ProductId;
  name: string;
  category: string;
  price: Price;
  stock: number;
  status: ProductStatus;
}

const product: ProductType = {
  id: 1001,
  name: "Weltkarte aus Holz",
  category: "Dekoration",
  price: {
    net: 89.9,
    vatRate: 0.19,
  },
  stock: 12,
  status: "active",
}

/** 
 * Berechnet den Bruttopreis eines Produkts 
 * */
function calculateGrossPrice(price: Price): number {
  return price.net * (1 + price.vatRate);
}

/**
 * Gibt die wichtigsten Produktinformationen aus
 */
function printProduct(product: ProductType): void {
  const grossPrice: number = calculateGrossPrice(product.price);

  console.log(`
    Produkt: ${product.name}
    Kategorie: ${product.category}
    Bruttopreis: ${grossPrice.toFixed(2)}
    Lagerbestand: ${product.stock}
    Status: ${product.status}
  `);

}

printProduct(product);