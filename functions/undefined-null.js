let name = 'Jen'
console.log(name)

if (name === undefined){
    console.log('Please provide a name')
} else {
    console.log(name)
}

// undefined for function arguments
let square = function(num){
    console.log(num)
    //it returns undefined
}

let result = square() // it will "console.log" the undefined
console.log(result) //undefined was returned

// null and undefined

let age = 27

//it's good practice to leave undefined for the compiler
age = null //that's why we set it to null

console.log(age)