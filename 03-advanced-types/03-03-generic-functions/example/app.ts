// Generic Functions - Wiederverwendbare Funktionen für verschiedenen Datentypen

type Product = {
  id: number;
  name: string;
  price: number;
};

type Customer = {
  customerNumber: string;
  firstName: string;
  lastName: string;
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
  }
];

const customers: Customer[] = [
  {
    customerNumber: "K-100",
    firstName: "Anna",
    lastName: "Bolika",
  },
  {
    customerNumber: "K-101",
    firstName: "Thomas",
    lastName: "Schmidt",
  },
];

// Gib einen Typ rein und ich versichere, dass der selbe Typ raus kommt.

/**
 * Gibt das erste Element eines Arrays zurück
 */
function getFirstItem<T>(items: T[]): T | undefined {
  return items[0];
}

const firstProduct: Product | undefined = getFirstItem<Product>(products);
const firstCustomer: Customer | undefined = getFirstItem<Customer>(customers);

console.log("Erstes Produkt:", firstProduct);
console.log("Erster Kunde:", firstCustomer);


/**
 * Erzeugt ein neues Array mit genau einem Wert
 */
function createSingleItemList<T>(item: T): T[] {
  return [item];
}

const productList: Product[] = createSingleItemList<Product>(
  {
    id: 1003,
    name: "Kompass Adventure",
    price: 19.9,
  }
);

const categoryList: string[] = createSingleItemList<string>("Outdoor");

console.log(productList);
console.log(categoryList);

/**
 * Liefert einen Wert zusammen mit einer Statusmeldung aus
 */
function createResult<T>(
  data: T,
  message: string
): {
  data: T,
  message: string;
} {
  return {
    data,
    message,
  };
}

const productResult = createResult<Product>(
  products[0],
  "Produkt wurde geladen."
);

console.log(productResult);
