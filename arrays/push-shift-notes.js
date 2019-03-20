const notes = ['Note 1', 'Note 2', 'Note 3']

notes.push('my new note')

console.log(notes.length)
console.log(notes)

console.log(notes.pop()) // removes last item
console.log(notes)

console.log(notes.shift()) // removes first item

// adds to first item, 'shift' other elements to each next index
notes.unshift('another note')

