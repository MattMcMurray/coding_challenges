/* eslint-disable no-undef */
const { assert, expect } = require("chai");

const { TicTacToe } = require("../challenges/moderate");

describe("Moderate", () => {
  describe("Tic Tac Toe", () => {
    it("should find x to be winner in simple game (vertical)", () => {
      const game = [
        ["x", "o", "x"],
        ["x", "o", "o"],
        ["x", null, "o"],
      ];

      const tictactoe = new TicTacToe(game);

      expect(tictactoe.determineWinner()).to.equal("x");
    });

    it("should find o to be winner in simple game (vertical)", () => {
      const game = [
        ["x", "o", "x"],
        ["o", "o", "x"],
        ["x", "o", "o"],
      ];

      const tictactoe = new TicTacToe(game);

      expect(tictactoe.determineWinner()).to.equal("o");
    });

    it("should find o to be winner in simple game (horizontal)", () => {
      const game = [
        ["x", "o", "x"],
        ["o", "o", "o"],
        ["x", "x", "o"],
      ];

      const tictactoe = new TicTacToe(game);

      expect(tictactoe.determineWinner()).to.equal("o");
    });

    it("should find x to be winner in simple game (diagonal)", () => {
      const game = [
        ["x", "o", "x"],
        ["o", "x", "o"],
        ["x", "o", "x"],
      ];

      const tictactoe = new TicTacToe(game);

      expect(tictactoe.determineWinner()).to.equal("x");
    });

    it("should find o to be winner in simple game (diagonal)", () => {
      const game = [
        ["x", null, "o"],
        [null, "o", "o"],
        ["o", "x", "x"],
      ];

      const tictactoe = new TicTacToe(game);

      expect(tictactoe.determineWinner()).to.equal("o");
    });

    it("should throw an exception when the gameboard is not square", () => {
      const game = [
        [null, null],
        [null, null],
        [null, null],
      ];

      assert.throws(
        () => new TicTacToe(game),
        Error,
        "Invalid dimensions (2, 3). Game board must be square."
      );
    });

    it("should throw an exception if any of the rows have the wrong number of items", () => {
      const game = [
        [null, null, null],
        [null, null],
        [null, null, null],
      ];

      assert.throws(
        () => new TicTacToe(game),
        Error,
        "Row at index 1 has invalid number of items (2). Row length must match game board height (3)."
      );
    });
  });
});
