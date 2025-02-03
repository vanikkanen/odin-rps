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

humanScore = 0
computerScore = 0


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

const btns = document.querySelectorAll("button")

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        playRound(btn.textContent, getComputerChoice())
    })
})
