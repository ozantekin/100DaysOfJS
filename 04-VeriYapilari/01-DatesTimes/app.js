// data object

/* 
0.Gün Pazartesi ile başlar
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
let year = new Date('1/1/2001');

console.log(year);

