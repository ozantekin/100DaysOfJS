let val;
val=10;
val= Number('10'); //string iffadeyi number çevirir
val = parseInt('10.5'); // ondalığı yok eder  
val = parseFloat('10.5'); // ondalıklı bir şekilde yazar
val=parseInt('10a'); // a yok eder 10 verir
val=parseInt('a10'); // NaN verir
val= isNaN('a10'); // NaN olup olmadığını sorgulamak için

var num =10.123456789;
val = num.toPrecision(); //string ifadeye çevirir
val=num.toPrecision(2); // genel sayıdn iki rakam yazdırır (10) yuvarlayarak yazdırır 10.9876 olsaydı 11 olurdu
val=num.toFixed(2); // virgülden sonraki sayı ve virgülden önceki sayıyı yazdırır (10.12) - string ifadeye de çevirir

val = Math.PI;
val=Math.round(2.4); // yuvarlar
val=Math.ceil(2.3); // yukarı yuvarlar
val=Math.floor(2.8); // aşağı yuvarlar
val=Math.sqrt(16); // kök içine alır
val=Math.pow(2,4); //2 üzeri 4
val=Math.abs(-100); // mutlak değer
val=Math.min(1,2,3,4,5,6,7);
val=Math.random(); // 0 ile 1 arasında ranodm sayı
val=Math.random()*10; // 0 ile 10
val=Math.round(Math.random()*10); // ondalıklı halini yok eder ve 0 10 arası random sayı üretir
val=Math.round(Math.random()*10+1); // 1 ile 11 arası olur

console.log(val);
console.log(typeof val);
// uygulama
var num=15.123456789;

console.log(num.toFixed(3));
console.log(num.toPrecision(3));
console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));
console.log(Math.min(1,10,20,45,86,2,3,4));
console.log(Math.max(1,10,20,45,86,2,3,4));

// min max arası değerler üret
var min=50;
var max=100;
console.log(min+Math.random()*(max-min)); // 50 ile 100 arası değer çıkar
console.log(Math.round(min+Math.random()*(max-min)));

// mesai çalışması
var brutMaas=3700;
var mesai=10.3;
var sure=42;

// bu ay 42 saaat mesai yapmış ise brüt bul
var toplamBrutMaas=brutMaas+(mesai*sure);
console.log(toplamBrutMaas);
// brüt üzerinden %25 kesinti varsa toplam net maaşı bul
var toplam = toplamBrutMaas-(toplamBrutMaas*0.25);
console.log(toplam);
//
var toplamBrutMaas=brutMaas+(mesai*sure);
console.log(toplamBrutMaas.toFixed(3));
//
var toplam = toplamBrutMaas-(toplamBrutMaas*0.25);
console.log(toplam.toFixed(3));
