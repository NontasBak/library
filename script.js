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

const defaultLibrary = [new Book("1-1", "1-2", "1-3", true), new Book("2-1", "2-2", "2-3", false), new Book("3-1", "3-2", "3-3", true)];

let myLibrary = [new Book("1-1", "1-2", "1-3", true), new Book("2-1", "2-2", "2-3", false), new Book("3-1", "3-2", "3-3", true)];
console.log(myLibrary)
displayLibrary();

const submitButton = document.querySelector("#add-book");
submitButton.addEventListener("click", addBookToLibrary);





function addBookToLibrary() {
    const bookInputs = document.querySelectorAll("input");
    myLibrary.push(new Book(bookInputs[0].value, bookInputs[1].value, bookInputs[2].value, bookInputs[3].checked));
    console.log(myLibrary);

    updateLibraryDisplay();
}

// function updateLibraryDisplay() {
//     const bookContainer = document.querySelector(".book-container");
    

// }

function displayLibrary() {
    const libraryContainer = document.querySelector(".library-container");
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");

    myLibrary.forEach((book) => {
        let specificBook = document.createElement("div");
        for(let property in book)
        {
            let bookInfo = document.createElement("p");
            // console.log(property);

            if(property === "info")
                continue;
            
            if(!(property === "read")) {
                bookInfo.textContent = book[property];
                // console.log(bookInfo.textContent);
            }
            else {
                bookInfo.textContent = book[property] ? "read" : "not read";
                // console.log(bookInfo.textContent);
            }

            specificBook.appendChild(bookInfo);
            // console.log("works")
        }
        specificBook.classList.add("book");
        bookContainer.appendChild(specificBook);
    })

    libraryContainer.appendChild(bookContainer);
      
}

// createBookDisplay(book, bookContainer) {

// }