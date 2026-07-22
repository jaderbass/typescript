/**
 * Produktmodul
 */

export type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export const products: Product[] = [
  {
    id: 1001,
    name: "Weltkarte aus Holz",
    price: 89.9,
    stock: 12,
  },
  {
    id: 1002,
    name: "Globus Retro",
    price: 49.5,
    stock: 8,
  },
  {
    id: 1003,
    name: "Kompass Adventure",
    price: 19.9,
    stock: 20
  },
];

export function findProductById(
  products: Product[],
  id: number
): Product | undefined {
  return products.find(
    (product: Product): boolean => product.id === id
  );
}