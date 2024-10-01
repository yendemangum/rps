function getComputerChoice() {
    let choice = Math.ceil(Math.random()*3);
    if (choice == 1) {
        return ("rock")
    }
    else if (choice == 2) {
        return ("paper")
    }
    else if (choice == 3) {
        return ("scissors")
    }
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors").toLowerCase()
    while (choice != "rock" && choice != "paper" && choice != "scissors") {
        choice = prompt("Type rock, paper, or scissors")
    }
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice == computerChoice) {
        humanScore += .5
        computerScore += .5
        console.log("Tie!")
    }

    else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You Lose! Paper covers rock!")
            computerScore++
        }
        if (computerChoice == "scissors") {
            console.log("You Win! Rock crushes scissors!")
            humanScore++
         }
        
    }

    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You Win! Paper covers rock!")
            humanScore++
        }
        if (computerChoice == "scissors") {
            console.log("You Lose! Scissors cuts paper!")
            computerScore++
         }
        
    }

    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("You Lose! Rock crushes scissors!")
            computerScore++
        }
        if (computerChoice == "paper") {
            console.log("You Win! Scissors cuts paper!")
            humanScore++
         }
        
    }

    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
    playAgain();
}

playRound();

function playAgain() {
    let choice = prompt("Play again?").toLowerCase()
    if (choice == "yes"){
        playRound();
    }
    else if (choice == "no"){
        return;
    }
    else {
        playAgain()
    }
}