//function - input (argument), code, output

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

console.log(square(3))
console.log(square(10))

let convertFahrenheitToCelsius = function(fahrenheit)
{
    let result = (fahrenheit - 32) * 5/9
    return result
}

let firstTemp = convertFahrenheitToCelsius(32) //0
let secondTemp = convertFahrenheitToCelsius(68) //20

console.log(firstTemp)
console.log(secondTemp)
