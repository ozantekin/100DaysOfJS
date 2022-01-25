let val;

val=window.document;
val=document; 
val=document.all;
val=document.all.length;
val=document.all[10];
val=document.head;
val=document.body;
val=document.anchors; // collection
val=document.URL;
val=document.domain;
val=document.images;
val=document.title;
val=document.forms;
val=document.forms[0];
val=document.forms[0].id;
val=document.forms[0].method;
val=document.forms[0].action; // action yok o yüzden url nin kendisi gelir
val=document.scripts;
val=document.scripts[2];
val=document.scripts[2].getAttribute("src"); // ileride daha detaylı anlatacağım
// console üzerinden document. yazıp daha detaylı inceleyebiliriz. // ör: document.getElementById("txtTaskName");

console.log(val);