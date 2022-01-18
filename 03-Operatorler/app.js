const canBoy=1.70;
const adaBoy=1.55;

const canKilo=80;
const adaKilo=55;

let indexCan= (canKilo) / (canBoy*canBoy);
let indexAda= (adaKilo) / (adaBoy*adaBoy);

console.log(indexCan.toFixed(), indexAda.toFixed()); //yuvarlar

let adaZayıf = (indexAda>=0) && (indexAda<=18.4);
let adaNormal = (indexAda>=18.5) && (indexAda<= 24.9);
let adaKilolu = (indexAda>=25.0) && (indexAda<= 29.9);
let adaObez = (indexAda>=30.0) && (indexAda<= 34.9);


let canZayıf = (indexCan>=0) && (indexCan<=18.4);
let canNormal = (indexCan>=18.5) && (indexCan<= 24.9);
let canKilolu = (indexCan>=25.0) && (indexCan<= 29.9);
let canObez = (indexCan>=30.0) && (indexCan<= 34.9);

console.log(adaZayıf);
console.log("Ada normal mi:" +adaNormal);
console.log(adaKilolu);
console.log(adaObez);

console.log("Can zayıf mı:" +canZayıf);
console.log("Can normail mi:" +canNormal);
console.log("Can kilolu mu:" +canKilolu);
console.log("Can obez mi:" +canObez);


/* 
!= | Eşit değil mi?
!== | Eşit değil mi? (Tip kontrolü de yapılır)
>= | Büyük eşit mi? (Büyük ise TRUE, Eşit ise TRUE)
*/

/* 
Lise mantık gibi düşünülebilir
&& (And) | True && True = True diğer kombinasyonlar false 
|| (Or) | False || False = False diğer kombinasyonlar true
! (Not) || True ise Falsa yapar, False ise True yapar
*/

/*
+ toplama
- çıkarma
* çarpma
/ bölme
% bölüm sonrası kalan değer
++ Artış
-- Azalış 
*/

let x = 10; 
x +=5; // x ile 5 i toplar

let y=20;
y -=3; // 3 çıkarır

console.log(x);
console.log(y);