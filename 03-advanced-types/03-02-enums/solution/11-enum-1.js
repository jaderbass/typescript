/**
 * Stadtbibliothek – Medienkategorien
 *
 * Musterlösung
 */
export var MediaCategory;
(function (MediaCategory) {
    MediaCategory["Book"] = "book";
    MediaCategory["Movie"] = "movie";
    MediaCategory["AudioBook"] = "audio-book";
    MediaCategory["Magazine"] = "magazine";
})(MediaCategory || (MediaCategory = {}));
export function loanPeriodDays(category) {
    switch (category) {
        case MediaCategory.Book:
            return 28;
        case MediaCategory.AudioBook:
            return 14;
        case MediaCategory.Movie:
        case MediaCategory.Magazine:
            return 7;
    }
}
export function categoryLabel(category) {
    switch (category) {
        case MediaCategory.Book:
            return "Buch";
        case MediaCategory.Movie:
            return "Film";
        case MediaCategory.AudioBook:
            return "Hörbuch";
        case MediaCategory.Magazine:
            return "Zeitschrift";
    }
}
