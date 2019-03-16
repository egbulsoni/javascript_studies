const makeGuess = function(num){
    //use const when it can't be reassigned
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min 
    console.log(`the computer thought ${randomNum}, you guessed ${num}`)
    console.log(num)
    return randomNum === num
}

console.log(makeGuess(3))
//console.log(makeGuess(2))
// 1 - 5, return bool

