const contents = document.querySelector(".contents");
const choices = document.querySelector("#choices");
const resultsDisplay = document.querySelector("#results");
const scoreDisplay = document.querySelector("#score");
const welcomeMsg = document.querySelector("#welcome-msg");
const scoreBox = document.querySelector("#score-box");
const rules = document.querySelectorAll (".rules");

let computerScore = 0;
let playerScore = 0;
let round = 1;

// listen for user click on buttons to set user choice and play the game
choices.addEventListener('click', (event) => {
    const target = event.target;
    let playerChoice = 'Never Set';

    welcomeMsg.remove();
    rules.forEach(element => {
        element.remove();
    });
    

    switch (target.id) {
        case 'rock-btn':
            playerChoice = "Rock";
            break;
        case 'paper-btn':
            playerChoice = "Paper";
            break;
        case 'scissors-btn':
            playerChoice = "Scissors";
            break;
        default:
            playerChoice = "User Screwed Up";
    }

   
    playRound(playerChoice);

    if (round > 5) {
       gameOver();
    }        
});

//generate random computer choice
function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return "Rock";
                break;
        case 1:
            return "Paper";
                break;
        case 2:
            return "Scissors";
                break;
        default:
            return "Shit, we really messed something up here.";
    }          
}

//determine a winner in a given round
function determineWinner (computerPick,playerPick) {
    
    if (computerPick === playerPick) {
            return `Tie! You both picked ${computerPick}`;
    }   else if (computerPick === "Rock" && playerPick === "Scissors" || computerPick === "Paper" && playerPick === "Rock" || computerPick === "Scissors" && playerPick === "Paper") {
            computerScore++;
            return `You are a giant loser! ${computerPick} beats ${playerPick}.`;
    }   else if (playerPick === "Rock" && computerPick === "Scissors" || playerPick === "Paper" && computerPick === "Rock" || playerPick === "Scissors" && computerPick === "Paper") {
            playerScore++;
            return `Congrats, you won! ${playerPick} beats ${computerPick}. I bet your dad is proud of you ... wherever he is... `;
    }   else {
            return "Something has gone horribly wrong and the game is rigged!";
    }
}

// start a round of the game 
function playRound (playerChoice) {
    if (round <= 5 && playerChoice !== "Reset Clicked") {
        resultsDisplay.textContent = determineWinner( getComputerChoice() , playerChoice );
        scoreDisplay.textContent = `The computer's score is : ${computerScore} and your score is: ${playerScore}`;
        round++;
    }
}

function gameOver () {
    scoreDisplay.setAttribute("id","gameOver");
    scoreDisplay.textContent = "==[GAME OVER]==";

    const finalScore = document.createElement("p");
    finalScore.id = "finalScore";
    finalScore.textContent = `FINAL SCORE: Computer: ${computerScore} Player: ${playerScore}`;
    scoreBox.appendChild(finalScore);
   
    const resetBtn = document.createElement("button");
    resetBtn.setAttribute("id","reset-btn");
    resetBtn.textContent = "Play Again";
    choices.remove();
    contents.appendChild(resetBtn);
    resetBtn.addEventListener("click", (event) => {
        resetBtn.remove();
        reset();
    });

function reset () {
    contents.appendChild(welcomeMsg);
    rules.forEach(element => {
        contents.appendChild(element);
    });
    contents.appendChild(choices);
    
    resultsDisplay.textContent = '';
    scoreDisplay.textContent = '';
    scoreDisplay.id = "score-box";
    finalScore.remove();

    round = 1;
    computerScore = 0;
    playerScore = 0;
}

}