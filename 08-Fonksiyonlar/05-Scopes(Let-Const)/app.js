// global scope
var name="ozan";

function logName(){
    console.log(name);
}

if(true){
    console.log(name);
}

logName();
console.log(name);
// her yerden ulaşabiliriz.
//--------------------------------------------------------------------------------
// alt başlık gibi ana başlık global ve local -function scope
function lastName(){
    var last="tekin";  // globale göre daha öncelikli olur
    console.log("function scope :",last); 
}
lastName();
// functionlar kendi scopelarını oluşturur | her fonksiyon içerisinde tanımladığımız değişken o function içinde geçerlidir. dışarıda ulaşamayız
//---------------------------------------------------------------------------------------------------------------------------------------------------------

// local scope
var age="32"; // blocklar yeni scope oluşturmaz!!!
if(true){
    var age="22"; // bu yazdırılır
    console.log("block scope",name,age);
}

console.log(age);

//---------------------------------------------------------

if(true){
    var model="slx";
    let year=1999;
    const color="blue";
    console.log("block scope :",model, year, color);
}
// console.log("block scope :",model, year, color); // bu yazdırılmaz 

// ES6 ile gelen let ve const blocke scope oluşturur
// var ile tanımlanan dışarıdan ulaşılabilir.
// let ve const dışarıdan ulaşılamaz.

console.log(model); // bu yazdırılır
// console.log(year); // bu yazılmaz
// console.log(color); // by yazılmaz

// let ve const dışarıdan ulaşılmaz karmaşık projelerde let ve const kullanmak daha mantıklıdır. var kullanmamaya çalışacağız. örnek ile açıklayalım

var i=1;
for (var i =0;i<10;i++){
    console.log("i :",i);
}

console.log(i);

var i=1;
for (let i =0;i<10;i++){
    console.log("i :",i);
}

console.log(i);