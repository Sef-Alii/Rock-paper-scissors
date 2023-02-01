document.addEventListener("DOMContentLoaded", () =>{


const choices = ["Rock" , "Paper" , "Scissors"];
let button = document.querySelector(".btn");

button.addEventListener('click',getComputerChoice, playRound)


function getComputerChoice(computerSelection){
   computerSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerSelection)
    return computerSelection
}



function playRound(playerSelection, computerSelection) {
  playerSelection = "rock"
    if(playerSelection === "rock" && computerSelection === "Rock"){
        console.log("It's a DRAW");
    }
  }
   
});
