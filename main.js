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

function game(){
    for(let i=1;i<=5;i++){
        console.log(`ROUND ${i}`)
        const playerSelection = prompt("Enter your choice")
        const computerSelection = getComputerChoice()
        console.log("Player Choice", playerSelection)
        console.log("Computer Choice", computerSelection)

        playRound(playerSelection,computerSelection)

    }
}

game()



