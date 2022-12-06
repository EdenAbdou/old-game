const game_choices = ['rock', 'paper', 'scissor'];


function getComputerChoice() {
    let pc_choice = game_choices[Math.floor(Math.random() * game_choices.length)];
    return pc_choice
}

function playerChoice() {
    let validateInput = false;
    while(validateInput == false) {
        const choice = prompt("Enter Rock, Paper or Scissor To Play !").toLowerCase()
        if (choice == null ){
            continue;
        } else if (game_choices.includes(choice)){
            return choice
        } else {
            alert('Enter a correct value')
        }
    }
}


function winnerCheck(playerSelection, computerSelection) {

    if( playerSelection == computerSelection) {
        return "Tie";

    } else if (
        (computerSelection == "rock" && playerSelection == "scissor") ||
        (computerSelection == "scissor" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock") )
    {
        return "Computer";
    }
    else {
        return "Player"
    }
}

function playRound(playerSelection, computerSelection) {    
    const result = winnerCheck(playerSelection, computerSelection)
    if (result =="Tie"){
        return "Its a tie !"
    } else if (result == "Computer") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }else {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
}   



function game() {
    let round = 0;
    let scorePlayer = 0;
    let scoreComputer = 0 ;

    for (let i = 0; i <5; i++) {
        const playerSelection = playerChoice();
        const computerSelection = getComputerChoice();

        round ++;
        console.log(`ROUND N: ${round}`);
        console.log(playRound(playerSelection, computerSelection))
        
        if (winnerCheck(playerSelection, computerSelection) == "Player"){
            scorePlayer ++;
            console.log(`Player: ${scorePlayer} | Computer ${scoreComputer}`);
        } else if (winnerCheck(playerSelection, computerSelection) == "Computer"){
            scoreComputer ++;
            console.log(`Player: ${scorePlayer} | Computer ${scoreComputer}`);
        } else {
            console.log(`Player: ${scorePlayer} | Computer ${scoreComputer}`);
        }
        console.log("----------------------------------------")
    }

    console.log("Game Over")

    if(scorePlayer > scoreComputer){
        console.log(`YOU WIN! ----> Player: ${scorePlayer} | Computer ${scoreComputer}`);
    } else if (scoreComputer > scorePlayer){
        console.log(`YOU LOSE! ----> Player: ${scorePlayer} | Computer ${scoreComputer}`);
    } else {
        console.log(`ITS A TIE ----> Player: ${scorePlayer} | Computer ${scoreComputer}`);
    }
}


game();