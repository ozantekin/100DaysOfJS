const form=document.querySelector("form");
const input=document.querySelector("#txtTaskName");
const btnDeleteAll= document.querySelector("#btnDeleteAll");
const taskList= document.querySelector("#task-list");

// dizi ekleme
let items;   // global olarak tanımladık 

// amaç localstorage üzerinden almak

//load items
loadItems();

function loadItems() {
    items = getItemsFromLS();
    items.forEach(function (item) {
        createItem(item);
    });
}


// get items from local storage
function getItemsFromLS(){
    if(localStorage.getItem("items")===null){
        items=[];
    }else{
        items=JSON.parse(localStorage.getItem("items"));
    }
    return items;
}

// set item to local storage 
function setItemToLS(text){
    items=getItemsFromLS();
    items.push(text);
    localStorage.setItem("items",JSON.stringify(items));
}

// delete item from ls
function deleteItemFromLS(text){
    items=getItemsFromLS();
    items.forEach(function(item,index){
        if(item===text){
            items.splice(index,1);
        }
    });
    localStorage.setItem("items",JSON.stringify(items));
}

function createItem(text){
    const li=document.createElement("li");
    li.className="list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(text)); // inputtan değil de text değerinden değerler gelsin yani dışarıdan ekleme yapalalım

    const a=document.createElement("a");
    a.classList="delete-item float-end";
    a.setAttribute("href","#");
    a.innerHTML='<i class="fas fa-times"></i>';

    // li ekleme işlemi
    li.appendChild(a);

    //ul ekleme
    taskList.appendChild(li);
}

eventListeners();


function eventListeners (){

    // submit event
form.addEventListener("submit",addNewItem);

    // delete an item
taskList.addEventListener("click",deleteItem);

// delete all items
btnDeleteAll.addEventListener("click",deleteAllItems);


}



// add new item
function addNewItem(e){

    if(input.value=== ""){
        alert("add new item");
    }

    // buradaki değerleri yukarıdaki item içine taşıdık 

    // create item
    createItem(input.value); // bar kısmına yazılıp enterlanan değerleri ekler

    // save to local storage
    setItemToLS(input.value);

    //clear 
    input.value="";
    
    e.preventDefault();
}


// delete an item
function deleteItem(e){
    
    

        if(e.target.className ==='fas fa-times'){
            if(confirm("Are u sure?")){  // işlemi doğrulama alerti oluşturur 
            e.target.parentElement.parentElement.remove();


            //delete item from local storage
            deleteItemFromLS(e.target.parentElement.parentElement.textContent);
            

            }
        }

    

    e.preventDefault(); // a elementi olduğu için bu refersh olmayı önler button gibi elementlerde kullanmaya gerek yoktur
}

// delete all items

function deleteAllItems(){

    if(confirm("are u sure ?")){ 


    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    localStorage.clear();

    }

    e.preventDefault();
}

// url ile ilişkilendirilmiş bir local storge olacak.  siteyi her ziyaret edene özel bir local storage olacak ve önceki etkileşimleri kayıtlı kalacak.

// reminder :
// node list ile HTML collection arasındaki fark nodelist text nodeları da getirir

 