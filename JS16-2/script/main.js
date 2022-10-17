const initGame = () => {
  const startGame = confirm("Would you like to play rock, paper, or scissors?");
  startGame ? playGame() : alert("Ok, maybe next time.");
};

const playGame = () => {
  while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
    if (playerChoice === "") {
      invalidChoice();
      continue;
    }
    if (!playerChoice) {
      decideNotToPlay();
      break;
    }

    playerChoice = evaluatePlayerChoice(playerChoice);

    if (!playerChoice) {
      invalidChoice();
      continue;
    }

    const computerChoice = getComputerChoice();

    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result);

    if (askToPlayAgain()) {
      continue;
    } else {
      thanksForPlaying();
      break;
    }
  }
};

const getPlayerChoice = () => {
  return prompt("Please enter rock, paper, or scissors.");
};

const formatPlayerChoice = (playerChoice) => {
  if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase();
  } else {
    return playerChoice;
  }
};

const invalidChoice = () => {
  alert ("You did not type properly.");
};

const decideNotToPlay = () => {
  alert ("Maybe next time.");
};

const evaluatePlayerChoice = (playerChoice) => {
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return playerChoice;
  } else{
    return false;
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const rpsArray = ["rock", "paper", "scissors"];
  return rpsArray[randomNumber];
};

const determineWinner = (player, computer) => {
  const winner =
    player === computer
    ? "Tie game!"
    : player === "rock" && computer === "paper"
    ? `player: ${player}\nComputer: ${computer}\nComputer wins!`
    : player === "paper" && computer === "scissors"
    ? `player: ${player}\nComputer: ${computer}\nComputer wins!`
    : player === "scissors" && computer === "rock"
    ? `player: ${player}\nComputer: ${computer}\nComputer wins!`
    : `player: ${player}\nComputer: ${computer}\nPlayer wins!`;

  return winner;
};

const displayResult = (result) => {
  alert(result);
};

const askToPlayAgain = () => {
  return confirm("Play Again?");
};

const thanksForPlaying = () => {
  alert("Thank you. See you later.");
}

initGame();