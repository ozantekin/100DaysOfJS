let val;

let list=document.querySelector(".list-group");

val = list;

val=list.childNodes; // NodeList => text node + elemenetler yani etiketler, karşımıza gelir

val=list.children; // HTML Collections => karşımıza elemenetler yani etiketler tek karşımıza gelir

val=list.childNodes;
val=list.childNodes[0];
val=list.childNodes[0].nodeName; // text node
val=list.childNodes[0].nodeType; // 0 değeri gelir
// w3chools üzerinden node typelara bakabilirsiniz.

/*
nodeType değerleri neleri belli eder
1 = element 
2 = attribute
3 = text
8 = comment line
*/

val=list.childNodes[1].nodeType;  // 1 değeri gelir

val=list.children;
val=list.children[0];
val=list.children[2].textContent="ozantekindev";
val=list.children[3].children; // li elemanın atlındaki etiketlere ulaşmak için kullanılabilir
val=list.children[3].getAttribute; // bu şekilde de tekli telki bir şekilde ulaşılabilir.

val=list.firstChild; // ilk node karşımıza gelir
val=list.firstElementChild;  // ilk etiket karşımıza gelir
val=list.lastChild;
val=list.lastElementChild;

val=list.childElementCount; // kaç tane element olduğunu söyler

 // children alt element - parent üst element
val=list.parentNode;  
val=list.parentElement; 
val=list.parentElement.parentElement; // üst elementşin üstüne gidilir

val=list.children[0].nextSibling; // bir sonraki eleman
val=list.children[0].nextElementSibling; // bir sonraki element

val=list.children[1].previousSibling;
val=list.children[1].previousElementSibling;

console.log(val);

for(let i=0; i<list.children.length;i++){
    console.log(list.children[i]);
}

for(let i=0; i<list.children.length;i++){
    console.log(list.childNodes[i]); // textler de gelir
}

for(let i =0; i<list.childNodes.length;i++){
    if (list.childNodes[i].nodeType===3) {
        console.log(list.childNodes[i]); 
    }
}

/*
nodeType değerleri neleri belli eder
1 = element 
2 = attribute
3 = text
8 = comment line
*/

