//Should I add everything to local storage, and draw everything from there? input --> array --> local storage --> array --> display
//That way it would work when starting up and when a change is made. Less code?

/*

*/


//using local storage, so need a way to import todo lists at the beginning and save them each time created/updated.

//can use storage.length to test whether it is empty or not. Storage.removeItem() or Storage.clear() to remove everything

//need a save list funtion maybe?
//how will I save everything? by project? by list?

/* How to use local storage

console.log(localStorage)

let project = {
  things: "red",
  otherThing: ["cheese", "not cheese"],
  yeah: {
    just: 'checking',
    cheese: 4,
  }
}

let projects = [];
projects.push(project)
localStorage.setItem("projects", JSON.stringify(projects))

let cheese = JSON.parse(localStorage.getItem('projects'))
console.log(cheese)

*/

//will have an array or projects, and projects have an array of lists

function saveAll() {
  localStorage.setItem("projects", JSON.stringify(Controller.projects))
}

function getStorage() {
  return JSON.parse(localStorage.getItem("projects")) || [];
}

function clear() { //only for using in console to unpolute the localStorage
  localStorage.clear()
}

//have to use the .[''] thing to make the project name what the user inputs?