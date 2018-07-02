//модуль с использованием объекта в качестве пространства имен
var module1 = {
    changeContent: function() {
        var allElements = document.querySelectorAll(".all");
        for (var i = 0; i <= allElements.length; i++) {
            allElements[i].innerHTML = "PARAGRAPH";
        };
    }
};
module1.changeContent();