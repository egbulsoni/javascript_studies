const notes = ['Note 1', 'Note 2', 'Note 3']

notes.splice(1, 1) // params (start, ammount to delete)
console.log(notes)

notes.splice(1, 0, 'my new second item') // params (start, ammount to delete, 'item to insert after start')
console.log(notes)