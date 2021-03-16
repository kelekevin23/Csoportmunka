
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
function feladat3(){
    feltolt();
    var x = tomb.length;
    var visszafele = [];
    for (var i = 0; i < tomb.length; i++) {
        visszafele += tomb[x-1]+",";
        x -= 1;
    }
    document.getElementById("feladat3").innerHTML += "<br>" +visszafele;
}
function feladat6(){
    feltolt();
    f6 = false;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i]%2==0) {
            if(tomb[i]%3==0){
                f6 = true;
            }
        }
    }
}
function feladat9(){
    feltolt();
    for (var i = 0; i < tomb.length; i++) {
        for (var i = 0; i < max; i++) {
            
        }
    }
}
function szerkezet() {
    feltolt();
    osszegzes();
    feladat3();
    
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