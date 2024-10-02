const container = document.querySelector("#container")

const rock = document.createElement("button")
rock.setAttribute("id", "rock")
rock.textContent = "rock"
const paper = document.createElement("button")
paper.setAttribute("id", "paper")
paper.textContent = "paper"
const scissors = document.createElement("button")
scissors.setAttribute("id", "scissors")
scissors.textContent = "scissors"

container.appendChild(rock)
container.appendChild(paper)
container.appendChild(scissors)


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



let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    let container = document.querySelector("#container")
    let playerSelection = ""
    container.addEventListener("click", (event) => {
        let target = event.target;
        
        if (target.id == "rock") {
            playerSelection = "rock"
        }
        else if (target.id == "paper") {
            playerSelection = "paper"
        }
        else if (target.id == "scissors") {
            playerSelection = "scissors"
         }
   playRound(playerSelection, getComputerChoice())
 } )  
}

function playRound(humanChoice, computerChoice) {
 
const results = document.createElement("div")
    results.setAttribute("id", "results")
    
    if ((humanScore + computerScore) % 5 == 0) {
        if (humanScore > computerScore) {
            results.textContent = 'You win by a score of ' + humanScore + " to " + computerScore + '!'
            container.appendChild(results)
            return}
        if (computerScore > humanScore) {
            results.textContent = 'You lose by a score of ' + humanScore + " to " + computerScore + '!'
            container.appendChild(results)
            return;}

    }

    

    if (humanChoice == computerChoice) {
        humanScore += .5
        computerScore += .5
        const output = document.createTextNode("Tie!")
        results.appendChild(output)
    }

    else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            const output = document.createTextNode("You Lose! Paper covers rock!")
        results.appendChild(output)
            computerScore++
        }
        if (computerChoice == "scissors") {
            const output = document.createTextNode("You Win! Rock crushes scissors!")
            results.appendChild(output)
            humanScore++
         }
        
    }

    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            const output = document.createTextNode("You Win! Paper covers rock!")
            results.appendChild(output)
            humanScore++
        }
        if (computerChoice == "scissors") {
            const output = document.createTextNode("You Lose! Scissors cuts paper!")
            results.appendChild(output)
            computerScore++
         }
        
    }

    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            const output = document.createTextNode("You Lose! Rock crushes scissors!")
            results.appendChild(output)
            computerScore++
        }
        if (computerChoice == "paper") {
            const output = document.createTextNode("You Win! Scissors cuts paper!")
            results.appendChild(output)
            humanScore++
         }
        
    }

    const output2 = document.createTextNode (" Your score: " + humanScore + ", " + "Computer score: " + computerScore);
    results.appendChild(output2)
    container.appendChild(results)

}

getHumanChoice();




