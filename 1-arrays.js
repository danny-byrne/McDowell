//write a function to check if a string is all unique characters
const isUnique = (string) => {
  let storage = [];
  for (let char of string) {
    if (storage.includes(char)) {
      return false;
    } else {
      storage.push(char);
    }
  }
  return true;
};
//given two strings, write a function to check if one string is a permutation of the other
const checkPermutation = (str1, str2) => {
  //if input strings are equal return false.
  if (str1 == str2) return false;
  //sort the strings and check for equality
  function arrange(str) {
    return str.split("").sort().join("");
  }
  return arrange(str1) == arrange(str2);
};

//URLify, replace all spaces in a string with %20, given a string and string length
const URLify = (string, length) => {
  const fill = "%20";
  string = string.substring(0, length).split(" ");
  let i = 0;
  while (i < string.length - 1) {
    string[i] += fill;
    i++;
  }
  return string.join("");
};

//given a string, write a function to check if it is a permutation of a palindrome.
const palinPerm = (string) => {
  string = string.toLowerCase().split(" ").join("").split("");
  let obj = {};
  let numOdd = [];
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    obj[char] ? obj[char]++ : (obj[char] = 1);
  }

  for (let key in obj) {
    if (obj[key] % 2 !== 0) numOdd++;
  }

  return !(numOdd > 1);
};

const oneAway = (str1, str2) => {
  let str1Dif = findDif(str1, str2);
  let str2Dif = findDif(str2, str1);
  function findDif(str1, str2) {
    str1 = str1.split("");
    let numDif = 0;
    for (let i in str1) {
      let char = str1[i];
      if (!str2.includes(str1[i])) {
        numDif++;
      }
    }
    return numDif;
  }
  return str1Dif <= 1 && str2Dif <= 1;
};

const compressString = (string) => {
  let obj = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  let result = "";
  for (let key in obj) {
    result += key + obj[key];
  }
  return result.length > string.length ? string : result;
};

const rotateMatrix = (matrix, n) => {
  for (let layer = 0; layer < n / 2; layer++) {
    let first = layer;
    let last = n - 1 - layer;
    for (let i = first; i < last; i++) {
      let offset = i - first;
      let top = matrix[first][i];
      matrix[first][i] = matrix[last - offset][first];
      matrix[last - offset][first] = matrix[last][last - offset];
      matrix[last][last - offset] = matrix[i][last];
      matrix[i][last] = top;
    }
  }
  return matrix;
};

//if an element in a mxn matrix is 0, it's entire row and column are set to zero
const zeroMatrix = (matrix) => {
  const rows = new Array(matrix.length).fill(false);
  const cols = new Array(matrix[0].length).fill(false);
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] == 0) {
        rows[row] = true;
        cols[col] = true;
      }
    }
  }
  newMatrix = [...matrix];

  for (let i = 0; i < rows.length; i++) {
    if (rows[i]) {
      nullifyRow(matrix, i);
    }
  }

  for (let i = 0; i < cols.length; i++) {
    if (cols[i]) {
      nullifyCol(matrix, i);
    }
  }

  function nullifyRow(matrix, row) {
    for (let col = 0; col < matrix[0].length; col++) {
      matrix[row][col] = 0;
    }
  }

  function nullifyCol(matrix, col) {
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][col] = 0;
    }
  }

  return matrix;
};

const stringRotation = (s1, s2) => {
  if (!s1.length || !s2.length) return false;
  if (s1.length != s2.length) return false;
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  let count = 0;
  while (count < s1.length) {
    s1 = s1.split("");
    s1.push(s1.shift());
    s1 = s1.join("");
    if (s1 == s2) {
      return true;
    }
    count++;
  }
  return false;
};

console.log(stringRotation("hello", "elloh"));

const isSubstring = () => {};

module.exports = {
  isUnique,
  checkPermutation,
  URLify,
  palinPerm,
  oneAway,
  compressString,
  rotateMatrix,
  zeroMatrix,
  stringRotation,
};
