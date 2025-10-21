// [1]
let swappingCases = "elZERo";

// let sw = swappingCases.split("").map(function (ele) {
//   return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
// }).join("");

// console.log(sw); // ELzerO

// Arrow Function Version
let sw = swappingCases.split("").map(ele => ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()).join("");
console.log(sw); // ELzerO

// ===============================================

// [2]
let invertedNumbers = [1, -10, -20, 15, 100, -30];

// let inv = invertedNumbers.map(function (ele) {
//   return -ele;
// });

// console.log(inv);

// Arrow Function Version
let inv = invertedNumbers.map(ele => -ele);

console.log(inv);
// ====================================================


// [3]
let ignoreNumbers = "Elz123er4o";

// let ign = ignoreNumbers.split("").map(function (ele) {
//   return isNaN(parseInt(ele)) ? ele : "";
// }).join("");

// console.log(ign);

// Arrow Function Version
let ign = ignoreNumbers.split("").map(ele => isNaN(parseInt(ele)) ? ele : "").join("");

console.log(ign);