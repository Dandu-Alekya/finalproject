const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


todoButton.addEventListener('click',addTodo);

function addTodo(event){
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newtodo = document.createElement("li");
    newtodo.innerText=todoInput.value;
    newtodo.classList.add("todo-item");
    todoDiv.appendChild(newtodo);
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
