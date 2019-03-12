let add = function(a, b){
    return a + b
}

let result = add(10, 1)
console.log(result)

// Default arguments
let getScoreText = function (name = 'Jannah', score = 0){
    console.log(name)
    console.log(score)
    // return 'Name: ' + name + ' - Score: ' + score
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99) //name = default
console.log(scoreText)

//total, tipPercent

let tipAmmount = function (total, tipPercent = 0.2){
    // return total * tipPercent
    return `the tip ammount for ${total}$ is ${total * tipPercent}$`
}

console.log(tipAmmount(300, undefined)) // 60
console.log(tipAmmount(300, 0.3)) // 90

let name = 'siegfried'
let age = 99
console.log(`Hey, my name is ${name}. I am ${age} years old`)
