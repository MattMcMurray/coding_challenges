/* eslint-disable no-undef */
const { expect } = require("chai");

const { mergeArrays } = require("../challenges/sorting_and_searching");

describe("Sorting and Searching", () => {
  describe("Merge arrays", () => {
    it("should merge basic arrays successfully", () => {
      const A = [1, 3, 5, null, null, null, null];
      const B = [2, 4, 6, 8];

      expect(mergeArrays(A, B)).to.eql([1, 2, 3, 4, 5, 6, 8]);
    });

    it("should return A", () => {
      const A = [1, 2, 3];
      const B = [];

      expect(mergeArrays(A, B)).to.eql(A);
    });

    it("should return B", () => {
      const A = [null, null, null];
      const B = [1, 10, 100];

      expect(mergeArrays(A, B)).to.eql(B);
    });
  });
});
