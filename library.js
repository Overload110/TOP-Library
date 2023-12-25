const myLibrary = [];

const addButton = document.getElementById("addBook");
const dialog = document.getElementById("bookForm");
const cancelButton = document.getElementById("cancel");
const submitButton = document.getElementById("submitBook");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pageCount");
const bookRead = document.getElementById('read');
const library = document.getElementById('library');


function Book(title, author, pageCount, read){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
}

function addBook(title, author, pageCount, read){
  if(!isInLibrary(title)){
    const book = new Book(title, author, pageCount, read);
    myLibrary.push(book);
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = 0;
    bookRead.checked =false;
  }
}

addButton.addEventListener('click', () => {
    dialog.showModal();
  });

  cancelButton.addEventListener('click', (e) =>{
    e.preventDefault();
    dialog.close();
  })

  submitButton.addEventListener('click', e => {
    e.preventDefault();
    const trimTitle = bookTitle.value.trim();
    const trimAuthor = bookAuthor.value.trim();
    if(trimTitle != "" && trimAuthor != ""){
      if(!isInLibrary(bookTitle.value)){
        addBook(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked);
        dialog.close();
        showLibrary();
      }else{
        alert("Book already in library!");
      }
    }
  });

  function isInLibrary(newBook){
    return myLibrary.some((book) => book.title === newBook);
  }

  function showLibrary(){
    library.innerHTML = '';
    for(item in myLibrary){
        let div = document.createElement("div");
        div.classList.add("book");

        let cardTitle = document.createElement("h4");
        cardTitle.innerHTML = myLibrary[item].title;
        cardTitle.classList.add("title");

        let cardAuthor = document.createElement("h4");
        cardAuthor.innerHTML = myLibrary[item].author;

        let cardPages = document.createElement("p");
        cardPages.innerHTML = myLibrary[item].pageCount + " pages.";

        let cardRead = document.createElement("button");
        if(myLibrary[item].read){
            cardRead.classList.add("read");
            cardRead.innerHTML = "Read";
        }else{
            cardRead.classList.add("unread");
            cardRead.innerHTML = "Unread";
        }
        cardRead.addEventListener("click", toggleRead);

        let removeBook = document.createElement("button");
        removeBook.innerHTML = "Remove";
        removeBook.addEventListener("click", deleteBook);

        div.appendChild(cardTitle);
        div.appendChild(cardAuthor);
        div.appendChild(cardPages);
        div.appendChild(cardRead);
        div.appendChild(removeBook);
        library.appendChild(div);

    }
  }

  function findBook(title){
    return myLibrary.find((book) => book.title = title);
  }

  function toggleRead(e){
    let button = e.target;
    let book = findBook(button.parentNode.firstChild.innerHTML);
      if(button.classList.contains("unread")){
        button.classList.remove("unread");
        button.classList.add("read");
        button.innerHTML = "Read";
        book.read = true;
      }else{
        button.classList.remove("read");
        button.classList.add("unread");
        button.innerHTML = "Unread";
        book.read = false;
      }
  }

  function deleteBook(e){
    let book = findBook(e.target.parentNode.firstChild.innerHTML);
    let index = myLibrary.indexOf(book);
    myLibrary.splice(index, 1);
    showLibrary();
  }