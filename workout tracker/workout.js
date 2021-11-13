const walkbtn= document.querySelector('.walkbtn');
const strengthbtn= document.querySelector('.strengthbtn');
const cardiobtn= document.querySelector('.cardiobtn');
const sportbtn= document.querySelector('.sportbtn');

const workoutlist=document.querySelector('.workouts');
let form=document.querySelector(".outerform");

const add= document.querySelector(".addworkout");
let date =document.querySelector('#date');
let duration =document.querySelector('#duration');
let calories =document.querySelector('#calories');
let workouttype="";

walkbtn.addEventListener('click',walk);
strengthbtn.addEventListener('click',strength);
cardiobtn.addEventListener('click',cardio);
sportbtn.addEventListener('click',sport);
add.addEventListener('click',addworkout);

function displayform(){
    form.style.display="block";
}

function walk(){
    displayform();
    workouttype="Walking/Running";
}

function strength(){
    displayform();
    workouttype="Strength";
}

function cardio(){
    displayform();
    workouttype="Cardio";
}

function sport(){
    displayform();
    workouttype="Sports";
}
function addworkout(){
    const workout=document.createElement('p');
    workout.innerHTML=`Workout Type-<em>${workouttype}</em><br>Date-<em>${date.value}</em><br>Workout Duration-<em>${duration.value}</em><br>Calories Burned-<em>${calories.value}</em>`;
    workoutlist.append(workout);
    form.style.display="none";
    date.value="";
    duration.value="";
    calories.value="";
}
