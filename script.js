//will return a string representing the computer choice 




function getComputerChoice()
{
    let computerChoices = ["rock", "paper", "scissors"];   //list of options
    let computerChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)]; //random choice from options

    return computerChoice;  
}

//function no longer needed 
/*function getHumanChoice()
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
*/


function playRound(computerChoice = getComputerChoice(),humanChoice= getHumanChoice())
    {
        let introChoices = ("Computer throws..." + computerChoice + " and Human throws..." + humanChoice);
        let result = ''; //no winner as o fyet 
        switch(computerChoice)
        {
        case "rock":
            //human wins 
            if (humanChoice === "paper")
            {
                humanScore++; 
                result = ("You win! Paper beats Rock");
            }
            //computer wins
            else if(humanChoice ==="scissors")
            {
                computerScore++;
                result = ("You lose! Rock beats Scissors");
            }
            //ties 
            else if (humanChoice === "rock")
            {
                result = ("It's a tie");
            }

            break
        case "paper":
            //human win 
            if (humanChoice === "scissors")
            {
                humanScore++;
                result = ("You win! Scissors beat Paper");
            }

            //computer win
            else if (humanChoice === "rock")
            {
                computerScore++;
                result = ("You lose! Paper beats Rock");
            }

            else if (humanChoice === "paper")
            {
                result = ("It's a tie");
            }

            break
        case "scissors":
            //human win
            if (humanChoice === "rock")
            {
                humanScore++;
                result = ("You win! Rock beats Scissors");
            }
            //computer wins
            else if(humanChoice === "paper")
            {
                computerScore++;
                result = ("You lose! Scissors beat Paper");
            }
            else if(humanChoice === "scissors")
            {
                result = ("It's a tie"); 
            }
            break
        }
        updateScoreBoard(computerScore,humanScore)
        addToList(introChoices,result); 
        checkForWinner(computerScore,humanScore,winningScore); 
        
    }


function addToList(introChoices,result){
    const listItem = document.createElement('li');
    listItem.textContent = introChoices+ ": " + result; 
    moves.appendChild(listItem);
}


function updateScoreBoard(computerScore,humanScore) {
    humanPlayerScore.innerText = "Human Score is " + humanScore + '\n';
    computerPlayerScore.innerText = "Computer Score is " + computerScore;
}


function reset(){
    humanScore = 0;
    computerScore = 0;
    updateScoreBoard(computerScore,humanScore) //resets scoreboard as well
    //clear moves list 
    while (moves.firstChild) {
        moves.removeChild(moves.firstChild)
    }
}

function checkForWinner(computerScore,humanScore,winningScore){
    if ((computerScore >= winningScore) || (humanScore >= winningScore)){
        let winner = (humanScore === winningScore) ? "You win!" : (computerScore === winningScore) ? "Computer Wins": "Game is ongoing";
        alert(winner); 
        setTimeout(reset,1000); 
    }
}


    
//global variables
let humanScore = 0;
let computerScore = 0; 
let winningScore = 5; 
//container
const choices = document.getElementById("choices");

//rock button 
const rockButton = document.createElement("button");
rockButton.style.color = "blue"; 
rockButton.classList.add("button");          
rockButton.setAttribute("id","rockButton");
rockButton.textContent="ROCK!";
rockButton.addEventListener("click",()=>{
    playRound(getComputerChoice(),"rock")});


choices.appendChild(rockButton);

//paper button
const paperButton = document.createElement("button");
paperButton.style.color = "red";
paperButton.classList.add("button");
paperButton.setAttribute("id","paperButton");
paperButton.textContent="PAPER!";
paperButton.addEventListener("click",()=>{
    playRound(getComputerChoice(),"paper")});
choices.appendChild(paperButton); 

//scissors button
const scissorsButton = document.createElement("button");
scissorsButton.style.color = "green";
scissorsButton.classList.add("button");
scissorsButton.setAttribute("id","scissorsButton"); 
scissorsButton.textContent="SCISSORS!";
scissorsButton.addEventListener("click",()=>{
    playRound(getComputerChoice(),"scissors")});
choices.appendChild(scissorsButton);


//scoreboard 
const score = document.getElementById("scoreBoard"); 
const scoreBoard = document.createElement("div");

const humanPlayerScore = document.createElement("p");
humanPlayerScore.setAttribute("id","humanScore");
humanPlayerScore.textContent = "Human Score is " + humanScore + '\n';

const computerPlayerScore = document.createElement("p");
computerPlayerScore.setAttribute("id","computerScore"); 
computerPlayerScore.textContent = "Computer Score is " + computerScore;

scoreBoard.appendChild(humanPlayerScore);
scoreBoard.appendChild(computerPlayerScore);

score.appendChild(scoreBoard);



//moves list
const movesList = document.getElementById("moves"); 
const moves = document.createElement("ol");
movesList.appendChild(moves); 




