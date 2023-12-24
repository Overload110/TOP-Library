const myLibrary = [];

const addButton = document.getElementById("addBook");
const dialog = document.getElementById("bookForm");
const cancelButton = document.getElementById("cancel");
const submitButton = document.getElementById("submitBook");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.querySelector("#pageCount");
const bookRead = document.querySelector('#read');


function Book(title, author, pageCount, read){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
}

function addBook(){

}

addButton.addEventListener('click', () => {
    dialog.showModal();
  });

  cancelButton.addEventListener('click', () =>{
    e.preventDefault();
    dialog.close();
  })

  submitButton.addEventListener('click', e => {
    e.preventDefault();
  });