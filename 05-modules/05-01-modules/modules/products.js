/**
 * Produktmodul
 */
export const products = [
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
export function findProductById(products, id) {
    return products.find((product) => product.id === id);
}
