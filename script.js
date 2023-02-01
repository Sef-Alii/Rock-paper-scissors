document.addEventListener("DOMContentLoaded", () =>{


const choices = ["Rock" , "Paper" , "Scissors"];
let button = document.querySelector(".btn");

button.addEventListener('click',getComputerChoiceAndPlayerChoice)
button.addEventListener('click' ,Game)


function getComputerChoiceAndPlayerChoice(){
   let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log("Computer chose " + computerSelection);
    let playerChoice = prompt();
    console.log("Player chose " + playerChoice)
   playRound(computerSelection, playerChoice)
}

function playRound(computerSelection, playerChoice){
    if(playerChoice === computerSelection){
        console.log("its a draw");
    } else if(playerChoice === "Rock" && computerSelection === "Scissors"){
        console.log("Player wins")
    }else if(playerChoice === "Rock" && computerSelection === "Paper"){
        console.log("Computer wins")
    }else if(playerChoice === "Paper" && computerSelection === "Scissors"){
        console.log("Computer wins")
    }else if(playerChoice === "Paper" && computerSelection === "Rock"){
        console.log("Player wins")
    }else if(playerChoice === "Scissors" && computerSelection === "Rock"){
        console.log("Computer wins")
    }else if(playerChoice === "Scissors" && computerSelection === "Paper"){
        console.log("Player wins")
    }
}
function Game(){
    for(let i = 0; i < 5; i++){
        getComputerChoiceAndPlayerChoice()

    }

}
   
});
