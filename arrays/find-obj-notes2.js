const notes = [{}, {
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const findNote = function (notes, noteTitle){
    // finds the index, where the object (notes) title
    // is equal to the noteTitle passed
    const index = notes.findIndex(function(note, index){
        return note.title ===  noteTitle // return to 'index'
        // can use toLowerCase to match better
    })
    //returns the object, at the index specified above
    return notes[index]
}

const findNote2 = function (notes, noteTitle){
    // same as findIndex, but returns the first occurrence
    // thus, the last line "return notes[index]" isn't needed
    return notes.find(function(note, index){
        return note.title ===  noteTitle
        // can use toLowerCase to match better
    })
    //returns the object, at the index specified above
    //return note[index]
}

const note = findNote(notes, 'Office modification')
console.log(note)

const note2 = findNote2(notes, 'Office modification')
console.log(note2)