// map : key/value pairs (collection)
let val;

const numbers = new Map();

numbers.set(1,"one"); // ilk key tanımlanıyor sonra value veriliyor 

numbers.set("2","two");

numbers.set(3,"three");

numbers.set("four","four");

val = numbers;

console.log(val);

// methods kullanalım
val=numbers.get(1);  // seçme işleme key değerlerine göre yapılır
console.log(val);

val=numbers.get("four");
console.log(val);

val=numbers.get("2");
console.log(val);

val=numbers.size; // kaç elemanlı olduğnu söyler
console.log(val);

val=numbers.has(1); // elemnın olup olmadığı sorulur
console.log(val);

val=numbers.has(5);
console.log(val);

//val=numbers.delete("four"); // four key ve value siler
val=numbers;
console.log(val);

//numbers.clear(); // elemanları sıfırlar
val=numbers;
console.log(val);

// for döngüsü ile yazdırma
for (var [key,value] of numbers){
    console.log(key + " = " + value);
}

for ( var [key,value] of numbers.entries()){
    console.log(key + " => " + value);
}

for ( var key of numbers.keys()){
    console.log(key);
}

for (var value of numbers.values()){
    console.log(value);
}

//
numbers.forEach(function (key,value) { 
    console.log(key + " - " + value);
 });    

 //
 var cities = new Map([
    [34,"İstanbul"],
    [06,"Ankara"],
    [21,"Diyarbakır"],
    [35, "İzmir"]
 ]);

 var classes = new Map([
    [3,"ilkokul"],
    [7,"ortaokul"],
    [9,"lise"]
    ]);

 var siblings = new Map([
    [1,"Derin"],
    [2,"Dara"]
    ]);

var merged = new Map([...classes,...siblings]);

console.log(merged);