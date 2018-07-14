
  var counter1 = 0;
  var counter2 = 0;
  var counter3 = 0;
  var lesson;
  //каждая кнопка передает свой номер в общую функцию
  document.getElementById("js1").onclick = function() {
    lesson = 1;
    check(lesson);
}
document.getElementById("js2").onclick = function() {
    lesson = 2;
    check(lesson);
}
document.getElementById("js3").onclick = function() {
    lesson = 3;
    check(lesson);
}
  //общая функция на три урока, подставляет нужный номер урока
function check(a) {
  window["counter" + 1] += 1;
    if (window["counter" + 1] % 2 !== 0) {
    newWindow = window.open("../html/004_" + a + "_task.html", "JS Урок " + a, "width=300,height=300");
    document.getElementById("js" + a).innerHTML = "JS Урок " + a + " (открыт)";
}
  else {
      newWindow.close();
      document.getElementById("js" + a).innerHTML = "JS Урок " + a;
    }
}

