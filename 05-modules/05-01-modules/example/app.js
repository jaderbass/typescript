// Diese Datei dient als Einstiegspunkt und importiert Funktionen
// und Typen aus mehreren Modulen
import { products, findProductById, } from "../modules/products.js";
import { calculateOrderTotal, } from "../modules/orders.js";
import { formatCurrency, formatProductName } from "../modules/utils.js";
const selectedProduct = findProductById(products, 1001);
if (!selectedProduct) {
    console.log("Produkt wurde nicht gefunden.");
}
else {
    const order = {
        orderNumber: "GE-2026-001",
        product: selectedProduct,
        quantity: 2,
    };
    console.log(`Produkt: ${formatProductName(order.product.name)}`);
    console.log(`Einzelpreis: ${formatCurrency(order.product.price)}`);
    console.log(`Gesamtpreis: ${formatCurrency(calculateOrderTotal(order))}`);
}
