/*
Spread ile Rest arasındaki fark
    - Rest: İsteğe göre argüman girilmesine yardımcı olur.
    - Spread: Diziyi normalde argüman listesi bekleyen fonksiyonu aratmaya yarar 
*/ 

// ES5
function sum (){
    console.log(arguments);
}

// parametre göndermememize rağmen bunlar function içine gelir
sum(10,20,30);

function sumArrES5 (){
    let arr = Array.prototype.slice.call(arguments);

    console.log(arr);

    let result = 0; // başlangıçta 0'a eşitleyelim

    arr.forEach(function (item) {
        result+=item;
    });
    return result;
}

sumArrES5(20,30,40);

console.log(sumArrES5(20,30,40));

// ES6
function sumArrES6(...arr){
    let arrES6 = Array.prototype.slice.call(arguments);
    
    console.log(arrES6);

    let result = 0; 

    arr.forEach(item => result+=item);

    return result;

}

sumArrES6(40,50,60);

console.log(sumArrES6(40,50,60));

// ES5
function isDriverES5 (){
    let arrYear = Array.prototype.slice.call(arguments);

    console.log(arrYear);

   arrYear.forEach(function(yearES5){
       console.log(2022-yearES5>=18);
   });
}



isDriverES5(2000,2005,2002,2006,2004,2007);

console.log("--------------------------------------------------");

// ES6
function isDriverES6(...years){
    years.forEach(year => console.log(2022-year >= 18));
}

isDriverES6(2000,2005,2002,2006,2004,2007);

console.log("------------------------------");

// 1 den fazla parametre gönderelim
// bu durumda rest parametresi  mutlaka argümanların en sonda olmalı 
function clientYers(age,...clientYears){
    clientYears.forEach(clientYear => console.log(2022-clientYear>=age));
}

clientYers(19,2000,2005,2002,2006,2004,2007,);