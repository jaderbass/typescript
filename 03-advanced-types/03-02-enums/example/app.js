// Enums
// Bestellstatus eindeutig festlegen
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Open"] = "open";
    OrderStatus["Paid"] = "paid";
    OrderStatus["Shipped"] = "shipped";
    OrderStatus["Cancelled"] = "cancelled";
})(OrderStatus || (OrderStatus = {}));
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["Invoice"] = "invoice";
    PaymentMethod["PayPal"] = "paypal";
    PaymentMethod["CreditCard"] = "creditcard";
})(PaymentMethod || (PaymentMethod = {}));
const order = {
    orderNumber: "GS-2023-001",
    status: OrderStatus.Open,
    paymentMethod: PaymentMethod.Invoice,
    total: 179.8,
};
/**
 * Gibt einen verständlichen Text zum Bestellstatus aus.
 */
function getStatusLabel(status) {
    switch (status) {
        case OrderStatus.Open:
            return "Bestellung ist offen.";
        case OrderStatus.Paid:
            return "Bestellung wurde bezahlt.";
        case OrderStatus.Shipped:
            return "Bestellung wurde versendet.";
        case OrderStatus.Cancelled:
            return "Bestellung wurde storniert.";
    }
}
/**
 * Andert den Bestellstatus.
 */
function updateOrderStatus(order, newStatus) {
    order.status = newStatus;
    console.log(`
    ${order.orderNumber}: ${getStatusLabel(order.status)}  
  `);
}
console.log(getStatusLabel(order.status));
updateOrderStatus(order, OrderStatus.Paid);
updateOrderStatus(order, OrderStatus.Shipped);
console.log(`Zahlungsart: ${order.paymentMethod}`);
export {};
