const {
  isUnique,
  checkPermutation,
  URLify,
  palinPerm,
  oneAway,
  compressString,
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
  test("should test if string are more than one edit away", () => {
    expect(oneAway("pale", "palesz")).toBe(false);
    expect(oneAway("pale", "pales")).toBe(true);
  });
  test("should compress a string simply", () => {
    expect(compressString("aabcccccaaa")).toEqual("a5b1c5");
    expect(compressString("abcdefghikj")).toEqual("abcdefghikj");
  });
});
