var button = document.getElementById('button');
var el = document.getElementById("text");
var text = el.value;
var speed = 100;
function start() {
    timer = setInterval(runString, speed)
}
function runString() {
    text = text.substring(1,) + text[0];
    el.value = text;
}
button.addEventListener("click", start);



