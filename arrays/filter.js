const notes = [ {
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
    return notes.find(function(note, index){
        return note.title ===  noteTitle
    })
}

// const findNotes = function (notes, query) {

// }

const findNotes = function(notes, query){
    return notes.filter(function (note){ //can also pass "index" as argument
    //but it's not needed in this case
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch //return true if any is true (or)
    })
}

console.log(findNotes(notes, 'bb'))