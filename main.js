function getComputerChoice () {
    const choices = ["Rock", "Paper", "Scissors"]
    const randomIndex =  Math.floor(Math.random()*3) 

    const computerChoice= choices[randomIndex]
    return computerChoice
}

function playRound(playerSelection, computerSelection){
    if(
    (playerSelection=== "Rock" && computerSelection==="Scissors") || 
    (playerSelection==="Paper" && computerSelection==="Rock") ||
    (playerSelection==="Scissors" && computerSelection==="Paper")) {

        console.log(`Player Wins !! ${playerSelection} beats ${computerSelection}`)
    }

    else if(
    (computerSelection==="Rock" && playerSelection==="Scissors") ||
    (computerSelection==="Paper" && playerSelection==="Rock") ||
    (computerSelection==="Scissors" && playerSelection==="Paper") 
    ){
        console.log(`Computer Wins !! ${computerSelection} beats ${playerSelection}`)
    }

    else if(playerSelection === computerSelection)
    console.log("It's a Tie")
}

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')

console.log(rockButton,paperButton,scissorsButton)
rockButton.addEventListener('click', () => playRound("Rock", getComputerChoice()))
paperButton.addEventListener('click', () => playRound("Paper", getComputerChoice()))
scissorsButton.addEventListener('click', () => playRound("Scissors", getComputerChoice()))


