// sets (collection - unique value)

let val;

var mySet = new Set();

mySet.add(1);

mySet.add(2);

mySet.add(2); // tekrar eklemez bu collection içinde tekil bilgiler tutabiliyoruz.

mySet.add(4);

mySet.add("2");

mySet.add({a:1,b:2}); // obje de gelmiş oldu

var obj = {a:1,b:2};

mySet.add(obj); // tekrar yeni aynı bir obje gelir çünkü referansı farklı bir objeye denk geldiği için

console.log(mySet);

// var mı yok mu sorgulatma

val = mySet.has(1);

console.log(val);

val =mySet.has(3);

console.log(val);

val = mySet.has(obj);

console.log(val);

//property 
// reminder => propert: parantez olmaz | method: parantez olur
val=mySet.size;

console.log(val);

//

mySet.delete(1);

console.log(mySet);

console.log("--------------------");

// for 

for ( let item of mySet){
    console.log(item);
}

for ( let item of mySet.keys()){
    console.log(item);
}

for ( let item of mySet.values()){
    console.log(item);
}

// set => key ve value aynı değeri temsil ediyor

console.log("--------------------");

for ( let [key,value] of mySet.entries()){
    console.log(key,value);
}

console.log("--------------------");

console.log(Array.from(mySet)); // mySet direkt diziye çevirebiliriz.

let mySet2 = new Set([1,2,3,4,5]);

console.log(mySet2);


console.log("--------------------");

// intersect 
// reminder: filter method array ile kullanılırdı
// filter kullanabilmek için mySet array çevireceğiz 
var intersect = new Set(Array.from(mySet).filter(x=>mySet2.has(x)));

console.log(intersect);

//2.yol

var intersect2 = new Set([...mySet].filter(x=>mySet2.has(x)));

console.log(intersect2);

// difference 
var difference = new Set ([...mySet].filter(x=>!mySet2.has(x)))// mySet2.has(x) 'in tam tersini alacağız

console.log("--------------------");

console.log(difference);

// uzun yol 

var difference2 = new Set (Array.from(mySet).filter(x=>!mySet2.has(x)));

console.log(difference2);

/* 
    ! Dikkat edilmesi gerekn filter array bir method o yüzden set'i array'e çevirmemiz gerek
    * YOL 1 => [...mySet].filter()
    * YOL 2 => Array.from(mySet).filter()
*/


