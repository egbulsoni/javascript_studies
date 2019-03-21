const todos = [{
    text: 'Order cat food',
    completed: false
},{
    text: 'Clean kitchen',
    completed: true
},{
    text: 'Buy food',
    completed: true
},{
    text: 'Do work',
    completed: false
},{
    text: 'Exercise',
    completed: true
}]

filters = {
    searchText: '',
    hideCompleted: false
}

const txtSearch = document.querySelector('#txt-search')
txtSearch.addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
    // console.log(filters.searchText)
})

const ps = document.querySelectorAll('p')
// ps.forEach(function(p){
//     check = p.innerHTML
//     if (check.includes('the')){
//         p.remove()
//     }
// })

// count how many todos aren't completed
// my solution

let counter = 0
todos.forEach(function(t){
    if(!t.completed){
        counter += 1
    }
})

//instr solution

// creates a paragraph saying how many todos aren't completed
const counterMessage = document.createElement('h2')
counterMessage.textContent = `You have ${counter} todos left` //incompleteTodos.length
document.querySelector('body').appendChild(counterMessage)

// creates all todos (done and undone) as paragraphs
// todos.forEach(function(todo){
//     const elem = document.createElement('p')
//     elem.textContent = todo.text
//     document.querySelector('body').appendChild(elem)    
// })

const renderTodos = function(todos, filters){
    document.querySelector('#todos').innerText = '' // clean everything before render

    // const incompleteTodos = todos.filter(function (todo){
    //     return !todo.completed
    // })

    let show = todos.filter(todo => todo.text.toLowerCase().includes(filters.searchText))
    if(filters.hideCompleted){
        show = show.filter(todo => !todo.completed)
    }    
    console.log(show)
    const divTodos = document.querySelector('#todos')
    
    // console.log(show[1].text)
    show.forEach(function(item){
        // console.log(item.text)
        let p = document.createElement('p')
        p.innerText = item.text
        divTodos.appendChild(p)
    })
    //document.querySelector('#todos').appendChild(show)
}

renderTodos(todos, filters)
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from Javascript'
// document.querySelector('body').appendChild(newParagraph)
//
// document.querySelector('#btn-add').addEventListener('click', function(e){
//     console.log('added new todo')
// })


// document.querySelector('#txt-todo').addEventListener('input', function(e){
//     console.log(e.target.value)
// })

document.querySelector('#todo-form').addEventListener('submit', function(e){
    e.preventDefault()
    const text = e.target.elements.txtTodo.value
    todos.push({text: text, completed: false})
    renderTodos(todos, filters)
    e.target.elements.txtTodo.value = ''

})

document.querySelector('#hide').addEventListener('change', function(e){
    e.preventDefault
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
    // console.log(e.target.checked)

})