const todoContainer = document.querySelector('.todo-container')

let x = 0
generateId = () => (x++)

document.querySelector('.submit').onclick = () => {
    const createTodoInput = document.querySelector('.create-todo')
    const newTodoTitle = createTodoInput.value
    const todoItem = document.createElement('li') 
    const todoId = generateId()
    const title = document.createElement('p')
    title.innerHTML = newTodoTitle

    const checkbox = document.createElement('input') 
    checkbox.type = 'checkbox'
    checkbox.className = 'checkbox'
    checkbox.addEventListener('click', () => {
        title.className = checkbox.checked ? 'complete-todo' : ''
        // checkbox.checked ? title.className = 'complete-todo' : title.className = ''
        // if (checkbox.checked) {
        //     title.className = 'complete-todo'
        // } else {
        //     title.className = ''
        // }
    })

    const deleteButton = document.createElement('input')
    deleteButton.type = 'button'
    deleteButton.className = 'delete-button'
    deleteButton.value = 'Delete'
    deleteButton.id = todoId
    deleteButton.addEventListener('click', (event) => {
        const todoNodesArr = document.querySelectorAll('.todoItem')

        const newArray = Array.prototype.filter.call(todoNodesArr, (todo) => (event.target.id !== todo.id))
            //                                                    ({ id }) => (event.target.id !== id))
            // if (event.target.id !== todo.id) {
            //     return true
            // } else {
            //     return false
            // })
        todoContainer.innerHTML = ''
        newArray.forEach((elem) => {
            todoContainer.append(elem)
        })
    })

    if ( newTodoTitle !== "" ) {
        todoItem.append(checkbox, title, deleteButton)
        todoContainer.append(todoItem)
        createTodoInput.value = ''
        todoItem.className = 'todoItem'
        todoItem.id = todoId
    }
}


