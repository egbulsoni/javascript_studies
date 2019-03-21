const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters){
    const filteredNotes = notes.filter(function (note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note){
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
    console.log(filteredNotes)
}

renderNotes(notes, filters) //render when page is loaded.

//console.log('This is from a different file')

// const p = document.querySelector('p')
// p.remove()

// const ps = document.querySelectorAll('p')
// ps.forEach(function(p){
//     p.textContent = '*****'
//     console.log(p.textContent)
//     //p.remove()
// })

const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from Javascript'
document.querySelector('body').appendChild(newParagraph)

//picks 1st button

// document.querySelector('button').addEventListener('click', function(e){
//     console.log('works')
//     e.target.textContent = 'the button was clicked'
// })

//picks 2nd button

// document.querySelectorAll('button')[1].addEventListener('click', function(){
//     console.log('delete all')
// })

//picks buttons by ID

document.querySelector('#create-note').addEventListener('click', function (){
    console.log("creates a note.")
})

// document.querySelector('#remove-all').addEventListener('click', function (){
//     document.querySelectorAll('.note').forEach(function (note){
//         note.remove()
//     })
//     //console.log("delete all notes.")
// })

document.querySelector('#search-text').addEventListener('input', function (e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
    //console.log(e.target.value)
})
// --Single--
// p
// #replace
// .item

// --Multiple--
// p#order
// button.inventory
// h1#title.application
// h1.application#title

document.querySelector('#name-form').addEventListener('submit', function (e){
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
    e.target.elements.firstName.value = "" //clean textbox
})

document.querySelector('#filter-by').addEventListener('change', function (e){
    console.log(e.target.value)
})