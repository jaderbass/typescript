/**
 * Stadtbibliothek – Ausleihvorgang modellieren
 *
 * Musterlösung
 */
export function loanLabel(loan) {
    const statusLabels = {
        borrowed: "ausgeliehen",
        returned: "zurückgegeben",
        overdue: "überfällig",
    };
    return `ISBN ${loan.bookIsbn} → Mitglied ${loan.memberNumber} (${statusLabels[loan.status]})`;
}
export function markAsReturned(loan) {
    return { ...loan, status: "returned" };
}
const loan = {
    bookIsbn: "111",
    memberNumber: 1042,
    borrowedAt: new Date("2026-07-01"),
    dueAt: new Date("2026-07-15"),
    status: "borrowed",
};
console.log(loanLabel(loan) === "ISBN 111 → Mitglied 1042 (ausgeliehen)");
console.log(markAsReturned(loan).status === "returned");
