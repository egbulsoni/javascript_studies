var firstName = 'Braun'
//reassign, as expected
firstName = 'Anne'

console.log(firstName)

// vars can be recreated without raising errors
// so we gotta be careful

// vars have function based scope
// in other words: vars outside functions are global
if (10 === 10){
    var secName = 'Jen' //global
}

console.log(secName)

const setName = function () {
    var thirdName = 'Test'
}

setName()
// line bellow would raise "thirdName is not defined"
// console.log(thirdName) 

let age
// var age //same thing, undefined
console.log(age)

// hoisting
console.log(age2) //wtf? prints 'undefined' (hoisting?)
var age2 = 10
// let would raise an error
