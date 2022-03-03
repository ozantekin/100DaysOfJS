const boxes = document.querySelectorAll(".box");

console.log(boxes);

// diziye çevirelim

// ES5
let boxesES5 = Array.prototype.slice.call(boxes);

boxesES5.forEach(function(box) {

    box.style.backgroundColor ="purple";

});

console.log(boxesES5);

// ES6
// from gönderdiğimizi değeri direkt diziye çevirir.
// object array döndürür
Array.from(boxes).forEach(box => box.style.backgroundColor="pink");

// ES5
for (let i=0; i<boxesES5.length;i++){
    console.log(boxesES5[i]);

    if(boxesES5[i].className=="box blue"){
        continue; // buna karışmaz geçer
        // break ise for döngüsünden çıkmış olacağımız için hiçibiri değişmez
    }
    boxesES5[i].textContent = "changed";
    boxesES5[i].style.backgroundColor="yellow";
    boxesES5[i].style.color="red";
}

// ES6
var boxesES6 = Array.from(boxes);

// burada i kontrol değişkeni ile uğraşmıyoruz 

for (let box of boxesES6){
    if(box.className=="box red"){
        continue;
    }
    box.textContent="ES6";
    box.style.backgroundColor="black";
    box.style.color="white";
}

console.log(boxesES6);

// from detaylı bakalım 
let arr = Array.from("I am currently learning JavaScript.");

console.log(arr);

// 
const members = [
    {name:"ozan",age:22},
    {name:"nida",age:22},
    {name:"yiğit",age:7},
    {name:"eylül",age:17}
]

console.log(Array.from(members, member => member));

console.log(Array.from(members,member => member.age));

console.log(Array.from(members,member => member.name));

console.log(Array.from(members,member => member.age == 22));

console.log(members.find(member => member.name=="ozan")); // burada obje geldi

console.log(members.filter(member => member.name=="ozan")); // burada ise obje dizisi gelir.
//birden fazla olusaydı filter tercih edilirdi aşağıdaki örnekte açıklayalım
console.log(members.filter(member => member.age == 22));

console.log(members.findIndex(member => member.age ==17)); // konumunu belirtir index numarasını belirtir. Olmasaydı -1 alırdık 

//
let numbers = ["a","b","c","d"];

let enteries = numbers.entries();

for (let i of enteries){
    console.log(i);
}

//
let keys = numbers.keys();

for( let i of keys){
    console.log(i);
}

//
let values = numbers.values();

for (let i of values){
    console.log(i);
}