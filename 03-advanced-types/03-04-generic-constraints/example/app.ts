/**
 * Kapitel 3.4
 * Generic Constraints
 *
 * GeoShop – Generische Funktionen gezielt einschränken
 */

type Product = {
  id: number;
  name: string;
  price: number;
};

type Customer = {
  id: number;
  firstName: string;
  lastName: string;
};

type Category = {
  id: number;
  title: string;
};

const products: Product[] = [
  {
    id: 1001,
    name: "Weltkarte aus Holz",
    price: 89.9,
  },
  {
    id: 1002,
    name: "Globus Retro",
    price: 49.5,
  },
];

const customers: Customer[] = [
  {
    id: 1,
    firstName: "Anna",
    lastName: "Müller",
  },
  {
    id: 2,
    firstName: "Thomas",
    lastName: "Schmidt",
  },
];

const categories: Category[] = [
  {
    id: 10,
    title: "Dekoration",
  },
  {
    id: 20,
    title: "Outdoor",
  },
];

/**
 * T muss mindestens eine Eigenschaft id besitzen.
 */
// extends bedeutet in diesem Fall "Einschränken"
function findById<T extends { id: number }>(
  items: T[],
  id: number
): T | undefined {
  return items.find((item: T): boolean => item.id === id);
}

const foundProduct: Product | undefined =
  findById<Product>(products, 1002);

const foundCustomer: Customer | undefined =
  findById<Customer>(customers, 1);

const foundCategory: Category | undefined =
  findById<Category>(categories, 20);

console.log("Produkt:", foundProduct);
console.log("Kunde:", foundCustomer);
console.log("Kategorie:", foundCategory);

/**
 * T muss mindestens die Eigenschaften name und price besitzen.
 */
function printPricedItem<
  T extends {
    name: string;
    price: number;
  }
>(item: T): void {
  console.log(
    `${item.name} kostet ${item.price.toFixed(2)} €.`
  );
}

printPricedItem({
  id: 1001,
  name: "Weltkarte aus Holz",
  price: 89.9,
  stock: 12,
});

printPricedItem(products[1]);
