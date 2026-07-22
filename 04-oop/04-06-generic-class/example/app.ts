// Generic Classes - Wiederverwendbare Sammlungen für verschiedenen Daten

class Repository<T> {
  private items: T[] = [];

  public add(item: T): void {
    this.items.push(item);
  }

  public getAll(): T[] {
    return [...this.items];
  }

  public getFirst(): T | undefined {
    return this.items[0];
  }
}

type Product = {
  id: number;
  name: string;
  price: number;
};

type Customer = {
  customerNumber: string;
  firstName: string;
  lastName: string;
}

const productRepository = new Repository<Product>();

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

const customerRepository = new Repository<Customer>();


customerRepository.add({
  customerNumber: "K-100",
  firstName: "Anna",
  lastName: "Müller"
});

console.log(productRepository.getAll());
console.log(customerRepository.getFirst());
