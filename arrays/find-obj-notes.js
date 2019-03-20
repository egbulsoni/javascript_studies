const notes = ['Note 1', 'Note 2', 'Note 3', 'Note 4', 'Note 5']

// indexOf returns -1 if item isn't found on the array

// console.log(notes.indexOf('Note 2'))

const notes2 = [{}, {
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

console.log(notes2.indexOf({})) //different references, -1

const index = notes2.findIndex(function (note, index){
    console.log(note)
    //returns the position on object
    return note.title === 'Habbits to work on'
    
})

console.log(index)