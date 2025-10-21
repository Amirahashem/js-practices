// [1]
// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

// let filteredFriends = friends.filter(function (ele) {
//   return ele.startsWith("A") ? true : false;
// })

// console.log(filteredFriends);

// Arrow Function Version
let filteredFriends = friends.filter(ele => ele.startsWith("A"));
console.log(filteredFriends);
// =========================================================


// [2]
// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];
// let evenNumbers = numbers.filter(function (ele) {
//   return ele % 2 === 0;
// })

//Arrow Function Version
let evenNumbers = numbers.filter(ele => ele % 2 === 0);
console.log(evenNumbers);
// =========================================================


// [3]
// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

// let smallWords = sentence.split(" ").filter(function (ele) {
//   return ele.length <= 4;
// }).join(" ");


//Arrow Function Version
let smallWords = sentence.split(" ").filter(ele => ele.length <= 4).join(" ");

console.log(smallWords);
// =========================================================



// [4]
// Ignore Numbers
let ignoreNumbers = "Elz123er4o";
let onlyString = ignoreNumbers.split("").filter(function (ele) {
  return isNaN(parseInt(ele));
}).join("");

console.log(onlyString);
// ========================================================


// [5]
// Filter Strings + Multiply
let mix = "A13BS2ZX";

let nums = mix.split("").filter(function (ele) {
  return !isNaN(parseInt(ele));
}).map(function (ele) {
  return ele * ele;
}).join("");

console.log(nums);
