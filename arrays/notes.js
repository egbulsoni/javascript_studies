const notes = ['Note 1', 'Note 2', 'Note 3']

console.log(notes)
console.log(notes.length)
console.log(notes[0])
console.log(notes[20]) // undefined
console.log(notes[notes.length-1]) //last index

for (let count = 0; count <= 2; count++){
    console.log(count)
}

for (let count = notes.length; count >= 0; count--){
    console.log(notes[count])
}

console.log('-----------')
// same as for each
for (let count = 0; count < notes.length; count++){
    console.log(notes[count])
}

// for each
// todos.forEach(function (todo, index){
//     console.log(`${index + 1}. ${todo}`)
// })