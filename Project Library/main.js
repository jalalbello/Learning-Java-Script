// Form block

let myLibrary = [];

const toggleFormOpen = ( )=> {
  const form = document.querySelector("form");
  form.classList.toggle("form-toggle");
  document.getElementById('newBookBtn').style.pointerEvents = 'none';
}

const bookFactory = (title, author, pages, read) => {
    const info = () => {return `${title} by ${author}, ${pages}, ${read}`}
    return { title, author, pages, read, info};
  };

  const addBook = (event) => {
    event.preventDefault();
    const pages = document.getElementsByName("pages")[0].value;
    const author = document.getElementsByName("author")[0].value;
    const title = document.getElementsByName("title")[0].value;
    const read = document.getElementsByName("read")[0].checked;
    const newBook = bookFactory(pages, author, title, read);
    myLibrary.push(newBook);


    const displayBookSection = document.getElementById('displayBook');
    // create a new element to hold the item
    const itemElement = document.createElement('div');
    itemElement.textContent = newBook.info();
    // add the new element to the container
    displayBookSection.appendChild(itemElement);
  }












