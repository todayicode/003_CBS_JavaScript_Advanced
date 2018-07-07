document.getElementById("execute").onclick = function() {
    var str = location.search.substring(1); 
var arr = str.split("&");
var obj = {};
var eqv;
var result = 0;
for (var i = 0; i < arr.length; i++) { 
        eqv = arr[i].indexOf("=");                               
        if (eqv == -1) { 
            continue
        }
        var name = arr[i].substring(0, eqv);
        var value = arr[i].substring(eqv + 1);
        obj[name] = value;
    }
    for (var n in obj) {
        result+= +obj[n];
    }
    document.getElementById('result').innerHTML = "Сумма " + result;
    console.log(obj);
}




