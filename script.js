function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${read ? "read" : "not read yet"}`
    }
}

// let newBook = new Book("bla", "blabla", 200, true);
// console.log(newBook.info());

const myLibrary = [];

const submitButton = document.querySelector("#add-book");
submitButton.addEventListener("click", addBookToLibrary);

function addBookToLibrary() {
    const bookInputs = document.querySelectorAll("input");
    myLibrary.push(new Book(bookInputs[0].value, bookInputs[1].value, bookInputs[2].value, bookInputs[3].checked));
    console.log(myLibrary);
}