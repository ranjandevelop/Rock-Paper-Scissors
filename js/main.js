// App
class App {
  static computerChoice() {
    const rand = Math.floor(Math.random() * 3 + 1);
    if (rand === 1) return "rock";
    else if (rand === 2) return "paper";
    else return "scissors";
  }
  static getWinner(player, computer) {
    if (player === computer) {
      return "draw";
    } else if (player === "rock") {
      if (computer === "paper") {
        return "computer";
      } else {
        return "player";
      }
    } else if (player === "paper") {
      if (computer === "rock") {
        return "player";
      } else {
        return "computer";
      }
    } else if (player === "scissors") {
      if (computer === "paper") {
        return "player";
      } else {
        return "computer";
      }
    }
  }
  static updateScore(scoreBoard) {
    document.querySelector("#playerScore").textContent = scoreBoard.player;
    document.querySelector("#computerScore").textContent = scoreBoard.computer;
  }
  static restartGame() {
    document.querySelector("#playerScore").textContent = "0";
    document.querySelector("#computerScore").textContent = "0";
  }
}

// ScoreBoard
const scoreBoard = {
  player: 0,
  computer: 0,
};

// Show Winner
function showWinner(winner, computerChoice) {
  const modal = document.querySelector("#modal");
  const result = document.querySelector("#result");
  const img = document.querySelector("#resultImg");
  const resultText = document.querySelector("#result-text");
  if (winner === "player") {
    result.textContent = "You Win";
    result.style.color = "green";
    img.src = `./img/hand-${computerChoice}.svg`;
    resultText.textContent = `Computer choose ${computerChoice}!`;
    scoreBoard.player++;
  } else if (winner === "computer") {
    result.textContent = "You Lose";
    result.style.color = "red";
    img.src = `./img/hand-${computerChoice}.svg`;
    resultText.textContent = `Computer choose ${computerChoice}!`;
    scoreBoard.computer++;
  } else {
    result.textContent = "Draw";
    result.style.color = "grey";
    img.src = `./img/hand-${computerChoice}.svg`;
    resultText.textContent = `Computer choose ${computerChoice}!`;
  }
  modal.style.visibility = "visible";
  App.updateScore(scoreBoard);
}

// score
let playerScore = 0,
  computerScore = 0;

// Start Game
document.querySelectorAll(".choice").forEach((choice) =>
  choice.addEventListener("click", (e) => {
    // App.playerChoice(e);
    const playerChoice = e.target.id;
    const computerChoice = App.computerChoice();
    const winner = App.getWinner(playerChoice, computerChoice);
    console.log(playerChoice, computerChoice, winner);
    showWinner(winner, computerChoice);
  })
);

// event listener to close modal
window.addEventListener("click", (e) => {
  if (e.target.id === "modal") {
    modal.style.visibility = "hidden";
  }
});

// event listener to restart game
document.querySelector("#restart").addEventListener("click", () => {
  App.restartGame();
});
