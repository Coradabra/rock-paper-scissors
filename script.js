const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", playRound("ROCK"));
paperBtn.addEventListener("click", playRound("PAPER"));
scissorsBtn.addEventListener("click", playRound("SCISSORS"));

const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");

function getComputerChoice() {
  const randNum = Math.random() * 3;

  if (randNum === 1) {
    return "ROCK";
  } else if (randNum === 2) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  let playerScore = 0;

  if (playerSelection === computerSelection) {
    console.log(`Draw! You both selected ${playerSelection}`);
  } else {
    if (playerSelection === "ROCK") {
      if (computerSelection === "PAPER") {
        console.log("You lose! Paper beats rock.");
      } else {
        playerScore++;
        console.log("You win! Rock beats scissors");
      }
    }

    if (playerSelection === "PAPER") {
      if (computerSelection === "SCISSORS") {
        console.log("You lose! Scissors beats paper.");
      } else {
        playerScore++;
        console.log("You win! Paper beats rock");
      }
    }

    if (playerSelection === "SCISSORS") {
      if (computerSelection === "ROCK") {
        console.log("You lose! Rock beats scissors.");
      } else {
        playerScore++;
        console.log("You win! Scissors beats paper");
      }
    }
  }

  return playerScore;
}
