const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',checkordeletetask);
filterOption.addEventListener('click',filterTodo);

function addTodo(event){
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newtodo = document.createElement("li");
    newtodo.innerText=todoInput.value;
    newtodo.classList.add("todo-item");
    todoDiv.appendChild(newtodo);
    saveLocalTodos(todoInput.value);
    //completed task button
    const completedtask = document.createElement('button');
    completedtask.innerHTML='<i class="fas fa-check"></i>';
    completedtask.classList.add("complete-btn");
    todoDiv.appendChild(completedtask);
    //Delete task button
    const deletetask = document.createElement('button');
    deletetask.innerHTML='<i class="fas fa-trash"></i>';
    deletetask.classList.add("trash-btn");
    todoDiv.appendChild(deletetask);
    //append the new todo item to Div
    todoList.appendChild(todoDiv);
    //Clearing Todo Input
    todoInput.value=" ";
}

function checkordeletetask(e){
    const item=e.target;
    //to complete the item
    if(item.classList[0]="complete-btn"){
        const currenttodo = item.parentElement;
        currenttodo.classList.toggle("completed");
    }
    //to delete the list item
    if(item.classList[0]==="trash-btn"){
        const currenttodo = item.parentElement;
        currenttodo.classList.add("deletion");
        //animation for deletion
        currenttodo.addEventListener('transitionend',function(){
            currenttodo.remove();
        });
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "All": 
                todo.style.display='flex';
                break;
            case "Finished":
                if(todo.classList.contains('completed')){
                    todo.style.display='flex';
                }
                else{
                    todo.style.display='none';
                }
                break;
            case "ToFinish": 
                if(todo.classList.contains('completed') === false){
                    todo.style.display='flex';
                }
                else{
                    todo.style.display='none';
                }
                break;
        }
    });
}

function saveLocalTodos(todo){
    //check for existing todo list
    let todos;
    if(localStorage.getItem("todos") ===  null)
        todos=[];
    else
        todos= JSON.parse(localStorage.getItem("todos"));
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}
