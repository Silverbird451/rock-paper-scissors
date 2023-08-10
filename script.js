let computerScore = 0;
let playerScore = 0;

const rockBtn = document.getElementById("rock"); 
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const roundrslt = document.getElementById("roundrstl");

const computerScoreBoard = document.getElementById("cscore")
const playerScoreBoard = document.getElementById("pscore")

const playerImgScrBoard = document.getElementById("playerImgScrBoard");
const computerImgScrBoard = document.getElementById("computerImgScrBoard");

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));

const restartBtn = document.getElementById("restartbtn");

restartBtn.addEventListener("click", () => restart())


function playRound(pchoise){
    let playerChoice = pchoise;
    let computerChoice = getComputerChoice();

    const computerWon = "The computer Won the round!";
    const playerWon = "You won the round!"
    
    if (computerChoice === "rock" &&  playerChoice === "scissors"){
        computerScore += 1
        console.log(`You lost the round, your score: ${playerScore}/5, computer score: ${computerScore}/5`)
        roundrslt.textContent = computerWon;

    } else if (computerChoice === "paper" &&  playerChoice === "rock"){
        computerScore += 1
        console.log(`You lost the round, your score: ${playerScore}/5, computer score: ${computerScore}/5`)
        roundrslt.textContent = computerWon;

    } else if (computerChoice === "scissors" &&  playerChoice === "paper"){
        computerScore += 1
        console.log(`You lost the round, your score: ${playerScore}/5, computer score: ${computerScore}/5`)
        roundrslt.textContent = computerWon;
    
    } else if (playerChoice === "paper" &&  computerChoice=== "rock"){
        playerScore += 1
        console.log(`You won the round, your score: ${playerScore}/5, computer score: ${computerScore}/5`)
        roundrslt.textContent = playerWon;

    } else if (playerChoice === "rock" &&  computerChoice=== "scissors"){
        playerScore += 1
        console.log(`You won the round, your score: ${playerScore}/5, computer score: ${computerScore}/5`)
        roundrslt.textContent = playerWon;

    } else if (playerChoice === "scissors" &&  computerChoice=== "paper"){
        playerScore += 1
        console.log(`You won the round, your score: ${playerScore}/5, computer score: ${computerScore}/5`)
        roundrslt.textContent = playerWon;
    } else {
        console.log("It is a draw!")
        roundrslt.textContent = "It's a draw";
    }
    writeOnScoreboard(computerChoice, playerChoice)
}

function writeOnScoreboard(cChoise, pChoise){

    let pscr = `Player: ${playerScore}`;
    let cscr= `Computer: ${computerScore}`;

    playerScoreBoard.textContent = pscr;
    computerScoreBoard.textContent = cscr;

    let playerImgToPlace ;
    let computerImgToPlace ;

    if (pChoise === "rock") {
        playerImgToPlace = "images/rock.png";
    } else if (pChoise === "paper") {
        playerImgToPlace = "images/paper.png";
    } else if (pChoise === "scissors") {
        playerImgToPlace = "images/scissors.png";
    }


    if (cChoise === "rock") {
        computerImgToPlace = "images/rock.png";
    } else if (cChoise === "paper") {
        computerImgToPlace = "images/paper.png";
    } else if (cChoise === "scissors") {
        computerImgToPlace = "images/scissors.png";
    }
    
    playerImgScrBoard.src = playerImgToPlace;

    computerImgScrBoard.src = computerImgToPlace;

    checkIfWon()

    //checkScores()
}

//function checkScores(){
    //if (computerScore === 5){
        //console.log("The computer has won the game!!")
        //reStart()
    //} else if (playerScore === 5){
        //console.log("The player has won the game!!")
        //reStart()
    //}
//}

function getComputerChoice(){
    let randomNum = 1 + Math.floor(Math.random() * 3);
    let choice;
    if (randomNum === 1){
        choice = "rock"
    } else if (randomNum === 2){
        choice = "paper"
    }else if (randomNum === 3){
        choice = "scissors"
    }
    return choice;
}

//function getPlayerChoice(){
    //let playerInput = prompt("Chose between: Rock, Paper or Scissors");
    //let choice = playerInput.toLowerCase();
    //if ((choice === "paper") || (choice === "rock") || (choice === "scissors")){
        //return choice; 
    //} else {
        //console.log("Option not valid.")
       //getPlayerChoice()
    //}
//}

//function reStart(){
    //let input = prompt("Do you want to play again? Enter (yes) or (no)");
    //let answer = input.toLowerCase();
    //if (answer === "yes"){
       //computerScore = 0
        //playerScore = 0
        //console.log("Game restarted.")
        //checkScores()
    //} else if (answer === "no"){
        //console.log("Game ended.")
    //} else {
        //console.log("Invalid Input.")
        //reStart()
    //} 
//}

function checkIfWon(){
    if (computerScore === 5){
        roundrslt.textContent = "The computer won the Game!!";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    } else if (playerScore === 5) {
        roundrslt.textContent = "You won the Game!!";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }

}

function restart() {
    computerScore = 0;
    playerScore = 0;
    roundrslt.textContent = "Select an Element";
    playerImgScrBoard.src = "images/empty.png";
    computerImgScrBoard.src = "images/empty.png";
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    playerScoreBoard.textContent = `Player: ${playerScore}`;
    computerScoreBoard.textContent = `Computer: ${computerScore}`;
}

