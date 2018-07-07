var button = document.getElementById("button");
var expression = document.getElementById("expression");
var result = document.getElementById("result");
var str;
var pattern1 = /\d{1,}\s\+\s\d{1,}/;
var pattern2 = /\d{1,}\s\-\s\d{1,}/;
var arr = [];
button.onclick = function() {
    str = expression.value;
    if (pattern1.test(str)) {
        result.innerHTML = "pattern1";
        arr = str.split("+");
        var a = +arr[0];
        var b = +arr[1];
        return console.log(a + b);
    }
    else if (pattern2.test(str)) {
        result.innerHTML = "pattern2";
        arr = str.split("-");
    }
    else {
        result.innerHTML = "неверный ввод данных";
       
    }
}
