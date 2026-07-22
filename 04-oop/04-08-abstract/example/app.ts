// Gemeinsame Grundlagen für unterschiedliche Produkte

abstract class Product {
  public constructor(
    public id: number,
    public name: string,
    public price: number
  ) { }

  public getDisplayPrice(): string {
    return `${this.price.toFixed(2)} €`;
  }

  public abstract getDeliveryInfo(): string;
}

class PhysicalProduct extends Product {
  public constructor(
    id: number,
    name: string,
    price: number,
    public weightInGrams: number
  ) {
    super(id, name, price);
  }

  public getDeliveryInfo(): string {
    return `Versandgewicht: ${this.weightInGrams} g`;
  }
}

class DigitalProduct extends Product {
  public constructor(
    id: number,
    name: string,
    price: number,
    public downloadUrl: string
  ) {
    super(id, name, price);
  }

  public getDeliveryInfo(): string {
    return `Download: ${this.downloadUrl}`;
  }
}

const products: Product[] = [
  new PhysicalProduct(
    1001,
    "Weltkarte aus Holz",
    89.9,
    2400
  ),
  new DigitalProduct(
    2001,
    "Reiseführer Europa",
    14.9,
    "/downloads/europa.pdf"
  ),
];

products.forEach((product: Product): void => {
  console.log(`
${product.name}
Preis: ${product.getDisplayPrice()}
${product.getDeliveryInfo()}   
  `);
});