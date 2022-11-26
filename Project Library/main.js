let myLibrary = [];

var bookNumber = 4

function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

book.prototype.info = function() {
    return (`${this.title} by ${this.author}, ${this.pages}, ${this.read}`)
  }

const book1 = new book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
const book2 = new book("The Hobbit", "J.R.R. Tolkien", 294, "not read yet");
const book3 = new book("The Hobbit", "J.R.R. Tolkien", 293, "not read yet");

function addBookToLibrary(book){
    myLibrary.push(book)
}

addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)


for (const item of myLibrary){
    const body = document.querySelector("body");
    const p = document.createElement('p');
    p.innerText = item.info();
    body.appendChild(p);
}

const toggleFormOpen = () =>{
    const form = document.querySelector("form");
    form.classList.toggle("form-toggle");
    console.log("clicked");
}

const getNewBook= () => {
    const pages = document.getElementsByName("pages")[0].value;
    const author = document.getElementsByName("author")[0].value;
    const title = document.getElementsByName("title")[0].value;
    const read = document.getElementsByName("read")[0].checked;
    const book3 = new book("The Hobbit", "J.R.R. Tolkien", 293, "not read yet");
}

const element = document.querySelector('form');
element.addEventListener('submit', event => {
  event.preventDefault();
  // actual logic, e.g. validate the form
  console.log('Form submission cancelled.');
})