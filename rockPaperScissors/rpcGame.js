
function computerPlay() { //chooses rock, paper or scissors
    let options = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random()*3);
    return options[choice];
}

function playRound(playerSelect, computerSelect){
    playerSelect = playerSelect.toLowerCase();
    console.log(playerSelect + " VS " + computerSelect)
    if(playerSelect == computerSelect){
        return "It's a tie!";
    } else if(playerSelect == "rock"){
        if(computerSelect == "scissors"){
            return "You win!";
        } else if(computerSelect == "paper") {
            return "You lost!";
        }
    } else if(playerSelect == "scissors"){
        if(computerSelect == "paper"){
            return "You win!";
        } else if(computerSelect == "rock"){
            return "You lost!";
        }
    } else if(playerSelect == "paper"){
        if(computerSelect == "rock"){
            return "You win!";
        } else if(computerSelect == "scissors"){
            return "You lost!"
        }
    } else {
        return "Please enter rock, paper or scissors"
    }

}
function game(){
    let playerPoints = 0;
    let computerPoints = 0;
    for(let i = 0; i < 5; i++){
        let answer = window.prompt(`Enter scissors, paper or rock! This is round ${i} out of 5`);
        let results = playRound(answer, computerPlay());
        if(results == "You win!"){
            playerPoints++;
        } else if(results == "You lost!"){
            computerPoints++;
        }
        console.log(results + " You have " + playerPoints + " and the computer has " + computerPoints);
    }
    if(playerPoints > computerPoints){
        return "You win the game!";
    } else if(playerPoints < computerPoints){
        return "You lost! Try again next time!";
    } else {
        return "There were no winners...this time";
    }

}

console.log(playRound('Rock', computerPlay()));