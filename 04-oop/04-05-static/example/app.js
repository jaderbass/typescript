class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.id = Product.nextId;
        Product.nextId++;
    }
    static calculateGrossPrice(netPrice, vatRate = 0.19) {
        return netPrice * (1 + vatRate);
    }
}
Product.nextId = 1001;
const woodenMap = new Product("Weltkarte aus Holz", 89.9);
const globe = new Product("Globus Retro", 49.5);
console.log(woodenMap);
console.log(globe);
const grossPrice = Product.calculateGrossPrice(globe.price);
console.log(`Bruttopreis von ${globe.name}: ${grossPrice.toFixed(2)}`);
export {};
