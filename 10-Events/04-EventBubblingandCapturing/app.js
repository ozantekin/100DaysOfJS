

const form=document.querySelector("form");

const cardBody=document.querySelector(".card-body");

const card=document.querySelector(".card");

const container=document.querySelector(".container");

// bubling

// form.addEventListener("click",function(){
//     console.log("form");
// });

// cardBody.addEventListener("click",function(){
//     console.log("card body");
// });

// card.addEventListener("click",function(){
//     console.log("card");
// });

// container.addEventListener("click",function(){
//     console.log("container");
// });

// içten dışa doğru aktarım olur 

// bunu  durdurmak  için

// form.addEventListener("click",function(e){
//     console.log("form");
//     e.stopPropagation();
// });

// cardBody.addEventListener("click",function(e){
//     console.log("card body");
//     e.stopPropagation();
// });

// card.addEventListener("click",function(e){
//     console.log("card");
//     e.stopPropagation();
// });

// container.addEventListener("click",function(e){
//     console.log("container");
//     e.stopPropagation();
// });


// capturing
// burada da tam tersi olur dıştan içe aktarım olur
// varsayılan olarak false yani bubling destkeler true yaparsak capturing destekler

// form.addEventListener("click",function(){
//     console.log("form");
// },true);

// cardBody.addEventListener("click",function(){
//     console.log("card body");
// },true);

// card.addEventListener("click",function(){
//     console.log("card");
// },true);

// container.addEventListener("click",function(){
//     console.log("container");
// },true);

// aktarımı durdurmak için ama hata getirir en dışta durdurur o yüzden bubling kullamak daha mantıklı gibi

// form.addEventListener("click",function(e){
//     console.log("form");
//     e.stopPropagation();
// },true);

// cardBody.addEventListener("click",function(e){
//     console.log("card body");
//     e.stopPropagation();
// },true);

// card.addEventListener("click",function(e){
//     console.log("card");
//     e.stopPropagation();
// },true);

// container.addEventListener("click",function(e){
//     console.log("container");
//     e.stopPropagation();
// },true);


// uygulama yapalım 

// const deleteItems=document.querySelectorAll(".fa-times"); // birden fazla olduğu için all de eklenir 

// deleteItems.forEach(function(item){
//     item.addEventListener("click",function(e){
//         console.log(e.target);
//     });
// });

// 2.yol 

// const ul = document.querySelector("ul");

// ul.addEventListener("click",function(e){

//     //console.log(e.target); bu ul geneli için 

//     // ul içindeki eleman için  
//     if(e.target.className==="fas fa-times"){
//         console.log("icon");
//         console.log(e.target);

        
//         e.preventDefault(); // her seferinde scrollbarın yukarı çıkmasını önler
//     }
// });

// şimdi elemanı silme property aktifleştirelim 

const ul=document.querySelector("ul");

ul.addEventListener("click", function(e){
    if(e.target.className==="fas fa-times"){
        e.target.parentElement.parentElement.remove();

        e.preventDefault();
    }
});


// target ile elemanlara ulaşılablir foreach kullanmanın pekte bir gereği yok 