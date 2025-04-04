// global variables
let computerScore = 0;
let playerScore = 0;
let round = 1;

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
            alert( `Tie! You both picked ${computerPick}`);
            return `Tie! You both picked ${computerPick}`;
    }   else if (computerPick === "Rock" && playerPick === "Scissors" || computerPick === "Paper" && playerPick === "Rock" || computerPick === "Scissors" && playerPick == "Paper") {
            computerScore++;
            alert( `You are a giant loser! ${computerPick} beats ${playerPick}.`);
            return `You are a giant loser! ${computerPick} beats ${playerPick}.`;
    }   else if (playerPick === "Rock" && computerPick === "Scissors" || playerPick === "Paper" && computerPick === "Rock" || playerPick === "Scissors" && computerPick == "Paper") {
            playerScore++;
            alert( `Congrats, you won! ${playerPick} beats ${computerPick}. I bet your dad is proud of you ... wherever he is... `);
            return `Congrats, you won! ${playerPick} beats ${computerPick}. I bet your dad is proud of you ... wherever he is... `;
    }   else {
            alert("Something has gone horribly wrong and the game is rigged!");
            return "Something has gone horribly wrong and the game is rigged!";
    }
}

// start a round of the game invoking determine winner function and logging results of the round and the current score standinds to user
function playRound () {
    console.log(determineWinner( getComputerChoice() , getHumanChoice() ));
    alert(`The computer's score is : ${computerScore} and your score is: ${playerScore}`);
    console.log (`The computer's score is : ${computerScore} and your score is: ${playerScore}`);
}

function playGame () {
    
    for (i=1; i <= 5; i++ ) {
        alert(`ROUND ${round}: FIGHT!`);
        console.log(`==ROUND ${round} RESULTS==`);
        playRound();
        round++;
    }

}

playGame();
alert(`==[GAME OVER]==
        FINAL SCORE - Computer: ${computerScore} Player: ${playerScore}`);
console.log(`==[GAME OVER]==
        FINAL SCORE - Computer: ${computerScore} Player: ${playerScore}`);
if (computerScore > playerScore) {
    alert("The computer beat you! You are the suck!");
    console.log("The computer beat you! You are the suck!");
} else if (playerScore > computerScore) {
    alert("YOU WIN THE GAME! I mean, you beat a computer in a game of chance, is that really a victory?");
    console.log("YOU WIN THE GAME! I mean, you beat a computer in a game of chance, is that really a victory?");
} else if (playerScore === computerScore) {
    alert("Its a straight DRAW! I guess you both suck.");
    console.log("Its a straight DRAW! I guess you both suck.");
} else {
    alert("This game is busted all to hell. Apparently you didn't lose, win, or tie. You exist in some sort of quantum lock like schrodingers cat. In really I created a really intersting bug! ");
    console.log("This game is busted all to hell. Apparently you didn't lose, win, or tie. You exist in some sort of quantum lock like schrodingers cat. In really I created a really intersting bug! ");
}



// Step 4: Declare the players score variables
// Your game will keep track of the players score. You will write variables to keep track of the players score.

// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.
// Step 5: Write the logic to play a single round
// Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.
// Example code:

// function playRound(humanChoice, computerChoice) {
//   // your code here!
// }

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);
// Step 6: Write the logic to play the entire game
// Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

// Create a new function named playGame.
// Move your playRound function and score variables so that they’re declared inside of the new playGame function
// Play 5 rounds by calling playRound 5 times.
// Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
// Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
// If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.