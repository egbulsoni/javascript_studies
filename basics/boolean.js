// === - equality operator
// !== - not equal operator

let temp = 31;
let isFreezing = temp < 32;

console.log(isFreezing);

// challenge area

let age = 22
let isChild = age <= 7;
let isSenior = age >= 65;

// if (age <= 7){
//     isChild = true;
// } else if (age >= 65){
//     isSenior = true;
// }

console.log(`are you a child? ${isChild}`);
console.log(`are you a senior? ${isSenior}`);

if (isChild) console.log("you pay half the price!");
if (isSenior) console.log("your entrance is free!");

