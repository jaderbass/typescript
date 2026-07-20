/**
 * Stadtbibliothek OOP – gemeinsame Fähigkeiten
 *
 * Musterlösung
 */
export class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this._available = true;
    }
    get available() {
        return this._available;
    }
    borrow() {
        if (!this._available) {
            throw new Error("Buch ist bereits ausgeliehen");
        }
        this._available = false;
    }
    returnItem() {
        this._available = true;
    }
}
export class Movie {
    constructor(title, director) {
        this.title = title;
        this.director = director;
        this._available = true;
    }
    get available() {
        return this._available;
    }
    borrow() {
        if (!this._available) {
            throw new Error("Film ist bereits ausgeliehen");
        }
        this._available = false;
    }
    returnItem() {
        this._available = true;
    }
}
