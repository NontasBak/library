function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${read ? "read" : "not read yet"}`
}

// let newBook = new Book("bla", "blabla", 200, true);
// console.log(newBook.info());

const defaultLibrary = [new Book("1-1", "1-2", "1-3", true), new Book("2-1", "2-2", "2-3", false), new Book("3-1", "3-2", "3-3", true)];

let myLibrary = [new Book("1-1", "1-2", "1-3", true), new Book("2-1", "2-2", "2-3", false), new Book("3-1", "3-2", "3-3", true)];
console.log(myLibrary)
displayLibrary();

const form = document.querySelector("form");
form.addEventListener("submit", addBookToLibrary);



function addBookToLibrary(event) {
    event.preventDefault();
    const bookInputs = document.querySelectorAll("input");
    myLibrary.push(new Book(bookInputs[0].value, bookInputs[1].value, bookInputs[2].value, bookInputs[3].checked));
    // console.log(myLibrary);

    updateLibraryDisplay();
    clearInputFields();
}

function updateLibraryDisplay() {
    const bookContainer = document.querySelector(".book-container");
    let lastBook = document.createElement("li");
    lastBook.classList.add("book");
    lastBook.dataset.arrayIndex = myLibrary.length - 1;
    let lastBookInLibrary = myLibrary[myLibrary.length - 1];
    // console.log(lastBookInLibrary);

    for(let property in lastBookInLibrary)
    {
        if(property === "info" || property === "read")
            break;
        
        let bookInfo = document.createElement("p");
        bookInfo.textContent = lastBookInLibrary[property];

        lastBook.appendChild(bookInfo);
    }
    createStatusButton(lastBook, myLibrary[myLibrary.length - 1]);
    createRemoveButton(lastBook);
    bookContainer.appendChild(lastBook);
}

function displayLibrary() {
    const libraryContainer = document.querySelector(".library-container");
    const bookContainer = document.createElement("ul");
    bookContainer.classList.add("book-container");

    myLibrary.forEach((book, index) => {
        let specificBook = document.createElement("li");
        specificBook.classList.add("book");
        specificBook.dataset.arrayIndex = index;
        for(let property in book)
        {
            if(property === "info" || property === "read")
                break;
            
            let bookInfo = document.createElement("p");
            bookInfo.textContent = book[property];

            specificBook.appendChild(bookInfo);
        }

        createStatusButton(specificBook, book);
        createRemoveButton(specificBook);
        bookContainer.appendChild(specificBook);
    })
    
    libraryContainer.appendChild(bookContainer);
      
}

function clearInputFields() {
    const bookInputs = document.querySelectorAll("input");
    bookInputs.forEach((e) => {
        e.value = "";
    })
}

function createRemoveButton(DOMbook) {
    let removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", removeBook);

    DOMbook.appendChild(removeButton);
}

function removeBook(e) {
    let book = e.target.parentElement;
    let bookIndex = book.dataset.arrayIndex;
    book.remove();

    delete myLibrary[bookIndex];
}

function createStatusButton(DOMbook, arrayBook) {
    let statusButton = document.createElement("button");
    statusButton.classList.add("status-button");
    statusButton.textContent = arrayBook["read"] ? "read" : "not read";

    statusButton.addEventListener("click", changeStatus);

    DOMbook.appendChild(statusButton);
}
function changeStatus(e) {
    let book = e.target.parentElement;
    let bookIndex = book.dataset.arrayIndex;
    let boolStatus = (e.target.textContent === "read");

    //Change status
    myLibrary[bookIndex].read = !boolStatus;
    e.target.textContent = boolStatus ? "not read" : "read";
}