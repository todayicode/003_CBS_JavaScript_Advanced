window.onload = function() {
        var i = 5;
        var x = setInterval(countDown, 1000);
        function countDown() {
            document.getElementById("timer").innerHTML = i;
            i--;
            if (i < 0) {
                clearInterval(x)
            }
        }
        setTimeout(newWindow, 5000);
        function newWindow() {
            window.open("001_task.html", "google", "width=600px, height=600px");
        }
    
    }
