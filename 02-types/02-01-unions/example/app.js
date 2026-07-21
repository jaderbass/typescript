// Union Types
// unterschiedliche Werte für IDs und Statusausgaben
// Eine Produkt-ID kann aus einer Datenbank als Zahl
// oder aus einer Schnittstelle als Zeichenkette kommen.
let productID = 1001;
console.log("Produkt-ID:", productID);
productID = "EXT-2028";
console.log("Externe Produkt-ID:", productID);
// productId = true; // Fehler, Datentyp nicht erlaubt
// Eine Bestellung darf nur einen der vorgegeben Werte enthalten
let orderStatus = "open";
console.log("Bestellstatus:", orderStatus);
orderStatus = "paid";
console.log("Neuer Bestellstatus:", orderStatus);
// orderStatus = "undefined"; // Fehler, Wert nicht erlaubt
/**
 * Gibt eine Produkt-ID einheitlich als Text aus.
 */
function formatProductId(id) {
    return `GS-${id}`;
}
console.log(formatProductId(1001));
console.log(formatProductId("EXT-2048"));
/**
 * Gibt eine verständliche Beschreibung zum Bestellstatus aus
 */
function getOrderStatusLabel(status) {
    switch (status) {
        case "open":
            return "Bestellung ist offen.";
        case "paid":
            return "Bestellung wurde bezahlt.";
        case "shipped":
            return "Bestellung wurde versendet.";
        case "cancelled":
            return "Bestellung wurde storniert.";
    }
}
console.log(getOrderStatusLabel(orderStatus));
export {};
