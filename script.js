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

let humanScore = 0
let computerScore = 0

let gameOver = false

function playRound(humanChoice, computerChoice) {

    if (gameOver) return

    humanChoice = humanChoice.toLowerCase()
    // Human wins
    if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1
        scoreToUi(`You win! ${humanChoice} beats ${computerChoice}`)
    }
    else if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "paper" && humanChoice === "rock" || computerChoice === "scissors" && humanChoice === "paper") {
        computerScore += 1
        scoreToUi(`You lose! ${computerChoice} beats ${humanChoice}`)
    }
    else {
        scoreToUi(`It's a tie! Both chose ${humanChoice}`)
    }
    checkGameEnd()
}

const btns = document.querySelectorAll("button")

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        playRound(btn.textContent, getComputerChoice())
    })
})

function checkGameEnd() {
    if (humanScore === 5) {
        scoreToUi("You have won the machine!")
        gameOver = true
    }
    else if (computerScore === 5) {
        scoreToUi("The computer has defeated you! Better luck next time")
        gameOver = true
    }
}

function scoreToUi(prompt) {

    const div = document.querySelector("#score")
    div.textContent = prompt

    const human = document.querySelector("#human")
    human.textContent = `Human - ${humanScore}`
    const computer = document.querySelector("#computer")
    computer.textContent = `Computer - ${computerScore}`
}
