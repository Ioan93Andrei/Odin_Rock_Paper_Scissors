let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(choices) {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)].toLowerCase()
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt("Please enter your choice from Rock, Paper, Scissors: ").toLowerCase();
    return playerChoice;
}

// Runs the computer and player choices.

let computerChoice = getComputerChoice(choices);
let playerChoice = getPlayerChoice();


// Starts a round of the game.

function playRound(playerChoice, computerChoice){

  switch(playerChoice){

    case "rock":
        if(computerChoice === "rock") { 
            console.log(`Tie, both of you chose ${computerChoice}.`);
        } else if (computerChoice === "paper") {
            console.log(`You lose ${computerChoice} beats ${playerChoice}.`);
        } else {
            console.log(`You win ${playerChoice} beats ${computerChoice}.`);
        }
    break;

    case "paper":
        if(computerChoice === "rock") { 
            console.log(`You win ${playerChoice} beats ${computerChoice}.`);
        } else if (computerChoice === "paper") {
            console.log(`Tie, both of you chose ${computerChoice}.`);
        } else  {
            console.log(`You lose ${computerChoice} beats ${playerChoice}.`);
        }
    break;

    case "scissors":
        if(computerChoice === "rock") { 
            console.log(`You lose ${computerChoice} beats ${playerChoice}.`);
        } else if (computerChoice === "paper") {
            console.log(`You win ${playerChoice} beats ${computerChoice}.`);
        } else {
            console.log(`Tie, both of you chose ${computerChoice}.`);
        }
    break;
  }
}

playRound(playerChoice, computerChoice);