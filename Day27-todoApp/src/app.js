

let todos=[]

let taskInit=document.getElementById("taskInit")
let addTaskContainer = document.getElementById("addTaskContainer")
let taskInput=document.getElementById("taskInput")
let dueDate=document.getElementById("dueDate")
let addTaskButton =document.getElementById("addTaskButton")
let todosContainer = document.querySelector(".todosContainer")

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

taskInit.addEventListener("click",()=>{
    addTaskContainer.classList.remove("hidden")
})

addTaskButton.addEventListener("click",()=>{
    task={
        task:taskInput.value,
        date:dueDate.value,
        status:"",
    }
    todos.push(task)
    console.log(todos)
    todosContainer.innerText = ""
    renderTodo()
})

function renderTodo(){
    todosContainer.innerHTML = ""
    let statusClass = ""
    todos.forEach((todo,index)=>{
        if(todo.status=="done"){
            statusClass = "bg-green-100"
        }
        else{
            statusClass = "border-neutral-200 bg-white"
        }
        let buttonText = todo.status === "done" ? "Undo" : "Mark as done";
        let date = isNaN(new Date(todo.date)) ? new Date() : new Date(todo.date)
        let fDate = date.toLocaleDateString('en',options)
        let div = document.createElement("div")
        div.innerHTML= 
        `<div class="${statusClass} w-[350px] mx-auto mt-8 flex flex-col items-center justify-center border border-neutral-300 py-2 rounded-2xl">
            <h2 class="font-semibold text-xl">${todo.task}</h2>
            <p>${fDate}</p>
            <div class="flex gap-5">
                <button id="task-completed" data-id=${index} class="flex items-center gap-1 text-neutral-500 hover:text-green-700 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
                        <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
                        <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
                    </svg>
                    <span id="done">${buttonText}</span>
                </button>
                <button id="delete-task" data-id=${index} class="flex items-center gap-1 text-neutral-500 hover:text-red-500 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                    </svg>
                    Delete
                </button>
            </div>
        </div>`
        todosContainer.appendChild(div)
    })
    let taskComplete=document.querySelectorAll("#task-completed")
    let deleteTaskBtn = document.querySelectorAll('#delete-task');

    taskComplete.forEach(btn=>{
        btn.addEventListener("click",e=>{
           let index = e.currentTarget.getAttribute('data-id');
           let todo = todos[index];
           todo.status=="done"? todo.status="" : todo.status="done"
                      
           console.log(index)
           renderTodo()
        })
    })

    deleteTaskBtn.forEach(btn=>{
        btn.addEventListener("click",e=>{
           let index = e.target.getAttribute('data-id');
           todos.splice(index,1)
           console.log(index,todos)
           renderTodo()
        })
    })    
}

var sortable = Sortable.create(todosContainer);