let val;

var a = 10; 
function abc(){
    return 0;
}

val=window;

console.log(val);

// alert

// alert ("hello");
//--------------------
// prompt

// var b = prompt("bir sayı girin");
// console.log(b);
//-------------------------------------------
// confirm

// var confirm = confirm("emin misiniz?");
// console.log(confirm);
//-----------------------------------------
// var confirm = confirm("emin misiniz?");
// if(confirm){
//     console.log("çok iyi");
// }else{
//     console.log("nedenini öğrenebilir miyim?");
// }
//-------------------------------------------------------------
// scroll 
let x;
x=scrollX;

let y;
y=scrollY;

console.log(x);
console.log(y);
//--------------------------
// location
let loc;
loc=window.location;
loc=window.location.href;
loc=location.hostname;

//window.location.href="http://ozantekin.dev" // bizi buraya yönlendirir
//window.location.reload();

console.log(loc);
//----------------------------------------------------------------------------------
// navigator 
// window üzerinden window.navigator veya navigator yaz
// ---------------------------------------------------------
// document
// window üzrinden yaz navigator gibi
//--------------------------------------------
//window üzerinden yazma dışında
let win0;
win0=document;
console.log(win0);
//--------------------------------
//.getElemntById
let win;
win=document.getElementById("header"); // HTML üzerinden Id verdik 
console.log(win);