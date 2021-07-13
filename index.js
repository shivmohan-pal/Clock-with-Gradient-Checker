let clock = document.querySelector(".clock");
let clockSticks = document.querySelectorAll(".stick");
let digiClock = document.querySelector(".D-clock");
let wall = document.querySelectorAll(".walls");
let gradient = document.querySelector(".gradient");

let red = document.querySelector(".red");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");
let opacity = document.querySelector(".opacity");

let rv = document.querySelector(".red").value;
let gv = document.querySelector(".green").value;
let bv = document.querySelector(".blue").value;
let av = document.querySelector(".opacity").value;

let today = new Date(),
   sec = today.getSeconds(),
    min = today.getMinutes(),
   hr = today.getHours();

let secStick = clockSticks[0],
    minStick = clockSticks[1],
    hrStick = clockSticks[2];


digitalClock();

blinker();

let bg;
red.addEventListener("change",function(event){
 let r= event.target.value;
 rv=r;
 bg= "rgba("+ rv +","+ gv +","+ bv +","+ av +")";
 wall[1].style.backgroundColor=bg;
 blinker();
});
green.addEventListener("change",function(event){
 let g= event.target.value;
 gv=g;
 bg= "rgba("+ rv +","+ gv +","+ bv +","+ av +")";
 wall[1].style.backgroundColor=bg;
 blinker();
});
blue.addEventListener("change",function(event){
 let b= event.target.value;
 bv=b;
 bg= "rgba("+ rv +","+ gv +","+ bv +","+ av +")";
 wall[1].style.backgroundColor=bg;
 blinker();
});
opacity.addEventListener("change",function(event){
 let a= event.target.value;
 av=a;
 bg= "rgba("+ rv +","+ gv +","+ bv +","+ av +")";
 wall[1].style.backgroundColor=bg;
 blinker();
});

function blinker(){
  let i=0;
  var blink = setInterval(function(){ 
                           gradient.style.backgroundColor="rgba(55,55,55,"+0.25+")";
                           setTimeout(function()
                                     {
                                      gradient.style.backgroundColor="rgba(55,55,55,"+0.6+")";
                                     },500);
                           i++;
                           if(i==2){clearInterval(blink);}
                           }, 1000);
}

function digitalClock(){
             
             setInterval(function(){
                       let today = new Date(),
                           sec = today.getSeconds() < 10 ? "0"+today.getSeconds() : today.getSeconds(),
                           min = today.getMinutes() < 10 ? "0"+today.getMinutes() : today.getMinutes(),
                           hr = today.getHours() < 10 ? "0"+today.getHours() : today.getHours(),
                           AM_PM = hr < 12 ? "AM" : "PM";
                       if(hr > 12)
                         {
                          hr-=12;
                          hr = hr < 10 ? "0"+hr : hr;
                          }    
                       let time = hr+":"+min+":"+sec+" "+AM_PM;
                       digiClock.innerText= time;
                       secStick.style.transform="rotate("+ (sec*6) +"deg)";
                       minStick.style.transform="rotate("+ (min*6) +"deg)";
                       hrStick.style.transform="rotate("+ ((hr*30)+(min*0.5)) +"deg)";
                       },1000);
}