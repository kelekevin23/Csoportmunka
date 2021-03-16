
var tomb = [];
var osszeg = 0;
function feltolt() { 
    var ertek = document.getElementById("adat").value;
    for (var i = 0; i < ertek; i++) {
        tomb[i] = Math.floor(Math.random() * 10) + 1; //1-10 közötti számok    
    }

}

function osszegzes(){
    for (var i = 0; i < tomb.length; i++) {
        osszeg += tomb[i];
    }
    
}
function szerkezet() {
    feltolt();
    osszegzes();
    
    document.getElementById("szamok").innerHTML += "<br>" +tomb+ "<br>Az összeg: "+osszeg;
}

function init() {
    console.log("Bejelentkeztem");
    console.log(document.getElementById("adat").value);
    document.getElementById("gomb").addEventListener("click", szerkezet);
}
window.addEventListener("load", init);

//    var tomb= [3,14, 'macska', 56];
//    var Tomb = new Array(20);