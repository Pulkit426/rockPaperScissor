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

        console.log("Player Wins")
    }

    else if(
    (computerSelection==="Rock" && playerSelection==="Scissors") ||
    (computerSelection==="Paper" && playerSelection==="Rock") ||
    (computerSelection==="Scissors" && playerSelection==="Paper") 
    ){
        console.log("Computer Wins")
    }

    else if(playerSelection === computerSelection)
    console.log("It's a Tie")
}

const playerSelection = "Paper"
const computerSelection = getComputerChoice()
console.log("Player Choice", playerSelection)
console.log("Computer Choice", computerSelection)

playRound(playerSelection,computerSelection)

