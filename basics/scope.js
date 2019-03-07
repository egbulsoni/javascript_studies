//lexical scoping
//scoping works like a tree structure!
//global scope - defined outside of all code blocks
//local scope - defined inside a code block

let varOne = 'varOne'

if(true){
    console.log(varOne);
    let varTwo = 'varTwo'; // can't print this variable outside of if
    console.log(varTwo);
}

// console.log(varTwo) // wouldn't work

let name = 'eduardo';

if(true){
    let name = 'mike'; // 'covers' the global scope variable
    console.log(name); // will print mike
    if(true){       
        test = 'testing' // bad practice, creates a leaked global, 'cause it's not defined previously
        name = 'john' // will go down the scope chain, and replace mike
        console.log(name);
    }    
}

// *side note: always use let when declaring variables
console.log(test); //otherwise, this crap will happen

if(true){
    console.log(name)
}