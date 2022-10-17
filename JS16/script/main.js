let playGame = confirm("Would you like to play rock, paper, or scissors?");
if (playGame) {
  //play
  while (playGame) {
    let playerChoice = prompt("Enter rock, paper, or scissors.");
    if (playerChoice || playerChoice === "") {
      const playerOne = playerChoice.trim().toLowerCase();
      if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
  
        const computerChoice = Math.floor(Math.random() * 3);
        const rpsArray = ["rock", "paper", "scissors"];
        const computer = rpsArray[computerChoice];
  
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
        playGame = confirm("Play Again?");
        if (!playGame) alert("Thank you.");
        continue;
      } else {
        alert ("You did not type properly.");
        continue;
      }
    } else {
      alert("Maybe next time.");
      break;fa
    }
  }
} else {
  alert("Ok, maybe next time.");
}