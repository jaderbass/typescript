/**
 * Stadtbibliothek OOP – abstrakte Basisklasse
 *
 * Musterlösung
 */
export class Media {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
    getLabel() {
        return `${this.id}: ${this.title}`;
    }
}
export class Book extends Media {
    constructor(id, title, author) {
        super(id, title);
        this.author = author;
    }
    getLoanPeriodDays() {
        return 28;
    }
}
export class Movie extends Media {
    constructor(id, title, director) {
        super(id, title);
        this.director = director;
    }
    getLoanPeriodDays() {
        return 7;
    }
}
export function longestLoanPeriod(media) {
    return Math.max(...media.map(item => item.getLoanPeriodDays()));
}
