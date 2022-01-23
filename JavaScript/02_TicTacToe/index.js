const gameBoard = (() => {
  let board = ["X", "O", "X", "X", "O", "X", "O", "O", "O"];
  const empty = ["", "", "", "", "", "", "", "", ""];
  const section = document.querySelector("section");
  let boardA = document.createElement("div");

  const draw = function() {
    boardA.classList.add("board");
    for(square in this.board) {
      let div = document.createElement("div");
      div.textContent = this.board[square];
      div.classList.add("square");
      div.dataset.number = square;
  
      boardA.appendChild(div)
    }
    section.appendChild(boardA)
  }

  const del = function() { //delete and recreate board
    section.removeChild(boardA);
    boardA = document.createElement("div");
  }

  const update = function() {
    this.del()
    this.draw();
  }

  const reset = function() { //different colour doesn't matter
    this.board = empty;
    this.update();
  }

  const end = function() {
    this.reset();
    //disable buttons?

  }

  const press = function() { //should this be in board or player?
    //check which player
    //find the div with the metadata
    //find the array item with same index
    //change the value according to player
    //update
    //check for win?
  } 

  return {
    board,
    draw,
    del,
    update,
    reset,
    end

  }
})()

const displayController = (() => {

  return {

  }
})()

const Players = () => { //overall class, subclasses that change x and o? just to practice

  return {

  }
}


gameBoard.draw(); //draw board first
gameBoard.update(); //update board whenever it changes (button clicked, win or reset)




