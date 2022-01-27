// element oluşturma
const li=document.createElement("li");

// class ekleme
li.className="list-group-item list-group-item-warning";

// attribute ekleme
li.setAttribute("title","ozantekindev");
li.setAttribute("data","5");

// text node
const text=document.createTextNode("ozantekindev"); // texti li ile ilişkilendirmemiz gerekiyor
li.appendChild(text);


// çarpı icon ekleyelim
const a=document.createElement("a");
a.setAttribute("href","#");
a.className="delete-item float-right";
a.innerHTML='<i class="fas fa-times"></i>'; 
// class ile karışmaması için "" bunun yerine '' bunu kullanman gerekli


// a -> li ilave edelim
li.appendChild(a);

// li -> ul  ilave edelim
document.querySelector("#task-list").appendChild(li);

console.log(li);