/* eslint-disable no-undef */
const { expect } = require("chai");

const {
  mergeArrays,
  findElement,
} = require("../challenges/sorting_and_searching");

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

  describe("Find element in rotated array", () => {
    it("should return the index of the item in the 'original' array", () => {
      const arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];

      expect(findElement(arr, 5)).to.equal(3);
    });

    it("should return -1 if the array is empty", () => {
      const arr = [];

      expect(findElement(arr, 5)).to.equal(-1);
    });

    it("should still work if the array was not rotated", () => {
      const arr = [1, 3, 4, 5, 7, 10, 14, 15, 16, 19, 20, 25];

      expect(findElement(arr, 5)).to.equal(3);
    });

    it("should return -1 if the target is not in the array", () => {
      const arr = [10, 14, 15, 16, 19, 20, 25, 1, 3, 4, 5, 7];

      expect(findElement(arr, 99)).to.equal(-1);
    });
  });
});
