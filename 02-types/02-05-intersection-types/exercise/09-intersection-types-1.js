/**
 * Stadtbibliothek – Fähigkeiten kombinieren
 *
 * Ein Datensatz kann aus unabhängigen Eigenschaften zusammengesetzt werden.
 *
 * Aufgaben:
 * 1) Definiere:
 *    - Identifiable = { id: string }
 *    - Reservable = { reservedBy?: number }
 *    - Auditable = { createdAt: Date; updatedAt: Date }
 * 2) Kombiniere alle drei Typen zum Intersection Type `CatalogEntry`.
 * 3) Implementiere `reserveEntry()`:
 *    - gibt ein neues Objekt zurück
 *    - setzt reservedBy auf die Mitgliedsnummer
 *    - aktualisiert updatedAt
 */
export function reserveEntry(entry, memberNumber) {
    // TODO
    return entry;
}
