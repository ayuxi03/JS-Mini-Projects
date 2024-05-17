let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX,playerO

const winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
];

let count = 0;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was clicked");
    if (turnO) { //playerO
      box.style.color = '#f94144';
      box.innerText = "O";
      turnO=false;
      count++;
      console.log(count);
    } else { //playerX
      box.style.color = '#333d29';
      box.innerText = "X";
      turnO=true;
      count++;
      console.log(count);
    }
    box.disabled = true; //so that value can't be changed

    checkWinner();
  });
});

const disableBoxes = () => {
  for (box of boxes) {
    box.disabled = true;
  }
}

const enableBoxes = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
    count = 0;
  }
}

const showWinner = (winner) => {
  msg.innerText = `Congratulations! Player ${winner} wins! `;
  msgContainer.classList.remove("hide");
}

const draw = () => {
  msg.innerText = `Draw! Try again`;
  msgContainer.classList.remove("hide");
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log(`Player ${pos1Val} wins !`);
        showWinner(pos1Val);
        disableBoxes();
      }
      if (count === 9) {
        console.log("draw!");
        draw();
        //disableBoxes();
      }
    }
    
  }
};

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);