// let num = 183.941

// console.log(num.toFixed(2)) //precision

// console.log(Math.round(num)) //round to the nearest
// console.log(Math.floor(num))
// console.log(Math.ceil(num))

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min 
// explanation:
// Math.random() * (max - min + 1) = range 0, 10.9999999 -> 
// with floor - range 0, 10 ->
// + min - range 10, 20
console.log(randomNum)