/**
 * Stadtbibliothek OOP – Zugriffsmodifikatoren
 *
 * Musterlösung
 */
export class LibraryAccount {
    constructor(memberNumber, memberName) {
        this.memberNumber = memberNumber;
        this.memberName = memberName;
        this.borrowedBookIds = [];
        this.maxLoans = 5;
    }
    borrow(bookId) {
        if (this.borrowedBookIds.length >= this.maxLoans) {
            throw new Error("Ausleihlimit erreicht");
        }
        this.borrowedBookIds.push(bookId);
    }
    returnBook(bookId) {
        this.borrowedBookIds = this.borrowedBookIds.filter(id => id !== bookId);
    }
    getBorrowedBookIds() {
        return [...this.borrowedBookIds];
    }
}
export class PremiumLibraryAccount extends LibraryAccount {
    constructor(memberNumber, memberName) {
        super(memberNumber, memberName);
        this.maxLoans = 10;
    }
}
