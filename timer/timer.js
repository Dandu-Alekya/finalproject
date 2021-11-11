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
    
  