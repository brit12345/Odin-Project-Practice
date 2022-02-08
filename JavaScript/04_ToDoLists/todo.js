function* unique() {
  let id = 0;
  while(true){
    yield id++;
  }
}
let ids = unique()

class Todo {
  constructor(title, desc, dueDate, priority, notes,){ 
    this.id = ids.next().value
    this.title = title
    this.desc = desc //optional
    this.dueDate = dueDate //optional
    this.priority = priority
    this.notes = notes //optional
    this.status = true
  }
  get Title(){
    return this.title;
  }
  set Title(a){
    this.title = a;
  }
  get Desc(){
    return this.desc;
  }
  set Desc(a){
    this.desc = a;
  }
  get DueDate(){
    return this.dueDate;
  }
  set DueDate(a){
    this.dueDate = a;
  }
  get Priority(){
    return this.priority;
  }
  set Priority(a){
    this.priority = a;
  }
  get Notes(){
    return this.notes;
  }
  set Notes(a){
    this.notes = a;
  }
  get Status(){
    return this.status;
  }
  
  changeStatus(){
    if(this.s){
      this.s = false;
    } else {
      this.s = true;
    }
  }
}
/*
let one = new Todo("yeah", "sdkjnfnnf g w fg ewr  sda f s df", "12th idk", 5, "sdf sggwergwerg werg", true)
let two = new Todo("sdfsdf", "d g w fg ewr  sda f s df", "12dth idk", 3, "sdf ddsggwergwerg werg", true)

let project = {newProject: [one, two]}

Controller.projects.push(project)
console.log(Controller.projects)
let proj = "newProject"
saveAll();
let temp = getStorage()[0][proj][0]
temp.prototype = Todo.prototype;
console.log(temp)
console.log(Todo.prototype)
*/