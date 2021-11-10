const taskInput = document.querySelector('.task-input');
const taskTime = document.querySelector('.input-time');
const taskButton = document.querySelector('.task-button');
const taskList = document.querySelector('.tasklist');

document.addEventListener('DOMContentLoaded',getTasks);
taskButton.addEventListener('click',addTask);
taskList.addEventListener('click',deletetask);



function addTask(event){
    event.preventDefault();
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    //list item
    const newtask = document.createElement("li");
    newtask.innerText=taskInput.value;
   //console.log(" Time alloted: "+ taskTime.value);
    newtask.classList.add("task-item");
    taskDiv.appendChild(newtask);
    saveLocaltasks(taskInput.value);
    //Delete task button
    const deletetask = document.createElement('button');
    deletetask.innerHTML='<i class="fas fa-trash"></i>';
    deletetask.classList.add("trash-btn");
    taskDiv.appendChild(deletetask);
    //append the new task item to Div
    taskList.appendChild(taskDiv);
    //Clearing Todo Input
    taskInput.value="";
    //taskTime.value="";
}

function deletetask(e){
    const item=e.target;
    //to delete the list item
    if(item.classList[0]==="trash-btn"){
        const current = item.parentElement;
        current.classList.add("deletion");
        removeLocaltasks(current);
        //animation for deletion
        current.addEventListener('transitionend',function(){
            current.remove();
        });
    }
}


//function to check for existing todo list
function checklocal(tasks){
    if(localStorage.getItem("tasks") ===  null)
        tasks=[];
    else
        tasks= JSON.parse(localStorage.getItem("tasks"));
    
    return tasks;
}

function saveLocaltasks(task){
    let tasks;
    //check for existing todo list
    tasks=checklocal(tasks);
    tasks.push(task);
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function getTasks(){
    let tasks;
    tasks=checklocal(tasks);
    tasks.forEach(function(todo){
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        // list element
        const newtodo = document.createElement("li");
        newtodo.innerText=todo;
        newtodo.classList.add("todo-item");
        taskDiv.appendChild(newtodo);
        //Delete task button
        const deletetask = document.createElement('button');
        deletetask.innerHTML='<i class="fas fa-trash"></i>';
        deletetask.classList.add("trash-btn");
        taskDiv.appendChild(deletetask);
        //append the new todo item to Div
        taskList.appendChild(taskDiv);
    });
}

function removeLocaltasks(todo){
    let tasks;
    tasks=checklocal(tasks);
    const taskIndex = todo.children[0].innerText;
    tasks.splice(tasks.indexOf(taskIndex,1));
    localStorage.setItem("tasks",JSON.stringify(tasks));
}