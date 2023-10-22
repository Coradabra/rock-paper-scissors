const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const outcomeText = document.querySelector(".outcome-text");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");

const playAgainBtn = document.querySelector(".conclusion button");
const conclusionText = document.querySelector(".conclusion p");

rockBtn.addEventListener("click", () => playRound("ROCK"));
paperBtn.addEventListener("click", () => playRound("PAPER"));
scissorsBtn.addEventListener("click", () => playRound("SCISSORS"));
playAgainBtn.addEventListener("click", () => resetGame());

let playerScore = 0;
let computerScore = 0;
let playing = true;
let message = "";

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

  if (playing) {
    if (playerSelection === computerSelection) {
      message = `Draw! You both selected ${playerSelection.toLowerCase()}.`;
    } else {
      if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
          message = "You lose! Paper beats rock.";
          computerScore++;
        } else {
          message = "You win! Rock beats scissors";
          playerScore++;
        }
      }

      if (playerSelection === "PAPER") {
        if (computerSelection === "SCISSORS") {
          message = "You lose! Scissors beats paper.";
          computerScore++;
        } else {
          message = "You win! Paper beats rock";
          playerScore++;
        }
      }

      if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK") {
          message = "You lose! Rock beats scissors.";
          computerScore++;
        } else {
          message = "You win! Scissors beats paper";
          playerScore++;
        }
      }
    }
  }

  updateUi(playerScore, computerScore, message);
  checkWinner();
}

function updateUi(playerScore, computerScore, message) {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  outcomeText.textContent = message;
}

function checkWinner() {
  if (playerScore >= 5) {
    playing = false;
    conclusionText.textContent = "Condragulations! You win!";
    playAgainBtn.hidden = false;
  }
  if (computerScore >= 5) {
    playing = false;
    conclusionText.textContent = "You lose! Better luck next time.";
    playAgainBtn.hidden = false;
  }
  return;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playing = true;

  conclusionText.textContent = "";
  playAgainBtn.hidden = true;

  updateUi(0, 0, "Make your choice");
}
