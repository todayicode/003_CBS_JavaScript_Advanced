
//модуль с использованием анонимной функции.
(function() {
        var allElements = document.querySelectorAll(".all");
        for (var i = 0; i <= allElements.length; i++) {
            allElements[i].innerHTML = "PARAGRAPH";
        };
    })();
