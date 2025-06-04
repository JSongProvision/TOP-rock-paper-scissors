const choices = document.querySelector("#choices");
const resultsDisplay = document.querySelector ("#results");
const scoreDisplay = document.querySelector("#score");
const welcomeMsg = document.querySelector ("#welcome-msg");
const scoreBox = document.querySelector ("#score-box");

let computerScore = 0;
let playerScore = 0;
let round = 1;

// listen for user click on buttons to set user choice and play the game
choices.addEventListener('click', (event) => {
    const target = event.target;
    let playerChoice = 'Never Set';

    welcomeMsg.remove();

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

    if (round <=5) {
        playRound(playerChoice);
        round++;
    }
    if (round > 5) {
        score.textContent = `==[GAME OVER]==
            FINAL SCORE - Computer: ${computerScore} Player: ${playerScore}`;
        choices.remove();
    }        
});

//generate random computer choice
function getComputerChoice() {
    random = Math.floor(Math.random() * 3);
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
    }   else if (computerPick === "Rock" && playerPick === "Scissors" || computerPick === "Paper" && playerPick === "Rock" || computerPick === "Scissors" && playerPick == "Paper") {
            computerScore++;
            return `You are a giant loser! ${computerPick} beats ${playerPick}.`;
    }   else if (playerPick === "Rock" && computerPick === "Scissors" || playerPick === "Paper" && computerPick === "Rock" || playerPick === "Scissors" && computerPick == "Paper") {
            playerScore++;
            return `Congrats, you won! ${playerPick} beats ${computerPick}. I bet your dad is proud of you ... wherever he is... `;
    }   else {
            return "Something has gone horribly wrong and the game is rigged!";
    }
}

// start a round of the game 
function playRound (playerChoice) {

    resultsDisplay.textContent = determineWinner( getComputerChoice() , playerChoice );
    scoreDisplay.textContent = `The computer's score is : ${computerScore} and your score is: ${playerScore}`;
}