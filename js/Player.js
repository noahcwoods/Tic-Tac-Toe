class Player {
  constructor(playerIdent) {
    this._playerIdent = playerIdent;
  }

  get playerIdent() {
    return this._playerIdent;
  }

  //Can be used in future if players want to change from X and O to customs
  set playerIdent(playerIdent) {
    this._playerIdent = playerIdent;
  }
}

export default Player;
