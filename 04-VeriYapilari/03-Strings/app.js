const firstName='ozan';
const lastName="tekin";
const age=22;
let hobbies="arasitirma,okuma,kodlama";
let val;

//length
//val=val.length; // karakter sayısını verir

// concatentaion
val=firstName+ lastName // yapışık
val =firstName+' '+ lastName;

val='ozan';
val +=' dev'; // ozan ın yanında dev ekler

val= 'Benim adım ' + firstName+' '+lastName+' ve yaşım '+age+ " İstanbul'da yaşıyorum"; //' İstanbul\'da yaşıyorum'; aynı sonuç

//concat
val=firstName.concat(' ',lastName);

//uppercase lowercase
val=val.toUpperCase();
val=val.toLowerCase();

//val=val[0]; //0.index alınır (o)

//val=val.indexOf("tekin"); // bulduğu değerin index numarasını yazar. İIndex 0 dan başlar
//val=val.indexOf("x"); // ifade içinde yoksa -1 sonucunu alırız

//substring
//val=val.substring(0,5); // 0 ile 5 arasındaki indexleri yazdırır

//slice
//val=val.slice(6); // substring gibi // 6 dan başlar ve string ifadenin bittiği yere kadar yazdırır (ekin)

//string search
val=val.replace("ozan","dev"); // ozanyerine dev yazar

//trim
val="          "+val.replace("ozan","dev")+"        ";
val=val.trim(); // boşlukları yok eder

val=hobbies.split(','); // virgül olduğu yerden ayırır

console.log(val);
console.log(typeof val);

// uygulama
var sentence =" Template Literals or template strings is the ability have multi-line strings without any funny business. ";
var url="http://www.ozantekin.dev/ istanbul  javascript nutuk araştırma";

//karakter sayısı
console.log(sentence.length ); // boşluk dahil

// kaç kelime (boşluk sayılmasın)
console.log(sentence.split(" ")); // boşluklardan böler ama baş ve sondaki boşlukları da sayar
console.log(sentence.trim().split(" ").length); // trim eklennir

// - ifadesini çıkar
console.log(sentence.replace("-"," "));

// str kısmını çıkar url kısmından
var str='http://';
console.log(url.substring(str.length));
console.log(url.slice(str.length));

// url hangi protocol kullanır
console.log(url.startsWith("https"));
console.log(url.startsWith("http"));

// url .com içeriyor mu 
console.log(url.indexOf(".com")); // -1 ise yok anlama geliyordu
console.log(url.indexOf(".com")); // bulunduğu konumu gösterir
console.log(url.includes(".com")); // true false döndürür

// url geçerli bir url haline getirelim
console.log(url.toLowerCase()
.replace(/ /g,"-") //.replace(" ","-") ilk boşluk tek - gelir
.replace(/ı/g,"i")
.replace(/ş/g,"s")
);
