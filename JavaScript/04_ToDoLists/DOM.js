const DOM = (() => { //for separating DOM from other parts

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
  
  return {
    eventHandlers
  }
})()

DOM.eventHandlers();