// Verbindliche Anforderungen an Klassen festlegen
class PhysicalProduct {
    constructor(name, price, weightInGrams) {
        this.name = name;
        this.price = price;
        this.weightInGrams = weightInGrams;
    }
    getDisplayPrice() {
        return `${this.price.toFixed(2)} €`;
    }
    getShippingCost() {
        if (this.weightInGrams <= 1000) {
            return 4.9;
        }
        return 7.9;
    }
}
const product = new PhysicalProduct("Weltkarte aus Holz", 89.9, 2400);
console.log(`${product.name}: ${product.getDisplayPrice()}`);
console.log(`Versandkosten: ${product.getShippingCost().toFixed(2)} €`);
export {};
