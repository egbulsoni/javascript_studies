// Global scope (convertFahrenheitToCelsius, firstTemp, secondTemp)
  // Local scope (fahrenheit, celsius)
    // Local scope (isFreezing)    
let convertFahrenheitToCelsius = function(fahrenheit)
{
    let result = (fahrenheit - 32) * 5/9

    if(result <= 0){
        let isFreezing = true
    }

    return result
}

let firstTemp = convertFahrenheitToCelsius(32) //0
let secondTemp = convertFahrenheitToCelsius(68) //20

console.log(firstTemp)
console.log(secondTemp)