/**
 * Kapitel 4.3
 * Public, Protected und Private
 *
 * GeoShop – Den Zugriff auf Produktdaten kontrollieren
 */

class Product {
  public constructor(
    public id: number,
    public name: string,
    protected purchasePrice: number,
    private stock: number
  ) { }

  public getStock(): number {
    return this.stock;
  }

  public reduceStock(quantity: number): void {
    if (quantity <= 0) {
      return;
    }

    if (quantity > this.stock) {
      console.log("Nicht genügend Bestand vorhanden.");
      return;
    }

    this.stock -= quantity;
  }

  protected calculateMargin(salesPrice: number): number {
    return salesPrice - this.purchasePrice;
  }
}

class SaleProduct extends Product {
  public printMargin(salesPrice: number): void {
    const margin = this.calculateMargin(salesPrice);

    console.log(
      `Marge für ${this.name}: ${margin.toFixed(2)} €`
    );
  }
}

const product = new SaleProduct(
  1001,
  "Weltkarte aus Holz",
  52.5,
  12
);

console.log("Lagerbestand:", product.getStock());

product.reduceStock(2);

console.log("Neuer Lagerbestand:", product.getStock());

product.printMargin(89.9);
