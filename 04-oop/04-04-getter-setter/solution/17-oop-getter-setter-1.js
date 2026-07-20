/**
 * Stadtbibliothek OOP – Getter und Setter
 *
 * Musterlösung
 */
export class Loan {
    constructor(borrowedAt, dueAt) {
        this.borrowedAt = borrowedAt;
        this._dueAt = borrowedAt;
        this.dueAt = dueAt;
    }
    get dueAt() {
        return this._dueAt;
    }
    set dueAt(value) {
        if (value.getTime() < this.borrowedAt.getTime()) {
            throw new Error("Rückgabedatum darf nicht vor dem Ausleihdatum liegen");
        }
        this._dueAt = value;
    }
    get isOverdue() {
        return new Date().getTime() > this._dueAt.getTime();
    }
    get loanPeriodDays() {
        const millisecondsPerDay = 1000 * 60 * 60 * 24;
        return Math.floor((this._dueAt.getTime() - this.borrowedAt.getTime()) / millisecondsPerDay);
    }
}
