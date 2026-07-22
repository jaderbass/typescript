// Property Modifiers
class Product {
    constructor(id, name, price, stock, isActive) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.isActive = isActive;
    }
    toString() {
        return `
      ${this.name} - ${this.price} € netto,
      Lagerbestand: ${this.stock}
    `;
    }
}
const woodenMap = new Product(1001, "Weltkarte aus Holz", 89.9, 12, true);
const globe = new Product(1002, "Globus Retro", 49.5, 8, true);
console.log(woodenMap);
console.log(globe);
document.addEventListener("DOMContentLoaded", _ => {
    const output = document.querySelector(".content-box");
    console.log(output);
    if (output)
        output.innerText = globe.toString();
});
export {};
