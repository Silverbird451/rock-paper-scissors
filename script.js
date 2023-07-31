let computerScore = 0;
let playerScore = 0;

function playRound(){
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    if (computerChoice === "rock" &&  playerChoice === "scissors"){
        computerScore += 1
        console.log(`You lost the round, your score: ${playerScore}/5, computer score: ${computerScore}/5`)

    } else if (computerChoice === "paper" &&  playerChoice === "rock"){
        computerScore += 1
        console.log(`You lost the round, your score: ${playerScore}/5, computer score: ${computerScore}/5`)

    } else if (computerChoice === "scissors" &&  playerChoice === "paper"){
        computerScore += 1
        console.log(`You lost the round, your score: ${playerScore}/5, computer score: ${computerScore}/5`)
    
    } else if (playerChoice === "paper" &&  computerChoice=== "rock"){
        playerScore += 1
        console.log(`You won the round, your score: ${playerScore}/5, computer score: ${computerScore}/5`)

    } else if (playerChoice === "rock" &&  computerChoice=== "scissors"){
        playerScore += 1
        console.log(`You won the round, your score: ${playerScore}/5, computer score: ${computerScore}/5`)

    } else if (playerChoice === "scissors" &&  computerChoice=== "paper"){
        playerScore += 1
        console.log(`You won the round, your score: ${playerScore}/5, computer score: ${computerScore}/5`)
    } else {
        console.log("It is a draw!")
    }
    checkScores()
}

function checkScores(){
    if (computerScore === 5){
        console.log("The computer has won the game!!")
        reStart()
    } else if (playerScore === 5){
        console.log("The player has won the game!!")
        reStart()
    } else {
        playRound()
    }
    
}

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

function getPlayerChoice(){
    let playerInput = prompt("Chose between: Rock, Paper or Scissors");
    let choice = playerInput.toLowerCase();
    if ((choice === "paper") || (choice === "rock") || (choice === "scissors")){
        return choice; 
    } else {
        console.log("Option not valid.")
        getPlayerChoice()
    }
}

function reStart(){
    let input = prompt("Do you want to play again? Enter (yes) or (no)");
    let answer = input.toLowerCase();
    if (answer === "yes"){
        computerScore = 0
        playerScore = 0
        console.log("Game restarted.")
        checkScores()
    } else if (answer === "no"){
        console.log("Game ended.")
    } else {
        console.log("Invalid Input.")
        reStart()
    } 
}

checkScores()