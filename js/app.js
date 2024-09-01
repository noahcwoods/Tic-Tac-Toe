import Player from "./Player.js";
import Board from "./Board.js";
import GameManager from "./GameManager.js";

//HTML Elements
const gameBoardContainer = document.getElementById("gameBoardContainer");
const restartGameBtn = document.getElementById("restartBtn");
const playerStatsContainer = document.getElementById("stats");
const displayPlayerTurn = document.createElement("h3");
const displayWinner = document.createElement("p");

// Needed to display current turn
playerStatsContainer.appendChild(displayPlayerTurn);

// Game Objects /// Players, Board, and Game Manager
const player1 = new Player("X");
const player2 = new Player("O");
const board = new Board();
const game = new GameManager();

// Display the board on the page
for (const block of game.buildBoard(board.GAME_BOARD)) {
  gameBoardContainer.appendChild(block);
}

//Display initial turn
updateStats();

//Checks if the game is already over and prevents clicking on blocks
//assigns the clicked block to the specified player
const boardBlocks = document.querySelectorAll('.cell');
boardBlocks.forEach(block => {
  block.addEventListener("click", function(){
    console.log("clicked: ", this);
    if (game.checkWinner(board.GAME_BOARD) || game.checkTieGame(board.GAME_BOARD)){
      displayWinner.innerHTML = "Stop it. Restart the game...";
    }else if (game.currentTurn === player1){
      board.GAME_BOARD[this.id].innerHTML = player1.playerIdent;
      updateStats();
    }else {
      board.GAME_BOARD[this.id].innerHTML = player2.playerIdent;
      updateStats();
    }
  });
});

//Reset game elements (NEW GAME)
restartGameBtn.addEventListener("click", function(){
  if (game.checkWinner(board.GAME_BOARD) || game.checkTieGame(board.GAME_BOARD)){
    playerStatsContainer.removeChild(displayWinner);
  }
  boardBlocks.forEach(block => {
    block.innerHTML = "";
  })
  //Wonky but this setting ensures that player X starts the game.
  game.currentTurn = player2;

  playerStatsContainer.appendChild(displayPlayerTurn);
  updateStats();
})

//Checks and displays if there is a winner of the game based on last move
//Checks and displays if there is a tie based on last move
//Updates whose turn it is in the game
function updateStats() {
  if (game.checkWinner(board.GAME_BOARD)) {
    if (game.currentTurn === player1) {
      displayWinner.innerHTML = `Player ${player1.playerIdent} WINS!`
      playerStatsContainer.appendChild(displayWinner);
    } else {
      displayWinner.innerHTML = `Player ${player2.playerIdent} WINS!`
      playerStatsContainer.appendChild(displayWinner);
    }

    playerStatsContainer.removeChild(displayPlayerTurn);
  } else if (game.checkTieGame(board.GAME_BOARD)) {
    displayWinner.innerHTML = `Nobody WINS! How Sad...`
    playerStatsContainer.appendChild(displayWinner);
    playerStatsContainer.removeChild(displayPlayerTurn);
  }

  if (game.currentTurn === player1){
    displayPlayerTurn.innerHTML = `It is currently Player ${player2.playerIdent}'s turn`;
    game.currentTurn = player2;
  }else{
    displayPlayerTurn.innerHTML = `It is currently Player ${player1.playerIdent}'s turn`;
    game.currentTurn = player1;
  }
}





