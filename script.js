const CHOICES = {
  rock: { icon: "✊", beats: "scissors" },
  paper: { icon: "✋", beats: "rock" },
  scissors: { icon: "✌️", beats: "paper" },
};

const choiceNames = Object.keys(CHOICES);
const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");
const playerIconElement = document.querySelector("#player-icon");
const computerIconElement = document.querySelector("#computer-icon");
const playerChoiceElement = document.querySelector("#player-choice");
const computerChoiceElement = document.querySelector("#computer-choice");
const playerCard = document.querySelector("#player-card");
const computerCard = document.querySelector("#computer-card");
const resultElement = document.querySelector("#result");
const resetButton = document.querySelector("#reset-button");

let playerScore = 0;
let computerScore = 0;

function titleCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choiceNames.length);
  return choiceNames[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "tie";
  }

  return CHOICES[playerChoice].beats === computerChoice ? "win" : "loss";
}

function animateMoveCards() {
  playerCard.classList.remove("is-revealing");
  computerCard.classList.remove("is-revealing");
  void playerCard.offsetWidth;
  playerCard.classList.add("is-revealing");
  computerCard.classList.add("is-revealing");
}

function updateResult(outcome) {
  const messages = {
    win: "You won this round! Nice choice.",
    loss: "Computer won this round. Try again!",
    tie: "It's a tie — great minds think alike.",
  };

  resultElement.dataset.outcome = outcome;
  resultElement.textContent = messages[outcome];
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  const outcome = determineWinner(playerChoice, computerChoice);

  playerIconElement.textContent = CHOICES[playerChoice].icon;
  computerIconElement.textContent = CHOICES[computerChoice].icon;
  playerChoiceElement.textContent = titleCase(playerChoice);
  computerChoiceElement.textContent = titleCase(computerChoice);

  if (outcome === "win") {
    playerScore += 1;
  } else if (outcome === "loss") {
    computerScore += 1;
  }

  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
  updateResult(outcome);
  animateMoveCards();
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreElement.textContent = "0";
  computerScoreElement.textContent = "0";
  playerIconElement.textContent = "?";
  computerIconElement.textContent = "?";
  playerChoiceElement.textContent = "Choose below";
  computerChoiceElement.textContent = "Waiting...";
  resultElement.removeAttribute("data-outcome");
  resultElement.textContent = "Score reset. Choose your next move!";
}

document.querySelectorAll("[data-choice]").forEach((button) => {
  button.addEventListener("click", () => playRound(button.dataset.choice));
});

resetButton.addEventListener("click", resetGame);
