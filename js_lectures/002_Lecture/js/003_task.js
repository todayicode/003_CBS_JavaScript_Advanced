var myQyery = {
    findClass: function(className) {
        return document.getElementsByClassName(className);
    }
}
console.log(myQyery.findClass("paragraph"));