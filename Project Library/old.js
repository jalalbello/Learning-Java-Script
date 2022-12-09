"use strict";
let myLibrary = [];


// Start of Book Constructor
function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

book.prototype.info = function() {
    return (`${this.title} by ${this.author}, ${this.pages}, ${this.read}`)
  }
// End of Book Constructor

// Apend books to the Dom
const createObject= () => {
    const pages = document.getElementsByName("pages")[0].value;
    const author = document.getElementsByName("author")[0].value;
    const title = document.getElementsByName("title")[0].value;
    const readValue = document.getElementsByName("read")[0].checked;
    let read = "";
    readValue ? read = 'read' : read = "not read yet"
    const newBook = new book(pages, author, title, read);
    myLibrary.push(newBook)
}


const render = ()=>{
    createObject()
    const section = document.getElementById("displayBook")
    const div = document.createElement("div")
    const removeBtn = document.createElement('button');

    for (let i=0; i<myLibrary.length; i++){
        section.appendChild(div);
        div.appendChild(removeBtn)
        div.setAttribute("id", i);  
        removeBtn.classList.add("removeBtn");  
    }
    let btns = document.getElementsByClassName("removeBtn");

    for(let i = 0; i < btns.length; i++) {
        if (typeof(btns[i].onclick) == "undefined") {
            // event undefined
            btns[i].addEventListener("click", () => {
            console.log("Clicked index: " + i);
            })
          }
    }
}



// if(myLibrary.length > 0){
//     for (let btn of btns){
//     btn.addEventListener('click', () => {
//         myLibrary.splice(myLibrary.indexOf(item),1);
//         setData()
//         render();
//     });
// }



console.log(myLibrary.length);
// Toggle form visibility
const toggleFormOpen = () =>{
    const form = document.querySelector("form");
    form.classList.toggle("form-toggle");
    console.log("clicked");
}

// Prevent Form Submition
const element = document.querySelector('form');
element.addEventListener('submit', event => {
  event.preventDefault();
  // actual logic, e.g. validate the form
  console.log('Form submission cancelled.');
})



//how to add method to js object?
function Foo(){}
Foo.prototype.bar = function(){}
var x = new Foo()
x.bar()



