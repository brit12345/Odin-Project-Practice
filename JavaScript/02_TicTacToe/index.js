//players to put in their names, include a button to start/restart the game
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

      if(div.textContent == "X"){ //colouring and tab index
        div.tabIndex = "-1";
        div.style.background = "rgb(253, 228, 175)"
        div.style.borderBottom = "100px"
      } else if(div.textContent == "O"){
        div.tabIndex = "-1";
        div.style.background = "rgb(175, 225, 253)"
      } else {
        div.tabIndex = "0";
        div.style.background = "white"
      }
     

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
  let player1;
  let player2;
  let turn = "X"
  let message = document.createElement("p")
  const startBtn = document.querySelector(".start")
  const resetBtn = document.querySelector(".reset")

  const start = function() {
    //initialise players depending on their selection?
    const p1 = document.querySelector("input#p1")
    const p2 = document.querySelector("input#p2")
    game.player1 = Player("X", true, p1.value)
    game.player2 = Player("O", false, p2.value)
    const startBtn = document.querySelector(".start")
    const resetBtn = document.querySelector(".reset")
    startBtn.classList.toggle("hide")
    resetBtn.classList.toggle("hide")
    const inputX = document.querySelector("div#X")
    inputX.style.borderBottom = "black 3px solid"
  }

  const buttons = function() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener("click", () => press(square))
    })

    startBtn.addEventListener("click", () => {
      start()
      const score = document.querySelector("#score")
      score.textContent = "Score: " + game.player1.score + ":" + game.player2.score;
    })
    resetBtn.addEventListener("click", () => {
      gameBoard.reset()
      game.player1.score = 0;
      game.player2.score = 0;  
      const score = document.querySelector("#score")
      score.textContent = "Score: " + game.player1.score + ":" + game.player2.score;
    })
    

  }

  const press = function(square) {
    if(spaceFree(square.dataset.index)){ //make sure space is free
      gameBoard.board[square.dataset.index] = turn;
      square.textContent = turn;
      const inputX = document.querySelector("div#X")
      const inputO = document.querySelector("div#O")
      turn = changePlayer(turn)
      if(turn == "X"){
        inputX.style.borderBottom = "black 3px solid"
        inputO.style.borderBottom = "none"

      } else if (turn == "O"){
        inputO.style.borderBottom = "black 3px solid"
        inputX.style.borderBottom = "none"
      
      }
      
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
      result = (game.player1.name || "X") + " Won!"
      game.player1.score++
    } else if(player == "O") {
      result = (game.player2.name || "O") + " Won!"
      game.player2.score++
    }
    const score = document.querySelector("#score")
    score.textContent = "Score: " + game.player1.score + ":" + game.player2.score;
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
    message,
    player1,
    player2,
    startBtn,
    resetBtn
  }
})() //end game

const Player = (type, turn, name) => { //overall class, subclasses that change x and o? just to practice
  this.type = type;
  this.name = name;
  this.turn = turn; 
  this.score = 0;
  return {
    type,
    name,
    turn,
    score
  } //static variables for number of wins?
}
game.player1 = Player("X", true, p1.value)
game.player2 = Player("O", false, p2.value)
gameBoard.draw(); //draw board first




