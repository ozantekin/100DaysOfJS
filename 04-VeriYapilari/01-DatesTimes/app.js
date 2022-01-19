// data object

/* 
haftanın günleri 0.Gün Pazartesi ile başlar
0.Ay Ocak ile başlar
*/

let a = new Date();

// .get Methods
console.log(a.getDate());
console.log(a.getHours());
console.log(a.getFullYear());
console.log(a.getSeconds());

//
console.log(a);
console.log(typeof a);

// .set methods
let b = new Date();

b.setFullYear(2030);
b.setMonth(11);
b.setDate(5);
b.setMinutes(24);

//.setDay yok çünkü ayın kaçıncı günüyse haftanın günü otomatik olarak hesaplanır

console.log(b);

//hesaplamalar yapalım
// yıl, ay, gün şekilde yazılır
let birthday = new Date(2000,3,9);

console.log(a.getFullYear() - birthday.getFullYear());
console.log(a.getMonth()- birthday.getMonth());

console.log(birthday);

// 2.yazılış
let year = new Date('1/1/2001 14:50:06');
//normal yazıldığı gibi yazılır

console.log(year);

let newYear = new Date (2001,0,1,14,50,06);
/* 
yıl, ay, gün, saat,... şeklinde yazılır
Ay ise 0 ve Ocak ile başlar demiştik ona göre yazarız
Ayın günü öyle değil hangi gün ise o yazılır 0 ile başladığını hesap etmemiz gereken haftanın günleriydi
*/
console.log(newYear);

// çevirme 

var start = new Date("1/1/1990");
var end = new Date("1/1/1991")

var milisecond = end-start;
var saniye= milisecond / 1000;
var dakika = saniye / 60;
var saat = dakika / 60;
var gün = saat /24;

console.log("milisecond:" +milisecond);
console.log("saniye:" +saniye);
console.log("dakika:" +dakika);
console.log("saat:" +saat);
console.log("gün:" +gün);

// milisecond

var z = new Date("8/1/1985");

console.log(z.getTime()); // 1970 yılından 1985 e
console.log(Date.now()); // 1970 yılından bu tarihe kadar geçen milisecond

// yaş hesaplama 

var z = new Date("8/1/1985");
var w = Date.now() - z.getTime();

var ageDate= new Date(w);

console.log(w);
console.log(ageDate);
console.log(ageDate.getFullYear()- 1970);


