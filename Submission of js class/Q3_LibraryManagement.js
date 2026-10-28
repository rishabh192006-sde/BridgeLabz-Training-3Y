
class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            return `${this.title} is already issued.`;
        }

        this.isIssued = true;
        return `${this.title} issued successfully.`;
    }

    returnBook() {
        if (!this.isIssued) {
            return `${this.title} has not been issued.`;
        }

        this.isIssued = false;
        return `${this.title} returned successfully.`;
    }
}

const books = [
    new Book("The Alchemist", "Paulo Coelho", "101"),
    new Book("Atomic Habits", "James Clear", "102"),
    new Book("1984", "George Orwell", "103", true),
    new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "104")
];

console.log("Available Books:");

books.filter(book => !book.isIssued).forEach(book => {
    console.log(
        `Title: ${book.title}, Author: ${book.author}, ISBN: ${book.ISBN}`
    );
});

function issueBookByISBN(isbn) {
    const book = books.find(book => book.ISBN === isbn);

    if (!book) {
        return "Book not found.";
    }

    return book.issueBook();
}

console.log(issueBookByISBN("102"));

console.log("Available Books After Issuing:");

books.filter(book => !book.isIssued).forEach(book => {
    console.log(book.title);
});
