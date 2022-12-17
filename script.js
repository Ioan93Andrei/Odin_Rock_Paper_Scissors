let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(choices) {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)].toLowerCase()
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt("Please enter your choice from Rock, Paper, Scissors: ").toLowerCase();
    return playerChoice;
}

let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice(choices);
