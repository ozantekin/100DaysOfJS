const btn=document.querySelector("#btnDeleteAll");
const ul=document.querySelector("#task-list");

//click
//btn.addEventListener("click",eventHandler);
//ul.addEventListener("click",eventHandler);

//double click
//btn.addEventListener("dblclick",eventHandler); // tek tık ile olay gerçekleşmez iki tık gerekir

// mouse down
btn.addEventListener("mousedown",eventHandler); // basıllı tuttup 

// mouse up
btn.addEventListener("mouseup",eventHandler); // bıraktığın zaman 

// mouse enter 
//ul.addEventListener("mouseenter",eventHandler); // üzerine geldiğniz an olay tetiklenir

//mouse leave
//ul.addEventListener("mouseleave",eventHandler); // üzerinden giderseniz

// mouse over 
//ul.addEventListener("mouseover",eventHandler);

// mouse out
//ul.addEventListener("mouseout",eventHandler);

// nesnelerin alt elemanlarında da out ve over çalışır ama enter ve leave çalışmaz 
// over ve out ul içinde bulunan a nın altında olan cross iconunun üzerine gidince çalışır ama leave ve enter çalışmaz

//mouse move
ul.addEventListener("mousemove",eventHandler); // mouse oynadığı sürece gerçekleşir

const h5=document.querySelector("h5");

function eventHandler(event) {
    console.log(`event type : ${event.type}`);

    //console.log(event); // bununla mouse move kordinatları alınabilir

    h5.textContent=`Mouse X : ${event.offsetX}, 
     Mouse Y :${event.offsetY}`;
}