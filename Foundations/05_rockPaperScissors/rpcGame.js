let computerChoice;
let currentChoice;
let playerPoints = 0;
let computerPoints = 0;
const options = document.querySelectorAll('img');
const winMsg = document.querySelector('.win');
const choicesMsg = document.querySelector('.choices');
const scoreMsg = document.querySelector('.score');

options.forEach((option) => {
    option.addEventListener('click', () => {
        option.classList.add('clicked');
        let results = playRound(`${option.id}`, computerPlay());
        currentChoice = option.id;
        if(results == "You win!"){
            playerPoints++;
        } else if(results == "You lost!"){
            computerPoints++;
        }
        if(playerPoints >= 5 || computerPoints >= 5){
            gameEnd();
        } else {
            winMsg.textContent = `${results}`;
            choicesMsg.textContent = `The computer chose ${computerChoice}, and you chose ${currentChoice}`;
            scoreMsg.textContent = `Player: ${playerPoints}. Computer: ${computerPoints}.`;
        }
        setTimeout(() => option.classList.remove('clicked'), 100);
    });
});

function computerPlay() { //chooses rock, paper or scissors
    let options = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random()*3);
    return options[choice];
}

function playRound(playerSelect, computerSelect){
    playerSelect = playerSelect.toLowerCase();
    computerChoice = computerSelect;
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
function gameEnd(){
    let results;
    let score;
    if(playerPoints > computerPoints){
        results = "You win the game!";
        let difference = playerPoints - computerPoints;
        if(difference == 1){
            score = `You won by ${difference} point`
        } else {
            score = `You won by ${difference} points`
        }
        
    } else if(playerPoints < computerPoints){
        results = "You lost! Try again next time!";
        let difference = computerPoints - playerPoints;
        if(difference == 1){
            score = `You lost by ${difference} point`
        } else {
            score = `You lost by ${difference} points`
        }
    } else {
        results = "There were no winners...this time";
    }
    
    winMsg.textContent = results;
    choicesMsg.textContent = `Player had: ${playerPoints} points. Computer had: ${computerPoints} points.`;
    scoreMsg.textContent = score;
    playerPoints = 0;
    computerPoints = 0;

    return results;
}
