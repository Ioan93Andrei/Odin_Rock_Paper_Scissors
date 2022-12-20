const choices = ["Rock", "Paper", "Scissors"];

// Runs the computer and player choices.
let computerChoice = choices[Math.floor(Math.random() * choices.length)].toLowerCase()
let playerChoice = prompt("Please enter your choice from Rock, Paper, Scissors: ").toLowerCase();

// Counter variables.
let computerScore = 0;
let playerScore = 0;

// Starts a round of the game.

function playRound(playerChoice, computerChoice){

    switch(playerChoice){

        case "rock":
            if(computerChoice === "scissors") { 
                return win = (`You win ${playerChoice} beats ${computerChoice}.`);
            } else if (computerChoice === "paper") {
                return lose = (`You lose ${computerChoice} beats ${playerChoice}.`);
            } else {
                return (`Tie, you have both chosen ${computerChoice}.`);
            }

        case "paper":
            if(computerChoice === "rock") { 
                return win = (`You win ${playerChoice} beats ${computerChoice}.`);
            } else if (computerChoice === "scissors") {
                return lose = (`You lose ${computerChoice} beats ${playerChoice}.`);
            } else  {
                return tie = (`Tie, you have both chosen ${computerChoice}.`);
            }
    
        case "scissors":
            if(computerChoice === "paper") { 
                return win = (`You win ${playerChoice} beats ${computerChoice}.`);
            } else if (computerChoice === "rock") {
                return lose = (`You lose ${computerChoice} beats ${playerChoice}.`);
            } else {
                return tie = (`Tie, you have both chosen ${computerChoice}.`);
            }
    }
}

// Function that checks for win or lose and increments either the player or computer score.

function checkWin(result) {

    if (result.includes("win")) {
        return playerScore++;
    } else if (result.includes("lose")) {
        return computerScore++;
    } 
}

// Function that plays 5 rounds of the game.

function game() {

    for (let i = 0; i < 5; i++) {

        computerChoice = choices[Math.floor(Math.random() * choices.length)].toLowerCase()
        let playerChoice = prompt("Please enter your choice from Rock, Paper, Scissors: ").toLowerCase();

        result = playRound(playerChoice, computerChoice);
        checkWin(result);
        console.log(result);
        console.log(`Player: ${playerScore}`);
        console.log(`Computer: ${computerScore}`);
    }
}

game();