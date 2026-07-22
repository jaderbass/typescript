// Generic Classes - Wiederverwendbare Sammlungen für verschiedenen Daten
class Repository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return [...this.items];
    }
    getFirst() {
        return this.items[0];
    }
}
const productRepository = new Repository();
productRepository.add({
    id: 1001,
    name: "Weltkarte aus Holz",
    price: 89.9
});
productRepository.add({
    id: 1002,
    name: "Globus Retro",
    price: 49.5
});
const customerRepository = new Repository();
customerRepository.add({
    customerNumber: "K-100",
    firstName: "Anna",
    lastName: "Müller"
});
console.log(productRepository.getAll());
console.log(customerRepository.getFirst());
export {};
