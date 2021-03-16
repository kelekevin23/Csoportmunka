var parosok= [];
var tomb = [];
var osszeg = 0;
var feladat4db = 0;
var g =0;
function feltolt() { 

    var ertek = document.getElementById("adat").value;
    for (var i = 0; i < ertek; i++) {
        tomb[i] = Math.floor(Math.random() * 10) + 1; //1-10 közötti számok    
    }

}

function osszegzes() {
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
<<<<<<< HEAD
    feladat3();
=======

    feladat4();
    document.getElementById("szamok").innerHTML += "<br>" + tomb + "<br>Az összeg: " + osszeg;
>>>>>>> aafee1953da589048ff3a79bacb3cbfea3f9be82
    

    feladat2();
    document.getElementById("szamok").innerHTML += "<br>" +tomb+ "<br>Az összeg: "+osszeg;
    document.getElementById("parosok").innerHTML += "<br>" +parosok+ "<br>";

}

function feladat4(){
    feltolt();
    for (var j = 0; j < tomb.length; j++) {
        if (tomb[j] % 5 === 0) {
            feladat4db += 1;
        }
    }
    document.getElementById("feladat4").innerHTML += feladat4db;
}
function feladat7(){
    feltolt();
    for (var i = 0; i < tomb.length; i++) {
        //itt tartok
    }
    
}
function init() {
    console.log("Bejelentkeztem");
    console.log(document.getElementById("adat").value);
    document.getElementById("gomb").addEventListener("click", szerkezet);
}
    function feladat2(){
	feltolt();
    for (var i = 0; i < tomb.length; i++) {
        if(tomb[i]%2===0){
          parosok[g]=tomb[i]; 
          g++;
        }
        
    }
    
	
}
function feladat3(){
    feltolt();
    
}
window.addEventListener("load", init);

//    var tomb= [3,14, 'macska', 56];
//    var Tomb = new Array(20);