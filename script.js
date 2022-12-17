let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(choices) {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt("Please enter your choice from Rock, Paper, Scissors: ");
    return playerChoice;
}

let PlayerChoice = getPlayerChoice();
let computerChoice = getComputerChoice(choices);
