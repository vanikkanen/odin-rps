function getComputerChoice() {
    let choice = Math.random() * 30
    if (choice < 10) {
        return "rock"
    }
    if (choice < 20) {
        return "paper"
    } 
    else {
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Please insert your choice from rock, paper and scissors")
    return choice
}


function playGame() {
    let humanScore = 0
    let computerScore = 0

    const rounds = 5

    for (let i = 0; i < rounds; i++) {
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
    }

    if (humanScore > computerScore) {
        console.log(`You win the game! You scored ${humanScore} vs ${computerScore}`)
    }
    else if (computerScore > humanScore) {
        console.log(`You lose the game! You scored ${humanScore} vs ${computerScore}`)
    }
    else {
        copnsole.log(`It's a tie! You both scored ${humanScore}`)
    }


    function playRound(humanChoice, computerChoice) {

        humanChoice = humanChoice.toLowerCase()
        // Human wins
        if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
            humanScore += 1
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        }
        else if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "paper" && humanChoice === "rock" || computerChoice === "scissors" && humanChoice === "paper") {
            computerScore += 1
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        }
        else {
            console.log(`It's a tie! Both chose ${humanChoice}`)
        }
    }



}

playGame()
