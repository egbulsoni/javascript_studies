todos = ['have breakfast', 'study javascript', 'go to the gym', 'take a shower', 'sleep']

console.log(`you have ${todos.length} todos`)
// console.log(`Todo: ${todos[0]}`)
// console.log(`Todo: ${todos[todos.length-2]}`)

// delete 3rd item
todos.splice(2, 1)
// add new item onto the end
todos.push('foo')
// remove the first item from the list
todos.unshift()

console.log(todos)

todos.forEach(function (todo, index){
    console.log(`${index + 1}. ${todo}`)
})

for(let i = 0; i < todos.length; i++){
    console.log(`${i+1}. ${todos[i]}`)
}