var paragraphs = document.getElementsByTagName('p');
var anchors = document.getElementsByTagName('a');
var div = document.getElementById('test_div');
//кнопки
var pButton = document.getElementById('p');
var aButton = document.getElementById('a');
var divButton = document.getElementById('div');
//селектор параграфов
p.onclick = function() {
    for (var i = 0; i <= paragraphs.length; i++) {
    if (paragraphs[i].style.backgroundColor == "red") {
        paragraphs[i].style.backgroundColor = "white";
        paragraphs[i].style.color = "black";
        paragraphs[i].style.boxShadow = "none";
    }
    else {
        paragraphs[i].style.backgroundColor = "red";
        paragraphs[i].style.color = "white";
    }
    }
}
 //селектор ссылок
 a.onclick = function() {
    for (var i = 0; i <= anchors.length; i++) {
    if (anchors[i].style.backgroundColor == "red") {
        anchors[i].style.backgroundColor = "white";
        anchors[i].style.color = "black";

    }
    else {
        anchors[i].style.backgroundColor = "red";
        anchors[i].style.color = "white";
    }
}
}
  //селектор div
  divButton.onclick = function() {
    if (div.style.backgroundColor == "red") {
        div.style.backgroundColor = "white";
        div.style.color = "black";
    } 
    else {
    div.style.backgroundColor = "red";
    div.style.color = "white";
    
  }
}