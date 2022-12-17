let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(choices) {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]
    return computerChoice;
}


getComputerChoice(choices);
