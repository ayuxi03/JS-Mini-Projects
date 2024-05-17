let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreMsg = document.querySelector("#user-score");
const compScoreMsg = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock","paper","scissors"];
  const randIdx = Math.floor(Math.random() * 3); //multiply random() by the upper limit index -> to get values upto 2 multiply with 3
  return options[randIdx];
}

const drawGame = () => {
  msg.innerText = "Game draw! Try again";
  msg.style.backgroundColor = "#ff4800";

}

const showWinner = (userWin, compChoice) => {
  if (userWin) {
    msg.innerText = `You win! Computer chose ${compChoice}`;
    msg.style.backgroundColor = "#006400";
    userScore++;
    userScoreMsg.innerText = userScore;
  } else {
    msg.innerText = `You lose! Computer chose ${compChoice}. Try again`;
    msg.style.backgroundColor = "#ba181b";
    compScore++;
    compScoreMsg.innerText = compScore;
  }
}

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice ==="rock" ? false : true;
    }
    
    showWinner(userWin, compChoice);
  }

}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    //const userChoice = choice.getAttribute("id");
    playGame(choice.id);
  })
})