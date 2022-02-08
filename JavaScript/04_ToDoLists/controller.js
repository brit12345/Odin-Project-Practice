const Controller = (() => {
  let projects = []
  const createTodo = function() {
    //invoke todo class, input the values from the inputs. Invoked when button pressed?
    let temp = new Todo(Form.getTitle(), Form.getDesc(), Form.getDueDate(), Form.getPriority(), Form.getNotes())
    //add to current project. How to tell which is current project?
    //projects are in Project array, so filter through array and go to one that has same name - have a variable 
  }

  const removeTodo = function() {

  }

  const addProject = function(project) {
    projects.push(project)
  }

  const buttonEvent = function() {

  }

  return {
    createTodo,
    removeTodo,
    addProject,
    projects

  }
})()
//Controller (application logic): creating new todos, setting todos as complete, changing todo priority 
//Add a project class? items: [{}, {}]

