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
        milisec +=1;
        if (sec < 10) {
            seconds.innerHTML = "0" + sec + ":";
        }
        else {
            seconds.innerHTML = sec + ":";
        }
        if (min < 10) {
            minutes.innerHTML = "0" + min + ":";
        }
        else {
            minutes.innerHTML = min + ":";
        }
        if (milisec < 10) {
            miliSeconds.innerHTML = "0" + milisec;
        }
        else {
            miliSeconds.innerHTML = milisec;
        }
        if (milisec > 99) {
            sec +=1;
            milisec = 0;
        }
        if (sec > 59) {
            min +=1;
            sec = 0;
        }
        if (min > 59) {
            min = 0;
        }
        milisec +=1;
    }, 0)
}
stop.onclick = function() {
    clearInterval(begin);
}
reset.onclick = function() {
    clearInterval(begin);
    sec = 0;
    min = 0;
    milisec = 0;
    miliSeconds.innerHTML = "0" + milisec;
    seconds.innerHTML = "0" + sec + ":";
    minutes.innerHTML = "0" + min + ":";
    
}