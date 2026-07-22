class Product {
  private static nextId: number = 1001;

  public readonly id: number;

  public constructor(
    public name: string,
    public price: number
  ) {
    this.id = Product.nextId;
    Product.nextId++;
  }

  public static calculateGrossPrice(
    netPrice: number,
    vatRate: number = 0.19
  ): number {
    return netPrice * (1 + vatRate);
  }
}

const woodenMap = new Product(
  "Weltkarte aus Holz",
  89.9
);

const globe = new Product(
  "Globus Retro",
  49.5
);

console.log(woodenMap);
console.log(globe);

const grossPrice = Product.calculateGrossPrice(globe.price);

console.log(`Bruttopreis von ${globe.name}: ${grossPrice.toFixed(2)}`);
