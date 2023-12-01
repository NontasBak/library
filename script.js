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
}

function updateLibraryDisplay() {
    const bookContainer = document.querySelector(".book-container");
    let lastBook = document.createElement("div");
    lastBook.classList.add("book");
    let lastBookInLibrary = myLibrary[myLibrary.length - 1];
    console.log(lastBookInLibrary);

    for(let property in lastBookInLibrary)
    {
        if(property === "info")
            continue;
        
        let bookInfo = document.createElement("p");
        if(!(property === "read")) {
            bookInfo.textContent = lastBookInLibrary[property];
        }
        else {
            bookInfo.textContent = lastBookInLibrary[property] ? "read" : "not read";
        }

        lastBook.appendChild(bookInfo);
    }

    bookContainer.appendChild(lastBook);
}

function displayLibrary() {
    const libraryContainer = document.querySelector(".library-container");
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");

    myLibrary.forEach((book) => {
        let specificBook = document.createElement("div");
        specificBook.classList.add("book");
        for(let property in book)
        {
            if(property === "info")
                continue;
            
            let bookInfo = document.createElement("p");
            if(!(property === "read")) {
                bookInfo.textContent = book[property];
            }
            else {
                bookInfo.textContent = book[property] ? "read" : "not read";
            }

            specificBook.appendChild(bookInfo);
        }
        
        bookContainer.appendChild(specificBook);
    })

    libraryContainer.appendChild(bookContainer);
      
}