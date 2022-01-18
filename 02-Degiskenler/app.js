let firstname='ozan';
console.log(firstname);

let lastname='tekin';
console.log(lastname);

let id=12312312312;
console.log(id);

let gender='male';
console.log(gender);

let hobbies=['coder','writer','software','technology'];
console.log(hobbies);

let address={
    city:'Istanbul',
    country:'Turkey'
}
console.log(address);

let order1='100';
let order2='150';
let total1=Number(order1)+Number(order2)
console.log(total1);

let order3='100.2';
let order4='150.5';
let total2 = parseFloat(order3)+parseFloat(order4);
console.log(total2);

let order5=parseInt('100.2');
let order6=parseInt('150.5');
let total3 = order5+order6;
console.log(total3);

 const yearOfBirth=2000; //let, var da değişir const sabit ve hata verir altı  yorum yaparsak çalışır
 //yearOfBirth=2002;
console.log(new Date().getFullYear()-yearOfBirth);

let course ='Modern JavaScript Kursu';
console.log(course.length);

// İleride daha detaylı gereceğiz zihninizde yer edinmesi açısından ufak bir not

/* 
var | Function Scope
let/ const | Block scope

Block scope’dan kasıt her bir süslü parantezin ({}) içerisidir Sonradan tekrar değiştirilebilir Aynı kapsam (scope) içerisinde sadece bir sefer tanımlanabilir.

*var 
Yani değişkenin( variable) kısaltmasıdır.
fonksiyon içerisindeki değerlerinin dışarıdan erişilebilir.
Var ile tanımlanan değişlenler kodun herhangi bir yerinde ve birden fazla kez kullanılabilir . Ya da tekrar tanımlanabilir.

*let
Sonradan tekrar değiştirilebilir Aynı kapsam (scope) içerisinde sadece bir sefer tanımlanabilir. Tekrar tanımlanmaya çalıştığında kod hata verir ve çalışmayı durdurur.

*Const
Constant yani Sabit anlamını taşımaktadır .
const ile tanımlanmış bir değişken let kullanımında olduğu gibi tanımlandığı kapsam (block scope) içerisinden erişilebilir ve bunun dışından erişimler sağlanmaz.
*/

//Mediu üzerinden daha detaylı bir açıklamasına ulabilirsiniz. Link için verletconst.md | https://medium.com/@ozantekindev (Bugün (18.01) gün içerisinde ekleyeceğim)








































// var age=21;
// console.log(age);

// var  fullname="ozan tekin"
// console.log(fullname);

// fullname='ozantekin.dev'
// console.log(fullname);


// değişken tanımlama kuralları 
 //sayısal ifade ile başlayamaz
//var 1yas
//$yas bu olur 



// değişken tipleri 

//primitive 

// let name="ozan";
// console.log(name);
// console.log(typeof name);

// let age =(21);
// console.log(age);
// console.log(typeof age);

// let yes = (true);
// console.log(typeof yes);

// //reference (objects)

// let names = ['ozan','memo','can'];
// console.log(typeof names);


// tür dönüşümü

// tür dönüşümleri

  


// let val=('10.7');

// val=parseInt(val);
// val=parseFloat(val);

// console.log(val);