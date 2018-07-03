var mButton = document.getElementById("mButton");
    var counter = 1;
    mButton.onclick = function() {
        if (counter <= 10) {
        var newParagraph = document.createElement('p');
        document.getElementById("parent").appendChild(newParagraph);
        newParagraph.innerHTML = "Paragraph " + counter;
        counter += 1;
    }
        else {
            // var tenParagraphs = document.getElementsByTagName("p");
            // for (var i = 0; i <= 10; i++) {
            //     document.getElementById("mmm").removeChild();
            // }            
            var element = document.getElementById("parent");
            while (element.firstChild) {
            element.removeChild(element.firstChild);
            counter = 1;
}
        }
}