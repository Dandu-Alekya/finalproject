const walkbtn= document.querySelector('.walkbtn');
const strengthbtn= document.querySelector('.strengthbtn');
const cardiobtn= document.querySelector('.cardiobtn');
const sportbtn= document.querySelector('.sportbtn');

let walk=document.querySelector(".walk");
let strncardio=document.querySelector(".strength-cardio");
let sport=document.querySelector(".sport")

let add= document.querySelector("#addworkout");

walkbtn.addEventListener('click',addwalk);
strengthbtn.addEventListener('click',addstrncardio);
cardiobtn.addEventListener('click',addstrncardio);
sportbtn.addEventListener('click',addsport);
add.addEventListener('click',addworkout);

function addwalk(){
    walk.style.display="block";
    strncardio.style.display="none";
    sport.style.display="none";
}
function addstrncardio(){
    walk.style.display="none";
    strncardio.style.display="block";
    sport.style.display="none";
}
function addsport(){
    walk.style.display="none";
    strncardio.style.display="none";
    sport.style.display="block";
}

function addworkout(e){

}
