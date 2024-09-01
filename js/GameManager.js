class GameManager {
  constructor() {
    this._currentTurn = null;
  }

  get currentTurn() {
    return this._currentTurn;
  }

  set currentTurn(turn) {
    this._currentTurn = turn;
  }

  buildBoard(GAME_BOARD){
    const boardBlocks = [];
    for (const [key, value] of Object.entries(GAME_BOARD)) {
      value.className = "cell";
      value.id = key;
      boardBlocks.push(value);
    }
    return boardBlocks;
  }

  checkWinner(GAME_BOARD){
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

  checkTieGame(GAME_BOARD){
    let isTied = false;
    for (const [key, block] of Object.entries(GAME_BOARD)) {
      if (block.innerHTML === ""){
        return false;
      }
    }
    return true;
  }
}

export default GameManager;
