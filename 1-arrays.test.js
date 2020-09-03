const {
  isUnique,
  checkPermutation,
  URLify,
  palinPerm,
  oneAway,
  compressString,
  rotateMatrix,
  zeroMatrix,
  stringRotation,
} = require("./1-arrays");

describe("array suite", () => {
  test("Should determine whether a string has all unique characters", () => {
    expect(isUnique("abcd")).toBe(true);
    expect(isUnique("abb")).toBe(false);
  });
  test("should check whether two strings are permutations of each other", () => {
    expect(checkPermutation("abc", "cba")).toBe(true);
    expect(checkPermutation("abc", "abc")).toBe(false);
    expect(checkPermutation("abcd", "abc")).toBe(false);
  });
  test("should URLify a string with %20", () => {
    expect(URLify("Mr John Smith     ", 13)).toEqual("Mr%20John%20Smith");
  });
  test("should check a string for Palindrome permutation", () => {
    expect(palinPerm("tact coa")).toBe(true);
    expect(palinPerm("tact coac")).toBe(false);
  });
  test("should test if strings are more than one edit away", () => {
    expect(oneAway("pale", "palesz")).toBe(false);
    expect(oneAway("pale", "pales")).toBe(true);
  });
  test("should compress a string and return original if not optimal", () => {
    expect(compressString("aabcccccaaa")).toEqual("a5b1c5");
    expect(compressString("abcdefghikj")).toEqual("abcdefghikj");
  });
  test("Should rotate clockwise a matrix of different sizes", () => {
    let preMatrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    let postMatrix = [
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4],
    ];
    expect(rotateMatrix(preMatrix, 4)).toEqual(postMatrix);
  });
  test("should zero out rows and columns in a matrix for rows and columns that contain 0", () => {
    let preMatrix = [
      [1, 1, 1, 0, 1],
      [0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ];
    let postMatrix = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 1],
    ];
    expect(zeroMatrix(preMatrix)).toEqual(postMatrix);
  });
  test("should check if one string is a rotation of another", () => {
    expect(stringRotation("hello", "elloh")).toBe(true);
    expect(stringRotation("Minneapolis", "polisMinnea")).toBe(true);
    expect(stringRotation("", "")).toBe(false);
    expect(stringRotation("hello", "edlloh")).toBe(false);
  });
});
