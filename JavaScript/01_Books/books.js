let myLibrary = [];
const table = document.querySelector("table");
let tbody = null;
let newBtn;
let addBtn;
let delBtns;
let statBtns;
let closeBtn;

//popup
const form = document.querySelector("form");
const box = document.querySelector(".darken");

//inputs
let title = document.querySelector("#title")
let author = document.querySelector("#author")
let pages = document.querySelector("#pages")
let read = document.querySelector("#yes")

class Book {
  constructor(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }
  info() {
    let status;
    if(this.read){
      status = "already read"
    } else {
      status = "not read yet"
    }
    return `${this.title} by ${this.author}, ${this.pages} pages, ${status}`;
  }
}

//placeholder book
let frankenstein = new Book("Frankenstein", "Mary Shelley", 439, "Read");
addBookToLibrary(frankenstein);


updateTable();
tabs();
permanentButtons();

function addBookToLibrary(book) {
  myLibrary.push(book);
}


function updateTable(){
  if(tbody != null){
    table.removeChild(tbody);
  }
  tbody = document.createElement("tbody");
  for(let i = 0; i < myLibrary.length; i++){
    let row = document.createElement("tr") 
    let values = Object.values(myLibrary[i]);

    for (let w = 0; w < 3; w++) {
      let cell = document.createElement("td")
      cell.textContent = values[w];
      cell.classList.add("cell");
      row.appendChild(cell);
    }

    //status button
    let button1 = document.createElement("button")
    let cell1 = document.createElement("td")
    cell1.classList.add("cell");
    button1.textContent = values[3];
    button1.classList.add("status");
    cell1.appendChild(button1);
    row.appendChild(cell1);


    //delete button
    let button = document.createElement("button")
    let cell = document.createElement("td")
    cell.classList.add("cell");
    button.textContent = "Delete"
    button.classList.add("delete");
    cell.appendChild(button);
    row.appendChild(cell);
    tbody.appendChild(row);
  }
  table.appendChild(tbody);

  newBtn = document.querySelector("#new");
  addBtn = document.querySelector("#add");
  closeBtn = document.querySelector("#close");
  delBtns = document.querySelectorAll(".delete");
  statBtns = document.querySelectorAll(".status");
  eventHandlers();

}


function eventHandlers() {
  delBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      objName = btn.parentNode.parentNode.firstChild.textContent //gets the name of the book
      for(let i = 0; i < myLibrary.length; i++){
        if(myLibrary[i].title == objName) {
          myLibrary.splice(i, 1);
          break;
        }
      }
      updateTable();
    })
  })
  statBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      
      objName = btn.parentNode.parentNode.firstChild.textContent //gets the name of the book
      for(let i = 0; i < myLibrary.length; i++){
        if(myLibrary[i].title == objName) {
          myLibrary[i].read = change(myLibrary[i].read);
          break;
        }
      }
      updateTable();
    })
  })
}

function permanentButtons() {
  newBtn.addEventListener("click", () => {
    popup();
  })

  closeBtn.addEventListener("click", () => {
    popup();
  })

  addBtn.addEventListener("click", () => {
    popup();
    //inputs
    titleTemp = title.value;
    authorTemp = author.value;
    pageTemp = pages.value;
    statusTemp = read.checked;
    if(statusTemp){
      statusTemp = "Read";
    } else {
      statusTemp = "Not Read";
    }
    let book = new Book(titleTemp, authorTemp, pageTemp, statusTemp);
    addBookToLibrary(book);

    //empty the values
    title.value = ""
    author.value = ""
    pages.value = ""

    updateTable();
  })
}

function change(status){
  if(status == "Read"){
    return "Not Read";
  } else if(status == "Not Read"){
    return "Read";
  }
}

function popup(){ //toggles popup hide and show
  form.classList.toggle("hidden");
  form.classList.toggle("appear");
  box.classList.toggle("hidden");
  box.classList.toggle("appear");
  tabs();
}

function tabs(){ //focusable and not
  if(form.classList[0] == "appear"){
    closeBtn.tabIndex = "0";
    closeBtn.focus();
    addBtn.tabIndex = "0";
    title.tabIndex = "0";
    author.tabIndex = "0";
    pages.tabIndex = "0";
    read.tabIndex = "0";

  } else if(form.classList[0] == "hidden") {
    closeBtn.tabIndex = "-1";
    addBtn.tabIndex = "-1";
    title.tabIndex = "-1";
    author.tabIndex = "-1";
    pages.tabIndex = "-1";
    read.tabIndex = "-1";
  }
}