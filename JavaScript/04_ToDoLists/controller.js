//accesses Form
const Controller = (() => { //application logic
  let projects;
  let currentProject = "Project"; //change to projects[0]?

  const startUp = function() {
    Controller.projects = getStorage();
  }
  const createTodo = function() {
    //invoke todo class, input the values from the inputs. Invoked when button pressed?
    //need to have retrieved storage at the beginning
    let temp = new Todo(Form.getTitle(), Form.getDesc(), Form.getDueDate(), Form.getPriority(), Form.getNotes())
    projects[0][currentProject].push(temp);
    console.log(projects[0])
    //let temp = getStorage()[0][proj][0] need to figure out which first 0
    //add to current project. How to tell which is current project?
    //projects are in Project array, so filter through array and go to one that has same name - have a variable 
  }//let project = {newProject: [one, two]}

  const removeTodo = function() {

  }

  const addProject = function(project) {
    projects.push(project)
  }

  const saveAll = function() {
    localStorage.setItem("projects", JSON.stringify(Controller.projects))
  }
  
  const getStorage = function() {
    return JSON.parse(localStorage.getItem("projects")) || [{Project: []}];
  }

  return {
    createTodo,
    removeTodo,
    addProject,
    projects,
    saveAll,
    getStorage,
    startUp

  }
})()
//Controller (application logic): creating new todos, setting todos as complete, changing todo priority 
//Add a project class? items: [{}, {}]
Controller.startUp();
console.log(Controller.getStorage())
console.log(Controller.projects)