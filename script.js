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

function playRound() {
  const playerSelection = prompt(
    "Choose rock, paper, or scissors"
  ).toUpperCase();
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

function game() {
  const rounds = 5;
  let playerScore = 0;

  for (i = 0; i < rounds; i++) {
    playerScore += playRound();
  }

  if (playerScore > rounds / 2) {
    console.log(
      `You win overall. You won ${playerScore} games out of ${rounds} rounds.`
    );
  } else {
    console.log(
      `You lose overall. You won ${playerScore} games out of ${rounds} rounds.`
    );
  }
}

game();
