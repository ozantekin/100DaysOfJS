function getTotal (a,b,c){
    return a+b+c;
}

console.log(getTotal(10,20,30));

// spread
let numbers = [20,40,60];

// ES5
console.log( getTotal.apply(null,numbers)); 
/*apply bizden ilk kısımda parametreyi göndereceğimiz objeyi istiyordu
biz hehangi bir obje göndermek istemedğimiz için null girdik */

// ES6
console.log(getTotal(...numbers));

// ES6
let arr1=["two","three"];
let arr2=["one","four","five"];
let arr3 = ["one",...arr1,"four","five"];

arr1.push(...arr2); // reminder: sona ekler (1,2)

arr1.unshift(...arr2); // reminder: başa ekler (2,1)

console.log(arr1);


console.log(arr3);

// ES6
let h1 = document.querySelector("h1");

let divs = document.querySelectorAll("div");

let tags = [h1,...divs];

tags.forEach(tag=>tag.style.color="red"); 

console.log(tags);

/*
spread avantaj: 
Parametrelerle tek tek uğraşmaktansa bunları dizi halinde gönderip kullanabilme rahatlığı sağlar.
*/





