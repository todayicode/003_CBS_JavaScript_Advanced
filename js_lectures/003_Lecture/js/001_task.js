var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var miliSeconds = document.getElementById("miliSeconds");
var seconds = document.getElementById("seconds");
var minutes = document.getElementById("minutes");
var begin;
var milisec = 0;
var sec = 0;
var min = 0;
start.onclick = function() {
    begin = setInterval(function() {
        miliSeconds.innerHTML = milisec;
        seconds.innerHTML = sec + ":";
        minutes.innerHTML = min + ":";
        if (milisec == 100) {
            sec +=1;
            milisec = 0;
        }
        if (sec == 59) {
            min +=1;
            sec = 0;
        }
        if (min == 60) {
            hour += 1;
            min = 0;
        }
        milisec +=1;
    },1)
}
stop.onclick = function() {
    clearInterval(begin);
}
reset.onclick = function() {
    clearInterval(begin);
    sec = 0;
    min = 0;
    hour = 0;
    seconds.innerHTML = sec;
    minutes.innerHTML = min + ":";
    hours.innerHTML = hour + ":";
}