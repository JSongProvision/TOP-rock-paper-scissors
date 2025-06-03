const choices = document.querySelector("#choices");
const resultsDisplay = document.querySelector ("#results");
const scoreDisplay = document.querySelector("#score");
const welcomeMsg = document.querySelector ("#welcome-msg");
const scoreBox = document.querySelector ("#scoreBox");

let computerScore = 0;
let playerScore = 0;
let round = 1;

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
});

if (round = 5) {
        const gameOver = document.createElement("p")
        gameOver.setAttribute('id','gameOver');
        gameOver.textContent = `==[GAME OVER]==
            FINAL SCORE - Computer: ${computerScore} Player: ${playerScore}`;
        scoreBox.appendChild
        choices.remove();
    }    

    




    // playRound(playerChoice);

// global variables


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

// prompt player for input and validate input is rock,paper, or scissors
function getHumanChoice() {
    let humanChoice = prompt("Enter Rock, Paper, or Scissors");
    if (humanChoice === "Rock" || humanChoice === "Paper" || humanChoice === "Scissors") {
        return humanChoice;
    } else {
        return "User Screwed Up";
    }
}

// pass getComputerChoice and getHumanChoice as parameters to determine a winner in a given round
function determineWinner (computerPick,playerPick) {
    
    if (computerPick === playerPick) {
            // alert( `Tie! You both picked ${computerPick}`);
            return `Tie! You both picked ${computerPick}`;
    }   else if (computerPick === "Rock" && playerPick === "Scissors" || computerPick === "Paper" && playerPick === "Rock" || computerPick === "Scissors" && playerPick == "Paper") {
            computerScore++;
            // alert( `You are a giant loser! ${computerPick} beats ${playerPick}.`);
            return `You are a giant loser! ${computerPick} beats ${playerPick}.`;
    }   else if (playerPick === "Rock" && computerPick === "Scissors" || playerPick === "Paper" && computerPick === "Rock" || playerPick === "Scissors" && computerPick == "Paper") {
            playerScore++;
            // alert( `Congrats, you won! ${playerPick} beats ${computerPick}. I bet your dad is proud of you ... wherever he is... `);
            return `Congrats, you won! ${playerPick} beats ${computerPick}. I bet your dad is proud of you ... wherever he is... `;
    }   else {
            // alert("Something has gone horribly wrong and the game is rigged!");
            return "Something has gone horribly wrong and the game is rigged!";
    }
}

// start a round of the game invoking determine winner function and logging results of the round and the current score standings to user
function playRound (playerChoice) {

    resultsDisplay.textContent = determineWinner( getComputerChoice() , playerChoice );
    scoreDisplay.textContent = `The computer's score is : ${computerScore} and your score is: ${playerScore}`;
}

// function playGame () {}

// playGame();

// console.log(`==[GAME OVER]==
//         FINAL SCORE - Computer: ${computerScore} Player: ${playerScore}`);
// if (computerScore > playerScore) {
//     alert("The computer beat you! You are the suck!");
//     console.log("The computer beat you! You are the suck!");
// } else if (playerScore > computerScore) {
//     alert("YOU WIN THE GAME! I mean, you beat a computer in a game of chance, is that really a victory?");
//     console.log("YOU WIN THE GAME! I mean, you beat a computer in a game of chance, is that really a victory?");
// } else if (playerScore === computerScore) {
//     alert("Its a straight DRAW! I guess you both suck.");
//     console.log("Its a straight DRAW! I guess you both suck.");
// } else {
//     alert("This game is busted all to hell. Apparently you didn't lose, win, or tie. You exist in some sort of quantum lock like schrodingers cat. In really I created a really intersting bug! ");
//     console.log("This game is busted all to hell. Apparently you didn't lose, win, or tie. You exist in some sort of quantum lock like schrodingers cat. In really I created a really intersting bug! ");
// }
