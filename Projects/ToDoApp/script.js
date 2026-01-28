document.addEventListener('DOMContentLoaded', ()=>{
    const container = document.getElementById('container')
    const todoInput = document.getElementById('todo-input')
    const addTodo = document.getElementById('input-container')
    const todoList = document.getElementById('todo-list')

    let task = JSON.parse(localStorage.getItem("tasks")) || []
    
    task.forEach(task => {
        renderTask(task)
    });

    document.addEventListener('click', ()=>{
        const todoText = todoInput.value.trim()
        if(todoText === "") return

        let todos = {
            id: Date.now(),
            text: todoText,
            status: false
        }

        task.push(todos)
        saveTask()
        renderTask(todos)
        todoInput.value = ""
    
    })

    
    function renderTask(currentTask){
        const li = document.createElement('li')
        li.setAttribute('data-id', currentTask.id)
        if(currentTask.status) li.classList.add("completed") //add class 'completed' to the tag if the task is completed.
        li.innerHTML = `
        <span>${currentTask.text}</span>
        <button>delete</button>
        `;

        li.addEventListener('click', (e)=>{
            if(e.target.tagName === 'BUTTON') return //targeting the li button
            currentTask.status = !currentTask.status //reverse boolean value
            li.classList.toggle('completed') // remove/add class 'completed'
            saveTask() //save the changes into local storage
        })

        li.querySelector('button').addEventListener('click', (e)=>{
            e.stopPropagation() //prevent toggle from firing
            task = task.filter((t) => t.id !== currentTask.id)
            li.remove()
            saveTask()
        })

        todoList.appendChild(li)
    }

    function saveTask(){
        localStorage.setItem("tasks", JSON.stringify(task))
    }
})
