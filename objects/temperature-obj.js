let convertFahrenheitToCelsius = function(fahrenheit)
{
    let celsius = (fahrenheit - 32) * 5/9
    let kelvin = (fahrenheit - 32) * 5/9 + 273.15
    return {
        fahrenheit: fahrenheit,
        celsius: celsius,
        kelvin: kelvin
    }
}

let temp1 = convertFahrenheitToCelsius(32)
let temp2 = convertFahrenheitToCelsius(50)

console.log(`${temp1.fahrenheit}F is equal to ${temp1.celsius}C, or ${temp1.kelvin}K`)
console.log(`${temp2.fahrenheit}F is equal to ${temp2.celsius}C, or ${temp2.kelvin}K`)