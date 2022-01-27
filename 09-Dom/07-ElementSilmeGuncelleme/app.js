const taskList=document.querySelector("#task-list");

// *****element silme******

// taskList.remove();
// taskList.childNodes[1].remove();
// buradana rakamlar ne anlamalara geliyor inceleyebilirisiniz : https://www.w3schools.com/jsref/prop_node_nodetype.asp
// taskList.children[2].remove; // direkt 1.elemenı silmiş oluruz
// taskList.removeChild(taskList.children[2]);  // yukarıdaki ile aynı işlmei yapmış oluruz

// ******attribute silme*******

// taskList.children[0].removeAttribute("calss");
// for ( let i=0; i<taskList.children.length;i++){
//     taskList.children[i].removeAttribute("class");
// }

// *******element değiştrime*********

const cardHeader=document.querySelector(".card-header");

// element oluşturalım 

const h2 =document.createElement("h2");
h2.setAttribute("class","card-header");
h2.appendChild(document.createTextNode("ozantekindev"));

const parent = document.querySelector(".card");
parent.replaceChild(h2,cardHeader);

console.log(taskList);

// *******class değerlerini değiştirme********

let val; 
link=taskList.children[0].children[0];

val=link.className;
val=link.classList;
// val=link.classList[1];

link.classList.add("ozan");
link.classList.remove("ozan");

console.log(val);

// ********attributes**********  

val=link.getAttribute("class");
val=link.getAttribute("href"); // boş dolduralım 
val=link.setAttribute("href","https://www.ozantekin.dev/");
// bir attribute var mı yok mu nasıl bakabiliriz
val=link.hasAttribute("href"); // true
val=link.hasAttribute("data-id"); // fasle


console.log(val);

