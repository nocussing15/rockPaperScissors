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
    humanChoice=humanChoice.toLowerCase();

    //will force recurssion if choice not one of the three 
    if ((humanChoice != "rock") && (humanChoice!= "paper") && (humanChoice != "scissors"))
    {
        return getHumanChoice(); 
    }

    else
        return humanChoice;
}

function playRound(computerChoice = getComputerChoice(),humanChoice= getHumanChoice())
    {

        switch(computerChoice)
        {
        case "rock":
            //human wins 
            if (humanChoice === "paper")
            {
                humanScore++; 
                console.log("You win! Paper beats Rock");
            }
            //computer wins
            else if(humanChoice ==="scissors")
            {
                computerScore++;
                console.log("You lose! Rock beats Scissors");
            }
            //ties 
            else
            {
                console.log("It's a tie");
            }

            break
        case "paper":
            //human win 
            if (humanChoice === "scissors")
            {
                humanScore++;
                console.log("You win! Scissors beat Paper");
            }

            //computer win
            else if (humanChoice === "rock")
            {
                computerScore++;
                console.log("You lose! Paper beats Rock");
            }

            else
            {
                console.log("It's a tie");
            }

            break
        case "scissors":
            //human win
            if (humanChoice === "rock")
            {
                humanScore++;
                console.log("You win! Rock beats Scissors");
            }
            //computer wins
            else if(humanChoice === "paper")
            {
                computerScore++;
                console.log("You lose! Scissors beat Paper");
            }
            else
            {
                console.log("It's a tie"); 
            }
            break
        }
    }




function playGame()
{
    let humanScore = 0;
    let computerScore = 0;
    
    
    //plays 5 frounds 
    for (let i =0; i < 5; i++)
    {
        playRound(); 
    }

    console.log("Human Score is: " + humanScore);
    console.log("Computer Score is: " +computerScore);
}


