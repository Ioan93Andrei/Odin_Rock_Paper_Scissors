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
                playerScore++;
                return (`You win ${playerChoice} beats ${computerChoice}.`);
            } else if (computerChoice === "paper") {
                computerScore++;
                return (`You lose ${computerChoice} beats ${playerChoice}.`);
            } else {
                return (`Tie, you have both chosen ${computerChoice}.`);
            }

        case "paper":
            if(computerChoice === "rock") { 
                playerScore++;
                return (`You win ${playerChoice} beats ${computerChoice}.`);
            } else if (computerChoice === "scissors") {
                computerScore++;
                return (`You lose ${computerChoice} beats ${playerChoice}.`);
            } else  {
                return (`Tie, you have both chosen ${computerChoice}.`);
            }
    
        case "scissors":
            if(computerChoice === "paper") { 
                playerScore++;
                return (`You win ${playerChoice} beats ${computerChoice}.`);
            } else if (computerChoice === "rock") {
                computerScore++;
                return (`You lose ${computerChoice} beats ${playerChoice}.`);
            } else {
                return (`Tie, you have both chosen ${computerChoice}.`);
            }
    }
}

// Function that plays 5 rounds of the game.

function game() {

    while (playerScore != 5 && computerScore != 5) {

        computerChoice = choices[Math.floor(Math.random() * choices.length)].toLowerCase()
        playerChoice = prompt("Please enter your choice from Rock, Paper, Scissors: ").toLowerCase();

        result = playRound(playerChoice, computerChoice);
        console.log(result);
        console.log(`Player: ${playerScore}`);
        console.log(`Computer: ${computerScore}`);
    }

}
game();