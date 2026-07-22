// Verbindliche Anforderungen an Klassen festlegen

interface Sellable {
  name: string;
  price: number;

  getDisplayPrice(): string;
}

interface Shippable {
  weightInGrams: number;

  getShippingCost(): number;
}

class PhysicalProduct implements Sellable, Shippable {
  public constructor(
    public name: string,
    public price: number,
    public weightInGrams: number
  ) { }

  public getDisplayPrice(): string {
    return `${this.price.toFixed(2)} €`
  }

  public getShippingCost(): number {
    if (this.weightInGrams <= 1000) {
      return 4.9;
    }

    return 7.9;
  }
}

const product = new PhysicalProduct(
  "Weltkarte aus Holz",
  89.9,
  2400
);

console.log(`${product.name}: ${product.getDisplayPrice()}`);
console.log(`Versandkosten: ${product.getShippingCost().toFixed(2)} €`);
