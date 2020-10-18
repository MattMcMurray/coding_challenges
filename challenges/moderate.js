// Design an algorithm to determine who has won a game of tic-tac-toe
// Note: I will be overcomplicating the algorithm by using OO for practice

class TicTacToe {
  constructor(board) {
    this._validateGameBoard(board);
    this.board = board;
  }

  _validateGameBoard(board) {
    if (board.length !== board[0].length) {
      throw new Error(
        `Invalid dimensions (${board[0].length}, ${board.length}). Game board must be square.`
      );
    }

    for (let y = 0; y < board.length; y++) {
      if (board[y].length !== board.length) {
        throw new Error(
          `Row at index ${y} has invalid number of items (${board[y].length}). Row length must match game board height (${board.length}).`
        )
      }
    }
  }

  _checkColumns() {
    for (let x = 0; x < this.board[0].length; x++) {
      let characterSeen;

      for (let y = 0; y < this.board.length; y++) {
        if (characterSeen == null) {
          characterSeen = this.board[y][x];
        } else if (characterSeen !== this.board[y][x]) {
          // (at least) 2 different characters in column, no winner
          break;
        } else if (
          y === this.board.length - 1 &&
          characterSeen === this.board[y][x]
        ) {
          return characterSeen;
        }
      }
    }

    return null;
  }

  _checkRows() {
    for (let y = 0; y < this.board.length; y++) {
      let row = new Set(this.board[y]);

      if (row.size === 1) {
        return this.board[y][0];
      }
    }

    return null;
  }

  _checkDiagonals() {
    let characterSeen;

    for (let i = 0; i < this.board.length; i++) {
      if (characterSeen == null) {
        characterSeen = this.board[i][i];
      } else if (this.board[i][i] !== characterSeen) {
        break;
      } else if (
        i === this.board.length - 1 &&
        this.board[i][i] === characterSeen
      ) {
        return characterSeen;
      }
    }

    characterSeen = null;

    for (let i = this.board.length - 1; i >= 0; i--) {
      let y = this.board.length - 1 - i;
      let x = i;

      if (characterSeen == null) {
        characterSeen = this.board[y][x];
      } else if (this.board[y][x] !== characterSeen) {
        break;
      } else if (i === 0 && this.board[y][x] === characterSeen) {
        return characterSeen;
      }
    }

    return null;
  }

  determineWinner() {
    const rowWinner = this._checkRows();
    if (rowWinner != null) {
      return rowWinner;
    }

    const colWinner = this._checkColumns();
    if (colWinner != null) {
      return colWinner;
    }

    const diaWinner = this._checkDiagonals();
    if (diaWinner != null) {
      return diaWinner;
    }

    return null;
  }
}

module.exports = {
  TicTacToe,
};
