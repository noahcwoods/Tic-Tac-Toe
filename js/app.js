//HTML Elements
const gameBoardContainer = document.getElementById("gameBoardContainer");
const playerStatsContainer = document.getElementById("stats");
const restartGameBtn = document.getElementById("restartBtn");

let displayPlayerTurn = document.createElement("h3");
let displayWinner = document.createElement("p");
playerStatsContainer.appendChild(displayPlayerTurn);

//Define players
const player1 = 'O';
const player2 = 'X';
let player1Turn = true;

// Define the game board
const GAME_BOARD = {
  aA: document.createElement('div'),
  aB: document.createElement('div'),
  aC: document.createElement('div'),
  bA: document.createElement('div'),
  bB: document.createElement('div'),
  bC: document.createElement('div'),
  cA: document.createElement('div'),
  cB: document.createElement('div'),
  cC: document.createElement('div'),
};

//build the board
for (const [key, value] of Object.entries(GAME_BOARD)) {
  value.className = "cell";
  value.id = key;
  gameBoardContainer.appendChild(value);
}

//Define player turn to user
updateStats();

//event handler on board blocks
const boardBlocks = document.querySelectorAll('.cell');
boardBlocks.forEach(block => {
  block.addEventListener("click", function(){
    console.log("clicked: ", this);
    if (checkWinner() || tieGame()){
      displayWinner.innerHTML = "Stop it. Restart the game...";
    }else if (player1Turn){
      GAME_BOARD[this.id].innerHTML = player1;
      updateStats();
    }else {
      GAME_BOARD[this.id].innerHTML = player2;
      updateStats();
    }
  });
});

//Controls player turn display / win condition display
function updateStats(){
  if (checkWinner()){
    if (player1Turn){
      displayWinner.innerHTML = `${player1} WINS!`
      playerStatsContainer.appendChild(displayWinner);
    }else{
      displayWinner.innerHTML = `${player2} WINS!`
      playerStatsContainer.appendChild(displayWinner);
    }
    playerStatsContainer.removeChild(displayPlayerTurn);
  }else if (tieGame()){
    displayWinner.innerHTML = `Nobody WINS! How Sad...`
    playerStatsContainer.appendChild(displayWinner);
    playerStatsContainer.removeChild(displayPlayerTurn);
  }


  if (player1Turn){
    displayPlayerTurn.innerHTML = `It is currently Player ${player2}'s turn`;
    player1Turn = false;
  }else{
    displayPlayerTurn.innerHTML = `It is currently Player ${player1}'s turn`;
    player1Turn = true
  }
}

//Reset game elements
restartGameBtn.addEventListener("click", function(){
  if (checkWinner() || tieGame()){
    playerStatsContainer.removeChild(displayWinner);
  }
  boardBlocks.forEach(block => {
    block.innerHTML = "";
  })
  player1Turn = true;
  playerStatsContainer.appendChild(displayPlayerTurn);
  updateStats();
})

//Lots of If statements, I am sure there is a better way
function checkWinner(){

  if ((GAME_BOARD.aA.innerHTML === GAME_BOARD.aB.innerHTML && GAME_BOARD.aA.innerHTML === GAME_BOARD.aC.innerHTML)
    && (GAME_BOARD.aA.innerHTML !== "" && GAME_BOARD.aB.innerHTML !== "" && GAME_BOARD.aC.innerHTML !== "")) return true;

  if ((GAME_BOARD.bA.innerHTML === GAME_BOARD.bB.innerHTML && GAME_BOARD.bA.innerHTML === GAME_BOARD.bC.innerHTML)
    && (GAME_BOARD.bA.innerHTML !== "" && GAME_BOARD.bB.innerHTML !== "" && GAME_BOARD.bC.innerHTML !== "")) return true;

  if ((GAME_BOARD.cA.innerHTML === GAME_BOARD.cB.innerHTML && GAME_BOARD.cA.innerHTML === GAME_BOARD.cC.innerHTML)
    && (GAME_BOARD.cA.innerHTML !== "" && GAME_BOARD.cB.innerHTML !== "" && GAME_BOARD.cC.innerHTML !== "")) return true;

  if ((GAME_BOARD.aA.innerHTML === GAME_BOARD.bA.innerHTML && GAME_BOARD.aA.innerHTML === GAME_BOARD.cA.innerHTML)
    && (GAME_BOARD.aA.innerHTML !== "" && GAME_BOARD.bA.innerHTML !== "" && GAME_BOARD.cA.innerHTML !== "")) return true;

  if ((GAME_BOARD.aB.innerHTML === GAME_BOARD.bB.innerHTML && GAME_BOARD.aB.innerHTML === GAME_BOARD.cB.innerHTML)
    && (GAME_BOARD.aB.innerHTML !== "" && GAME_BOARD.bB.innerHTML !== "" && GAME_BOARD.cB.innerHTML !== "")) return true;

  if ((GAME_BOARD.aC.innerHTML === GAME_BOARD.bC.innerHTML && GAME_BOARD.aC.innerHTML === GAME_BOARD.cC.innerHTML)
    && (GAME_BOARD.aC.innerHTML !== "" && GAME_BOARD.bC.innerHTML !== "" && GAME_BOARD.cC.innerHTML !== "")) return true;

  if ((GAME_BOARD.cA.innerHTML === GAME_BOARD.bB.innerHTML && GAME_BOARD.cA.innerHTML === GAME_BOARD.aC.innerHTML)
    && (GAME_BOARD.cA.innerHTML !== "" && GAME_BOARD.bB.innerHTML !== "" && GAME_BOARD.aC.innerHTML !== "")) return true;

  if ((GAME_BOARD.aA.innerHTML === GAME_BOARD.bB.innerHTML && GAME_BOARD.aA.innerHTML === GAME_BOARD.cC.innerHTML)
    && (GAME_BOARD.aA.innerHTML !== "" && GAME_BOARD.bB.innerHTML !== "" && GAME_BOARD.cC.innerHTML !== "")) return true;
}

function tieGame(){
  let isTied = false;
  for (const [key, block] of Object.entries(GAME_BOARD)) {
    if (block.innerHTML === ""){
      return false;
    }
  }
  return true;
}


