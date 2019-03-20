todos = ['have breakfast', 'study javascript', 'go to the gym', 'take a shower', 'sleep']


// deleteTodo(todos, 'study javascript')
// console.log(todos)

// --object {text: given, completed: bool}
// I also could make the array of objects manually
// but I prefered a real challenge. hahah
const obj = []
todos.forEach(function(todo, index){
    let isComplete = false
    // just so everything isn't 'false'
    if (index % 2 == 0){
        isComplete = true
    }
    obj[index] = {text: todo, done: isComplete}
})

// console.log(obj)

let deleteTodo = function(objList, term){
    // indexToRemove will be equal to -1 if not found! (beware!)
    const indexToRemove = objList.findIndex(function(o, index){
        return o.text.trim().toLowerCase() === term.trim().toLowerCase()
        console.log(term.trim().toLowerCase())
        // can use toLowerCase to match better
    })
    console.log(indexToRemove) //testing...
    //I forgot to check if the index is valid!
    if (indexToRemove > -1){
        objList.splice(indexToRemove, 1)
    }    
}

deleteTodo(obj, '  SleEp  ') // working fine
console.log(obj)
