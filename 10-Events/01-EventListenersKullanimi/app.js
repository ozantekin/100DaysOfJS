const btn = document.querySelector("#btnDeleteAll");
const btn2=document.querySelector("#btnAddNewTask");

btn.addEventListener("click",btnClick);

btn2.addEventListener("click",btnClick2);
// birden fazla function da eklenebilir
btn2.addEventListener("click",btnClick);

function btnClick(){
    console.log("btn delete all");
}

function btnClick2(){
    console.log("btn add new task");
}

// btnler a nın içinde ve href :# olduğu için tıkladığımızda sayfa refreshlenir onu durduralım 
const cross =document.querySelector(".delete-item");

cross.addEventListener("click",function(e){
    
    //console.log("delete item");

    let val;
    val=e;
    val=e.target; // hangi butonun tıklandığını verir
    val=e.target.dispatchEvent;
    val=e.target.classList;
    val=e.type;
    console.log(val);
    
    e.preventDefault(); // scrollbar sabit
});

// 2.yol 
// tek seferlik kullanılacaksa böyle oluşturulabilir
// btn.addEventListener("click",function(){
// console.log("btn clicked");
// });