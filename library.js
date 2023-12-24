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

function addBook(title, author, pageCount, read){
    const book = new Book(title, author, pageCount, read);
    myLibrary.push(book);
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = 0;
    bookRead.checked =false;
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
    const trimTitle = bookTitle.value.trim();
    const trimAuthor = bookAuthor.value.trim();
    if(trimTitle != "" && trimAuthor != ""){
        addBook(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value);
        dialog.close();
    }
  });