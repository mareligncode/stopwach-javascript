let secondElapsed=0;
let interval=null;
const time=document.getElementById('time')
function padStart(value){
    return String(value).padStart(2,'0');
}

function setTime(){
    const minut=Math.floor(secondElapsed/60);
    const second=secondElapsed%60;
    time.innerHTML=`${padStart(minut)}:${padStart(second)}`;
}

function timer(){
    secondElapsed++;
   
    setTime();
}
function startClock(){
    if(interval) stopClock()
    //if(interval) resetClock()
    interval=setInterval(timer,1000);
    

}
function stopClock(){
    clearInterval(interval)

}
function resetClock(){
    stopClock();
    secondElapsed=0;
    setTime();

}
function cs(){
    document.getElementById('h2').innerHTML="wellcome family";
}
function ss(){
    document.getElementById('img').src='img/smart5.jfif';
}
function sd(){
    document.getElementById('img').src="img/s64.jfif"
}
function datee(){
    document.getElementById('h4').innerHTML=Date()}