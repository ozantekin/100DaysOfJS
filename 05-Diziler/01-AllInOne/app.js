// array
let names=["ozan","tekin","dev"];

let years=[2000,2001,2002,2006];

let mix =["ozan",2000,"tekin",null,undefined,['araştırma','kodlama']];

console.log(names);
console.log(names.length);
console.log(typeof names);
console.log(years);
console.log(mix);

// get array item
console.log(names[2]); //2.index alınır

// set array item 
names[4]="kodlama"; // 4.index kodlama oldu ve 3.index boş bir eleman olur

// yukarıdaki sorunu gidermek için
names[names.length]='yazılım'; // sonuncu indexten sonraya direkt ekler uğraşmana gerek kalmaz

// add item
years.push(1999); // sonuncu index e atar
years.unshift(2022); // ilk index e atar

// remove item
years.pop(); // son eleman gider
years.shift(); // baştaki eleman gider

// indexof
let index=names.indexOf("Türkiye");
console.log("index: "+ index); // -1 bulunmadığını temsil eder

//includes
console.log(mix.includes("tekin")); // tekin elemanı mıdır true evet elemandır 

//reverse 
names.reverse(); // takla

//sort
years.sort(); // küçükten büyüğe sıralar | string ifadeyi de alfabetik sıralamaya göre sıralar

// concat
let val = years.concat(names);
console.log(val);

//splice
names.splice(2,1); // 2.indexten itibaren 1 tane eleman silsin demek yani sadece 3.index i siler
names.splice(2,1,'JavaScript'); // silinene yere javascript yazılır

// ileride detaylı anlatılacak
function over18(year){
let age = 2022 - year;
return age>=18;
}
console.log(over18(1990)); // 18 den büyük ise true değer yazılır

//find
let val1 = years.find(over18);
console.log(val1); // 18 den büyük olacak ilk değeri console yazdırır 1 değer tek yazar

//filter
let val2=years.filter(over18); // 18 den büyük birden fazla değeri console üzerine yazdırır
console.log(val2);

// uygulama
let ex=["bmw", "opel","slx","porsche"];

console.log(ex[ex.length]); // length 4olduğu için 4. index console yazar o da tanımsız

console.log(ex[ex.length-1]); // son index yazar

ex[ex.length]="fiat" // sona fiat ekler

console.log(ex);

// sıralama zamanı sadece en baştaki haneye bakarak küçükten büyüğe sıralar bu sorun ortadan kaldıralım ileride daha net anlayacaksınız. Büyük resmi görmeniz açısından ekliyorum
var sayi=[1,2,3,4,56,67,82,15,9];
console.log(sayi.sort());

function compare(a,b){
    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;
}
console.log(sayi.sort(compare));

console.log(ex.indexOf("doğan")); // doğan elemanı mıdır? -1 değil 

// uygulama 
// var str ="araba,motor" bunu diziye çevir
//var str = ["araba", "motor"]; 1.way
var str ="araba,motor";
var str2=str.split(",");
console.log(str2);

// arrayler birleştirilir
var str3=str2.concat(mix);
console.log(str3);

// son 2 index sil
console.log(str3.splice(6,2)); // 6 dan sonra 2 eleman sil
console.log(str3);

//slice
var a = [1,2,3,4,56,7,9,8,56,54];
console.log(a);
console.log(a.slice(6,9)); // 6 dahil 9 dahil değil aralıkta kalan indexleri console yazar

// uygulama 
var std1 = ["ozan","tekin",2000];
var std2= ["nida","tekin",2000];
var std3 =["yiğit","tekin",2015];

var students=[std1,std2,std3];

console.log(students);

console.log(students[0]);
console.log(students[0][0]);
console.log(students[0][1]);

console.log(students[1]);
console.log(students[1][0]);
console.log(students[1][1]);
// bunların kısayolunu döngülerde göreceğiz 
