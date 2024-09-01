class Board {
  constructor () {
    this._GAME_BOARD = {
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
  }

  get GAME_BOARD() {
    return this._GAME_BOARD;
  }
}

export default Board;
