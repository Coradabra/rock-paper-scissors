const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const outcomeText = document.querySelector(".outcome-text");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");

rockBtn.addEventListener("click", () => playRound("ROCK"));
paperBtn.addEventListener("click", () => playRound("PAPER"));
scissorsBtn.addEventListener("click", () => playRound("SCISSORS"));

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randNum = Math.random();

  if (randNum > 0.33) {
    return "ROCK";
  } else if (randNum < 0.66) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    outcomeText.textContent = `Draw! You both selected ${playerSelection}`;
  } else {
    if (playerSelection === "ROCK") {
      if (computerSelection === "PAPER") {
        outcomeText.textContent = "You lose! Paper beats rock.";
        computerScore++;
      } else {
        outcomeText.textContent = "You win! Rock beats scissors";
        playerScore++;
      }
    }

    if (playerSelection === "PAPER") {
      if (computerSelection === "SCISSORS") {
        outcomeText.textContent = "You lose! Scissors beats paper.";
        computerScore++;
      } else {
        outcomeText.textContent = "You win! Paper beats rock";
        playerScore++;
      }
    }

    if (playerSelection === "SCISSORS") {
      if (computerSelection === "ROCK") {
        outcomeText.textContent = "You lose! Rock beats scissors.";
        computerScore++;
      } else {
        outcomeText.textContent = "You win! Scissors beats paper";
        playerScore++;
      }
    }
  }

  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}
