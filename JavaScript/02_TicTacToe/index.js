const section = document.querySelector("section");
const gameBoard = (() => { //draw and update gameBoard. Not for pressing logic????
  let board = ["", "", "", "", "", "", "", "", ""];
  const empty = ["", "", "", "", "", "", "", "", ""];
  let boardA = document.createElement("div");

  const draw = function() {
    boardA.classList.add("board");
    for(square in gameBoard.board) {
      let div = document.createElement("button");
      div.textContent = gameBoard.board[square];
      div.classList.add("square");
      div.dataset.index = square;
      div.tabIndex = "0";
      //add event listeners here? Or go through each child of boardA and add it there? part of game controller?
      boardA.appendChild(div)
    }
    section.appendChild(boardA)
    game.buttons(); //set event handlers
  }

  const del = function() { //delete and recreate board
    section.removeChild(boardA);
    boardA = document.createElement("div");
  }

  const update = function() {
    del()
    draw();
  }

  const reset = function() {
    gameBoard.board = [...empty];
    update();
  }

  return {
    board,
    boardA,
    draw,
    del,
    update,
    reset,

  }
})()

const game = (() => {
  let type;
  let result;
  let player;
  let turn = "X"
  let message = document.createElement("p")

  const start = function() {
    //initialise players depending on their selection?
  }

  const buttons = function() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener("click", () => press(square))
    })
  }

  const press = function(square) {
    if(spaceFree(square.dataset.index)){ //make sure space is free
      gameBoard.board[square.dataset.index] = turn;
      square.textContent = turn;
      turn = changePlayer(turn)
      gameBoard.update();
      let status = game.checkEnd()
      if(status.result){
        end(status.player, status.type)
      };
    }
    
  } 

  const spaceFree = function(i) { //returns true or false when a space is entered depending on if it's free. i is index
    let result;
    if(gameBoard.board[i] == ""){
      result = true;
    } else {
      result = false;
    }
    return result;
  }

  const tie = function () {
    let count = 0;
    for(square in gameBoard.board){
      if(gameBoard.board[square] != ""){
        count++;
      }
    }
    if(count == 9){
      result = true;
      type = "tie";
      player = "None"
      count = 0;
    }
  }

  const count3 = function(winType, countO, countX) {
    if(countO == 3) {
      result = true;
      type = winType
      player = "O"
    } else if(countX == 3) {
      result = true;
      type = winType
      player = "X"
    }
  }

  const row = function () {
    const ADD = 3;
    for(let w = 0; w < 3; w++){
      let countO = 0;
      let countX = 0;
      for(let i = 0 + w*ADD; i < 3 + w*ADD; i++){
        if(gameBoard.board[i] == "O"){
          countO++
        } else if(gameBoard.board[i] == "X"){
          countX++
        }
      } 
      this.count3("row", countO, countX)
    }
  }

  const column = function() {
    for(let w = 0; w < 3; w++){
      let countO = 0;
      let countX = 0;
      for(let i = 0 + w; i < 9 + w; i+=3){
        if(gameBoard.board[i] == "O"){
          countO++
        } else if(gameBoard.board[i] == "X"){
          countX++
        }
      } 
      this.count3("column", countO, countX)
    }
  }

  const diagonal = function() {
    let countO = 0;
    let countX = 0;
    for(let i = 0; i < 9; i+=4){
      if(gameBoard.board[i] == "O"){
        countO++
      } else if(gameBoard.board[i] == "X"){
        countX++
      }
    } 
    this.count3("diagonal", countO, countX)

    countO = 0;
    countX = 0;
    for(let i = 2; i <= 6; i+=2){
      if(gameBoard.board[i] == "O"){
        countO++
      } else if(gameBoard.board[i] == "X"){
        countX++
      }
    } 
    this.count3("diagonal", countO, countX)
  }

  const checkEnd = function() {
    type = "Not Ended";
    result = false;
    player = "None";

    this.tie();
    this.row();
    this.column();
    this.diagonal();

    return {
      result,
      type,
      player
    }
  }

  const end = function(player, type) {
    //can see who won, and which type of end (tie, row etc.)
    //reset
    //display win thing for a couple seconds before reset

    setTimeout(gameBoard.reset, 2000)
    message.classList.add("centered")

    if(type == "tie"){
      result = "It's a Draw!"
    } else if(player == "X") {
      result = "X Won!"
    } else if(player == "O") {
      result = "O Won!"
    }
    message.textContent = result
    message.classList.remove("hidden") //make visible

    section.appendChild(message)
    setTimeout(hideMessage, 2000)
    //set timeput making message blank
  }

  const hideMessage = function(){
    game.message.classList.add("hidden")
  }

  const changePlayer = function(player) {
    let result;
    if(player == "X"){
      result = "O"
    } else if (player == "O"){
      result = "X"
    }
    return result;
  }

  return {
    start,
    press,
    buttons,
    spaceFree,
    changePlayer,
    checkEnd,
    tie,
    row,
    column,
    count3,
    diagonal,
    end,
    message
  }
})()

const Players = (type, turn) => { //overall class, subclasses that change x and o? just to practice
  this.type = type;
  this.turn = turn; //keeps track of whether it's their turn? Should be in controller?
  return {
    type
  } //static variables for number of wins?
}


gameBoard.draw(); //draw board first




