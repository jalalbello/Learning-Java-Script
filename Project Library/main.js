// Form block

let myLibrary = [];

const toggleFormOpen = ( )=> {
  const form = document.querySelector("form");
  form.classList.toggle("form-toggle");
}

const bookFactory = (title, author, pages, read) => {
    return { title, author, pages, read};
  };

  const addBook = (event) => {
    event.preventDefault();
    toggleFormOpen();
    const title = document.getElementsByName("title")[0].value;
    const pages = document.getElementsByName("pages")[0].value;
    const author = document.getElementsByName("author")[0].value;
    const read = document.getElementsByName("read")[0].checked;
    const newBook = bookFactory(title, author, pages, read);
    myLibrary.push(newBook);
    setData();
    renderBook(newBook);
  }

  
  const renderObject = (item) =>{
    let index = objects.indexOf(item); 

    const card= document.createElement("div");
    card.classList.add("card");
    card.setAttribute('id', `card-${index}`)
    
    const cardHeader= document.createElement("div");
    cardHeader.classList.add("cardHeader");
    
    const cardTitle = document.createElement("h3");
    cardTitle.textContent= item.title;
    
    cardHeader.appendChild(cardTitle);
    
    const cardBody = document.createElement('div');
    cardBody.classList.add("cardBody")
    
    const pages = document.createElement("p")
    pages.textContent = "Pages : "  + item.pages
    
    const author = document.createElement("p")
    author.textContent = "Author : " + item.author
    
    const read = document.createElement('input')
    read.setAttribute('type', 'checkbox')
    read.textContent = "read"
    read.checked = item.read
    
    cardBody.append(pages, author, read)
    
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('removeBtn')
    
    card.append(cardHeader,cardBody, removeBtn);
    
    const displayBookSection = document.getElementById('displayBook');
    displayBookSection.append(card);

    removeBtn.addEventListener('click', (event) => {
      const item = event.target.parentElement;
      item.remove();
      myLibrary.splice(myLibrary.indexOf(item),1);
      setData()
  });
  } 
  const renderBook = (item) =>{
    let index = myLibrary.indexOf(item); 

    const card= document.createElement("div");
    card.classList.add("card");
    card.setAttribute('id', `card-${index}`)
    
    const cardHeader= document.createElement("div");
    cardHeader.classList.add("cardHeader");
    
    const cardTitle = document.createElement("h3");
    cardTitle.textContent= item.title;
    
    cardHeader.appendChild(cardTitle);
    
    const cardBody = document.createElement('div');
    cardBody.classList.add("cardBody")
    
    const pages = document.createElement("p")
    pages.textContent = "Pages : "  + item.pages
    
    const author = document.createElement("p")
    author.textContent = "Author : " + item.author
    
    const read = document.createElement('input')
    read.setAttribute('type', 'checkbox')
    read.textContent = "read"
    read.checked = item.read
    
    cardBody.append(pages, author, read)
    
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('removeBtn')
    
    card.append(cardHeader,cardBody, removeBtn);
    
    const displayBookSection = document.getElementById('displayBook');
    displayBookSection.append(card);

    removeBtn.addEventListener('click', (event) => {
      const item = event.target.parentElement;
      item.remove();
      myLibrary.splice(myLibrary.indexOf(item),1);
      setData()
    });
    console.log(myLibrary);
  } 

  function setData() {
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
  }
  let objects = localStorage.getItem('myLibrary')
  objects = JSON.parse(objects);
  objects.forEach(object => {
    myLibrary.push(object);
  }
  );
  myLibrary.forEach(book => {
    renderBook(book)
  });

