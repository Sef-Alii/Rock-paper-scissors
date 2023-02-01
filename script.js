document.addEventListener("DOMContentLoaded", () =>{


const choices = ["rock" , "paper" , "scissors"];
let button = document.querySelector(".btn");

button.addEventListener('click',getComputerChoiceAndPlayerChoice)
button.addEventListener('click' ,Game)


function getComputerChoiceAndPlayerChoice(){
   let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    let playerChoice = prompt().toLowerCase();
    console.log("Player chose " + playerChoice)
    console.log("Computer chose " + computerSelection);
   playRound(computerSelection, playerChoice)
}

function playRound(computerSelection, playerChoice){
    if(playerChoice === computerSelection){
        console.log("its a draw");
    } else if(playerChoice === "rock" && computerSelection === "scissors"){
        console.log("Player wins")
    }else if(playerChoice === "rock" && computerSelection === "paper"){
        console.log("Computer wins")
    }else if(playerChoice === "paper" && computerSelection === "scissors"){
        console.log("Computer wins")
    }else if(playerChoice === "paper" && computerSelection === "rock"){
        console.log("Player wins")
    }else if(playerChoice === "scissors" && computerSelection === "rock"){
        console.log("Computer wins")
    }else if(playerChoice === "scissors" && computerSelection === "paper"){
        console.log("Player wins")
    }
}
function Game(){
    for(let i = 0; i < 5; i++){
        getComputerChoiceAndPlayerChoice()

    }

}
   
});
