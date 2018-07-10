window.onload = function() {
var button = document.getElementById("button");
var expression = document.getElementById("expression");
var result = document.getElementById("result");
var str;
var pattern1 = /\d{1,}\s\+\s\d{1,}/;
var pattern2 = /\d{1,}\s\-\s\d{1,}/;
var arr = [];
function compute() {
    str = expression.value;
    if (pattern1.test(str)) {
        arr = str.split("+");
        var a = +arr[0];
        var b = +arr[1];
        // result.innerHTML = a + b;
        console.log(a + b);
    }
    if (pattern2.test(str)) {
        arr = str.split("-");
        var a = +arr[0];
        var b = +arr[1];
        // result.innerHTML = a - b;
        console.log(a - b);
    }
    else {
        console.log("неверный ввод данных");  
    }
}
button.onclick = compute;
}

