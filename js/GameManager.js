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

  //The GAME_BOARD const is an object with values of html divs.
  //Since you can't assign class names or ids during the document.createElement(), this
  //was created to assign those values, and returns an array of only the values with the injected class/id.
  buildBoard(GAME_BOARD){
    const boardBlocks = [];
    for (const [key, value] of Object.entries(GAME_BOARD)) {
      value.className = "cell";
      value.id = key;
      boardBlocks.push(value);
    }
    return boardBlocks;
  }

  //There has got to be a better way... right?
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

  //Happy with this
  //Logic here is that for a game to be tied, every square needs a value.
  //This loops through every square, and if any square contains no value,
  //immediately breaks out of the for loop and returns false (no tie game)
  checkTieGame(GAME_BOARD){
    for (const [key, block] of Object.entries(GAME_BOARD)) {
      if (block.innerHTML === ""){
        return false;
      }
    }
    return true;
  }
}

export default GameManager;
