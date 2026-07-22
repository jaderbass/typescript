/**
 * Kapitel 4.3
 * Public, Protected und Private
 *
 * GeoShop – Den Zugriff auf Produktdaten kontrollieren
 */
class Product {
    constructor(id, name, purchasePrice, stock) {
        this.id = id;
        this.name = name;
        this.purchasePrice = purchasePrice;
        this.stock = stock;
    }
    getStock() {
        return this.stock;
    }
    reduceStock(quantity) {
        if (quantity <= 0) {
            return;
        }
        if (quantity > this.stock) {
            console.log("Nicht genügend Bestand vorhanden.");
            return;
        }
        this.stock -= quantity;
    }
    calculateMargin(salesPrice) {
        return salesPrice - this.purchasePrice;
    }
}
class SaleProduct extends Product {
    printMargin(salesPrice) {
        const margin = this.calculateMargin(salesPrice);
        console.log(`Marge für ${this.name}: ${margin.toFixed(2)} €`);
    }
}
const product = new SaleProduct(1001, "Weltkarte aus Holz", 52.5, 12);
console.log("Lagerbestand:", product.getStock());
product.reduceStock(2);
console.log("Neuer Lagerbestand:", product.getStock());
product.printMargin(89.9);
export {};
