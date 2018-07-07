var button = document.getElementsByTagName('button');
var el = document.getElementById("text");
var text = el.value;
var paragraph = document.getElementById("paragraph");
function runString() {
    text = text.substring(1,) + text[0];
    el.value = text;
}

button.onclick = setInterval(runString, 100);

