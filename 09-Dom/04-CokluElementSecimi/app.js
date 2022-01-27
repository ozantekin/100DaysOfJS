// multiple elements
let val;

//---------------------------------------------------------------------------------------------------------------
// class name
// 1- dcoument.getElementByClassNmae();
val=document.getElementsByClassName("list-group-item");
val=document.getElementsByClassName("list-group-item")[0]; // tekli tekli almak için index yazılabilir.
//2.yol
val=document.getElementsByClassName("list-group-item");
val=val[2];

val=document.getElementsByClassName("list-group-item");
val[1].style.color="green";
val[1].style.fontSize="40px";
val[1].textContent="ozantekindev";

for(let i=0; i<val.length;i++){
    console.log(val[i].style.color="blue");
    console.log(val[i].textContent="yeni");
}

//-----------------------------------------------------------------------------------------------------------

// 2- document.getElementsByTagName();

val=document.getElementsByTagName("li");
//val=document.getElementById("task-list");
//val=val.getElementsByTagName("a");
// yukarıdakilerinin yerine bunu da kullanabiliriz
val=document.getElementById("task-list").getElementsByTagName("a");

//-----------------------------------------------------------------------------------------------------------------------------------------

// 3 - document.querySelectorAll();

val=document.querySelectorAll("li");

//NodeList o yüzden forEach(); kullanılabilir

val.forEach(function(item){
console.log(item);
});
val.forEach(function(item,index){
    item.textContent=`${index} - hi!`;
    });

val=document.querySelectorAll("li:nth-child(odd)"); // CSS hatırlatma tek rakamlıları even çift rakamlıları kapsar
val.forEach(function(item){
    item.style.background="red";
});

console.log(val);




// ****** .getElement ile başlayanlarda elimize gelen NodeList değil HTML collection ve HTML collection da foreach kullanılmaz for kullanılır

// query=> nodelist => foreach
//getelement=> HTML collection => for