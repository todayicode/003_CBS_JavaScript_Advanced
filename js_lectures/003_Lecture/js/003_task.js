// window.onload = function() {
// var button = document.getElementById("button");
// var expression = document.getElementById("expression");
// var result = document.getElementById("result");
// var str;
// var pattern1 = /\d{1,}\s\+\s\d{1,}/;
// var pattern2 = /\d{1,}\s\-\s\d{1,}/;
// var arr = [];
// function compute() {
//     str = expression.value;
//     if (pattern1.test(str)) {
//         arr = str.split("+");
//         var a = +arr[0];
//         var b = +arr[1];
//         // result.innerHTML = a + b;
//         console.log(a + b);
//     }
//     if (pattern2.test(str)) {
//         arr = str.split("-");
//         var a = +arr[0];
//         var b = +arr[1];
//         // result.innerHTML = a - b;
//         console.log(a - b);
//     }
//     else {
//         console.log("неверный ввод данных");  
//     }
// }
// button.onclick = compute;
// }
var button = document.getElementById("button");
var expression = document.getElementById("expression");
var result = document.getElementById("result");
var str = expression.value;
console.log(str);

var arr = [];
button.onclick = function() {
    var operation = str.match(/[+*/-]/g)[0];
    arr = str.split(operation);
    var a = +arr[0];
    var b = +arr[1];
    console.log(a - b);
}


// window.onload = function(){
//     // Событие onblur возникает при выходе из элемента input
//     document.getElementById("input").onblur = function () {
//         // Получаем введенное пользователем значение
//         var str = document.getElementById("input").value;
//         // Получаем арифметический знак
//         var operation = str.match(/[+*/-]/g)[0];
//         // Получаем массив переданных элементов
//         var numberArray = str.split(/\W+/g);

//         document.getElementById("output").innerHTML = switCase(numberArray, operation);
//     }
//     function switCase(arr, oper){
//         // Полученные строковые элементы из input переводим в целочисленные с помощью
//         // функции parseFloat()
//         var a = parseFloat(arr[0]),b = parseFloat(arr[1]);
//         // Проверка на 0
//         if(a == 0 || b == 0 && oper == "/"){
//             return "На ноль делить нельзя!";
//         }
//         else{
//             // С помощью switch-case определяем арифметическую функцию и возвращаем результат
//             switch (oper){
//                 case "+": return a+b; break;
//                 case "-": return a-b;break;
//                 case "/": return a/b;break;
//                 case "*": return a*b;break;
//             }
//         }
//     }
// }
