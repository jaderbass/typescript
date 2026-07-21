// Intersection Types
// Mehrere Typbausteine miteinander kombinieren

// Unabhängige Eigenschaften werden für einen bestimmten Anwendungsfall
// vorübergehend zu einem neuen Typ zusammengefasst.

type ProductData = {
  id: number;
  name: string;
  price: number;
};

type StockData = {
  stock: number;
  warehouse: string;
};

type SalesData = {
  unitsSold: number;
  revenue: number;
};

type ProductInventory = ProductData & StockData;

type ProductReport = ProductData & StockData & SalesData;

const inventoryItem: ProductInventory = {
  id: 1001,
  name: "Weltkarte aus Holz",
  price: 89.9,
  stock: 12,
  warehouse: "Erfurt",
}

const reportItem: ProductReport = {
  id: 1001,
  name: "Weltkarte aus Holz",
  price: 89.9,
  stock: 12,
  warehouse: "Erfurt",
  unitsSold: 48,
  revenue: 4315.2,
};

/**
 * Gibt den Lagerbestand aus
 */
function printInventory(product: ProductInventory): void {
  console.log(`${product.name}: ${product.stock} Stück im Lager ${product.warehouse}`);
}

/** 
 * Gibt einen kombiierten Lager- und Verkaufsbericht aus.
 */
function printProductReport(product: ProductReport): void {
  console.log(`
    Produkt: ${product.name}  
    Preis: ${product.price.toFixed(2)} €  
    Lagerbestand: ${product.stock}
    Lagerort: ${product.warehouse}
    Verkaufte Einheiten: ${product.unitsSold}
    Umsatz: ${product.revenue.toFixed(2)} €
  `);
}

printInventory(inventoryItem);
printProductReport(reportItem);