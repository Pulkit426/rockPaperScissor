let playerCurrentScore = 0
let computerCurrentScore = 0

function getComputerChoice () {
    const choices = ["Rock", "Paper", "Scissors"]
    const randomIndex =  Math.floor(Math.random()*3) 

    const computerChoice= choices[randomIndex]
    return computerChoice
}

function playRound(playerSelection, computerSelection){
    playerSelection =playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    playerSign.textContent = getSign(playerSelection)
    computerSign.textContent = getSign(computerSelection)


    if(
    (playerSelection=== "Rock" && computerSelection==="Scissors") || 
    (playerSelection==="Paper" && computerSelection==="Rock") ||
    (playerSelection==="Scissors" && computerSelection==="Paper")) {
        playerCurrentScore+=1
        playerScoreCount.textContent = playerCurrentScore

        scoreInfo.textContent = `Player Wins !! ${playerSelection} beats ${computerSelection}`

        console.log(`Player Wins !! ${playerSelection} beats ${computerSelection}`)
    }

    else if(
    (computerSelection==="Rock" && playerSelection==="Scissors") ||
    (computerSelection==="Paper" && playerSelection==="Rock") ||
    (computerSelection==="Scissors" && playerSelection==="Paper") 
    ){
        computerCurrentScore+=1
        computerScoreCount.textContent = computerCurrentScore

        scoreInfo.textContent = `Computer Wins !! ${computerSelection} beats ${playerSelection}`
        console.log(`Computer Wins !! ${computerSelection} beats ${playerSelection}`)
    }

    else if(playerSelection === computerSelection){
        scoreInfo.textContent = "It's a Tie"
        console.log("It's a Tie")

    }
    
}

function getSign(choice) {

    switch(choice){
        case "Rock": return "✊"
        break
        case "Paper": return "✋"
        break
        case "Scissors": return "✌️"
        break
        default: return      
    }

}
const buttons = document.querySelectorAll('div>button')
buttons.forEach(button => button.addEventListener('click', () => playRound(`${button.className}`, getComputerChoice())))

const playerSign = document.querySelector('#playerSign')
const computerSign = document.querySelector('#computerSign')
console.log(playerSign, computerSign)

const playerScoreCount = document.querySelector('#playerScoreCount')
const computerScoreCount = document.querySelector('#computerScoreCount')
const scoreInfo = document.querySelector('.score-info')

