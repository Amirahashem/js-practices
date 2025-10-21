/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/
// [1] Longest Word
let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];
// let longestWord = theBiggest.reduce(function(acc, current) {
//   return acc.length > current.length ? acc : current;
// })

// Arrow Function Version
let longestWord = theBiggest.reduce((acc, current) =>  acc.length > current.length ? acc : current);
console.log(longestWord);
// ========================================================


// [2] Remove Characters + Use Reduce
let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let cleanString = removeChars.filter(function(ele) {
  return ele !== "@";
}).reduce(function (acc, current) {
  return acc + current;
});

// Arrow Function Version
// let cleanString = removeChars.filter(ele => ele !== "@").reduce((acc, current) => acc + current);

console.log(cleanString);