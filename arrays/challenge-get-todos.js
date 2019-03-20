notes = [{
    text: 'have breakfast',
    done: true
}, {
    text: 'study javascript',
    done: false
}, {
    text: 'go to the gym',
    done: true
}, {
    text: 'take a shower',
    done: true
}, {
    text: 'sleep',
    done: false
}]

const getThingsToDo = function(tasks){
    return tasks.filter(function(task){
        const undone = !task.done
        return undone
    })
}

//console.log(getThingsToDo(notes))

const sortNotes = function(notes){
    notes.sort(function (a, b){
        const finalA = a.text.toLowerCase()
        const finalB = b.text.toLowerCase()
        //making ifs cleaner
        if (finalA < finalB){
            return -1 // swap, finalA should come first
        } else if (finalB < finalA){
            return 1 // swap, finalB should come first
        } else {
            return 0 // no changes should be made
        }
    })
}

// sortNotes(notes)
// console.log(notes)

//my way
const sortTodos = function(todos){
    todos.sort(function(a, b){
        const finalA = a.done
        const finalB = b.done
        if (finalA < finalB){
            return -1 // swap, finalA should come first
        } else if (finalB < finalA){
            return 1 // swap, finalB should come first
        } else {
            return 0 // no changes should be made
        }
    })
}

//Instructor's way (which seems kinda messy to me)
const sortTodos2 = function (todos){
    todos.sort(function(a, b) {
        if(!a.done && b.done){
            return -1
        } else if(!b.completed && a.completed){
            return 1
        } else{
            return 0
        }
    })
}

sortTodos(notes)
console.log(notes)

// sortTodos2(notes)
// console.log(notes)