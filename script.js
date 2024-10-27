//will return a string representing the computer choice 
function getComputerChoice()
{
    let computerChoices = ["rock", "paper", "scissors"];   //list of options
    let computerChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)]; //random choice from options

    return computerChoice;  
}

function getHumanChoice()
{

    let humanChoice = prompt("Rock, Paper, or Scissors?");

    return humanChoice; 
}


function playRound(computerChoice,humanChoice)
{
    
}

let humanScore = 0;
let computerScore = 0;
