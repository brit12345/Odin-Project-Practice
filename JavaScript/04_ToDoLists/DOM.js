//accesses Controller
const DOM = (() => { //for separating DOM from other parts
  const nav = document.querySelector("nav")
  const popup = function(){ //toggles popup hide and show
    const form = document.querySelector("form")
    const box = document.querySelector(".darken")
    form.classList.toggle("hidden");
    form.classList.toggle("appear");
    box.classList.toggle("hidden");
    box.classList.toggle("appear");
    //tabs(); //add and remove from tab index
  }

  const eventHandlers = function() {
    let newBtn = document.querySelector("button#new")
    newBtn.addEventListener("click", () => {
      popup();
    })

    let addBtn = document.querySelector("button#add")
    addBtn.addEventListener("click", () => {
      popup();
      Controller.createTodo();
    })

    let closeBtn = document.querySelector("button#close")
    closeBtn.addEventListener("click", () => {
    popup();
    })
  }

  const createProject = function(currentProject) {
    let prj = document.createElement("ul")
    prj.setAttribute("id", currentProject)

    let navPrj = document.createElement("h2") 
    navPrj.textContent = currentProject
    navPrj.classList.add("project")
    nav.appendChild(navPrj)
    //add to something___________________________________
  }
  const createTodo = function(prj) {
    let list = document.createElement("li")
    prj.appendChild(list)
    
  }

  
  return {
    eventHandlers,
    createProject,
    createTodo
  }
})()

