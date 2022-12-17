const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(choices) {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)].toLowerCase()
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt("Please enter your choice from Rock, Paper, Scissors: ").toLowerCase();
    return playerChoice;
}

// Runs the computer and player choices.

const computerChoice = getComputerChoice(choices);
const playerChoice = getPlayerChoice();


// Starts a round of the game.

function playRound(playerChoice, computerChoice){

  switch(playerChoice){

    case "rock":
        if(computerChoice === "rock") { 
            console.log(`Tie, both of you chose ${computerChoice}.`);
        } else if (computerChoice === "paper") {
            let computerWin = console.log(`You lose ${computerChoice} beats ${playerChoice}.`);
            return computerWin;
        } else {
            let win = console.log(`You win ${playerChoice} beats ${computerChoice}.`);
            return win;
        }
    break;

    case "paper":
        if(computerChoice === "rock") { 
            let win =console.log(`You win ${playerChoice} beats ${computerChoice}.`);
            return win;
        } else if (computerChoice === "paper") {
            console.log(`Tie, both of you chose ${computerChoice}.`);
        } else  {
            let computerWin = console.log(`You lose ${computerChoice} beats ${playerChoice}.`);
            return computerWin;
        }
    break;

    case "scissors":
        if(computerChoice === "rock") { 
            let computerWin = console.log(`You lose ${computerChoice} beats ${playerChoice}.`);
            return computerWin;
        } else if (computerChoice === "paper") {
            let win = console.log(`You win ${playerChoice} beats ${computerChoice}.`);
            return win;
        } else {
            console.log(`Tie, both of you chose ${computerChoice}.`);
        }
    break;
  }
}

function game(){
    for(let i = 0; i <= 4; i++) {
        getPlayerChoice();
        playRound(playerChoice, computerChoice);
    }
}

game();