let playGame = confirm("Would you like to play rock, paper, or scissors?");
if (playGame) {
  //play
  let playerChoice = prompt("Enter rock, paper, or scissors.");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {

      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer = computerChoice === 1 ? "rock"
        : computerChoice === 2 ? "paper" 
        : "scissors";

      let result =
      playerOne === computer
        ? "Tie game!"
        : playerOne === "rock" && computer === "paper"
        ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
        : playerOne === "paper" && computer === "scissors"
        ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
        : playerOne === "scissors" && computer === "rock"
        ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
        : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
      alert(result);
      let playAgain = confirm("Play Again?")
      playAgain ? location.reload() : alert("Thank you.")


    } else {
      alert ("You did not type properly")
    }
  } else {
    alert("Maybe nexttime.");
  }
} else {
  alert("Ok, maybe next time.");
}