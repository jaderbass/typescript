/**
 * Stadtbibliothek – Fähigkeiten kombinieren
 *
 * Musterlösung
 */
export function reserveEntry(entry, memberNumber) {
    return {
        ...entry,
        reservedBy: memberNumber,
        updatedAt: new Date(),
    };
}
