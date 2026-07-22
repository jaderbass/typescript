// Gemeinsame Grundlagen für unterschiedliche Produkte
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getDisplayPrice() {
        return `${this.price.toFixed(2)} €`;
    }
}
class PhysicalProduct extends Product {
    constructor(id, name, price, weightInGrams) {
        super(id, name, price);
        this.weightInGrams = weightInGrams;
    }
    getDeliveryInfo() {
        return `Versandgewicht: ${this.weightInGrams} g`;
    }
}
class DigitalProduct extends Product {
    constructor(id, name, price, downloadUrl) {
        super(id, name, price);
        this.downloadUrl = downloadUrl;
    }
    getDeliveryInfo() {
        return `Download: ${this.downloadUrl}`;
    }
}
const products = [
    new PhysicalProduct(1001, "Weltkarte aus Holz", 89.9, 2400),
    new DigitalProduct(2001, "Reiseführer Europa", 14.9, "/downloads/europa.pdf"),
];
products.forEach((product) => {
    console.log(`
${product.name}
Preis: ${product.getDisplayPrice()}
${product.getDeliveryInfo()}   
  `);
});
export {};
