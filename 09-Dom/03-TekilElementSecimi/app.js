// select elements 

// single elements

// documen.getElementById 1.yol olsun
let val;
val=document.getElementById("header");
val=document.getElementById("header").id;
val=document.getElementById("header").className;

/// 2. yol aşağıdakiler gibi 
// val=val.id;
val.className;

val=document.getElementById("header");
val.style.fontSize="105px";
val.style.color="red";
val.style.fontWeight="bold";
// val.style.display="none";
console.log(val);

val=document.getElementById("header").innerText="ozan tekin dev";  // to do app değişir
val=document.getElementById("header").innerHTML="<b>ozan tekin dev</b>";  // HTML etiketi eklemek istiyorsak




// document.querySelector 2. yol olsun 

console.log(document.querySelector("#header"));
console.log(document.querySelector(".card-header"));
console.log(document.querySelector("h1"));
console.log(document.querySelector("div"));
// ilk li red olur
document.querySelector("li").style.color="red";
// son li blue olur
document.querySelector("li:last-child").style.color="blue";
// index numarası ile renk değiştirme
document.querySelector("li:nth-child(2)").style.color="green";
document.querySelector("li:nth-child(3").textContent="ozantekindev"; // li değiştirdik 

// .innertext ve .textcontent => aynı amaç için kullanılabilir (text değiştirmek için)

document.querySelector("li").className="list-group-item list-group-item-warning"; // class warning oldu

document.querySelector("li:nth-child(3)").classList.add("active"); // classı siler üzerine add ile atadığnızı getirir