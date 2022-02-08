const Form = (() => {
  const title = document.querySelector("#title")
  const desc = document.querySelector("#desc")
  const dueDate = document.querySelector("#date")
  const priority = document.querySelector("#priority")
  const notes = document.querySelector("textarea")
  
  const getTitle = function(){
    return title.value
  }
  const getDesc = function() {
    return desc.value
  }
  const getDueDate = function() {
    return dueDate.value
  }
  const getPriority = function() {
    return priority.value
  }
  const getNotes = function() {
    return notes.value
  }

  const empty = function() {
    title.value = ""
    desc.value = ""
    dueDate.value = ""
    priority.value = ""
    notes.value = ""
  }

  return {
    getTitle,
    getDesc,
    getDueDate,
    getPriority,
    getNotes,
    empty
  }
})()