// Unvollständige und fehlende Werte behandeln:
// Any, Void, Null und Undefined

// any: TypeScript prüft den Wert nicht auf Datentyp
let importedValue: any = "89.90";

// Der Wert kann ohne Prüfung überschrieben werden, daher
// ! möglichst vermeiden!!!
importedValue = 89.9;
importedValue = true;

// Void: eine Funktion gibt  keinen verwendbaren Wert zurück.
function showProductMessages(message: string): void {
  console.log(`[GeoShop] ${message}`);
}

console.log(showProductMessages("Produktdaten wurden geladen"));

// null: Ein Wert wurde bewusst nicht vergeben
let selectedProductId: number | null = null;

console.log("Ausgewählte Produkt-ID:", selectedProductId);

selectedProductId = 1001;

console.log("Neue Produkt-ID:", selectedProductId);

// undefined: Ein Wert wurde noch nicht zugewiesen
let discountCode: string | undefined;

console.log("Aktiver Rabattcode:", discountCode);

discountCode = "ERFURT26";

console.log("Aktiver Rabattcode:", discountCode);

// Optionaler Funktionsparameter erzeugt string | undefined
function calculateDiscount(price: number, code?: string) {
  if (code === "ERFURT26") {
    return price * 0.9;
  }

  return price;
}

const regularPrice: number = calculateDiscount(89.9);
const reducedPrice: number = calculateDiscount(89.9, "ERFURT26");

console.log(`Normalpreis: ${regularPrice.toFixed(2)} €`);
console.log(`Rabattpreis: ${reducedPrice.toFixed(2)} €`);
