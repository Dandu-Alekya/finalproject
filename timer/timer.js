/*const taskInput = document.querySelector('.task-input');
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
*/
function $(id) { 
    return document.getElementById(id); 
}

var hours =0;
var mins =0;
var seconds =0;

const startbtn = document.querySelector("#start");
const stopbtn = document.querySelector("#stop");
const resetbtn = document.querySelector("#reset");
const savebtn = document.querySelector("#save");
let mindis = document.querySelector("#mins");
let secdis = document.querySelector("#seconds");
let hrdis = document.querySelector("#hours");

startbtn.addEventListener('click',() =>{
    startTimer()
});

stopbtn.addEventListener('click',() => {
    clearTimeout(timex)
});

resetbtn.addEventListener('click', () => {
    hours = 0;      
    mins = 0;      
    seconds = 0;
    mindis.textContent="00:";
    hrdis.textContent="00:";
    secdis.textContent="00";
  });

function startTimer(){
    timex = setTimeout(function(){
       seconds++;
    if(seconds >59){
        seconds=0;
        mins++;
       if(mins>59) {
        mins=0;
        hours++;
        if(hours <10) {
            hrdis.textContent='0'+hours+':';
        } 
        else 
            hrdis.textContent=hours+':';
    }              
    if(mins<10){                     
      mindis.textContent='0'+mins+':';
    }       
    else 
       mindis.textContent=mins+':';
    }    
    if(seconds <10) {
      secdis.textContent='0'+seconds;
    } 
    else {
      secdis.textContent=seconds;
    }
    startTimer();

  },1000);
}
    
  