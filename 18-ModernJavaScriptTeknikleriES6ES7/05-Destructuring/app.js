var a,b;

a=15;

b= 30;

console.log(a);

console.log(b);

console.log("----------------");

// destructuring assignment
var a, b;

[a,b] = [40,80];

console.log(a);

console.log(b);

console.log("----------------");

//
var a,b,rest;

[a,b,...rest] = [10,20,30,40,50,60,70,80,90];  
console.log(a);

console.log(b);

console.log(rest); // rest array şeklinde

console.log("----------------");

//
var a,b;

({a,b} = {a:10, b:20});

console.log(a);

console.log(b);

console.log("----------------");

//

var a,b,rest;

({a,b,...rest} = {a:11,b:12,c:13,d:14,e:15});

console.log(a);

console.log(b);

console.log(rest); // rest obje şeklinde

console.log("----------------");

// array destructuring
const arrConfig = ["localhost","8080",900];

// ES5
var serverES5 = arrConfig[0]; // reminder arrCongif 0.index'te bulunan elemanını al denir

var portES5 = arrConfig[1];

var timeoutES5 = arrConfig[2];

console.log(serverES5,portES5,timeoutES5);

console.log("----------------");

//ES6
const[serverES6,portES6,timeoutES6] = arrConfig;

console.log(serverES6,portES6,timeoutES6);

console.log("----------------");

// object destructuring
const objConfig = {
    server : "localhost",
    port : "8080",
    timeout : 900
}

// ES5
var objServerES5 = objConfig.server;

var objPortES5 = objConfig.port;

var objTimeoutES5 = objConfig.timeout;

console.log(objServerES5,objPortES5,objTimeoutES5);

console.log("----------------");

// ES6
const {server,port,timeout} = objConfig;

console.log(server,port,timeout);

console.log("----------------");

let {timeout : t} = objConfig; // object içindeki timeout alır t değişkeni içine atar

console.log(t); // timeout yazmıyoruz. timeout yazarsak hata alırız. çünkü timeout tanımladığımız değişken t oldu 

console.log("----------------");

const objConfigNew = {
    serverNew : "localhost",
    portNew : "8080"
}

var {serverNew,portNew,timeoutNew} = objConfigNew;

console.log(serverNew,portNew,timeoutNew); // timeoutNew olmadığı için undefined alırız

console.log("----------------");

var {serverNew,portNew,timeoutNew=900} = objConfigNew; // şimdi değer tanımladık 

console.log(serverNew,portNew,timeoutNew); // şimdi değer tanımladık 

console.log("----------------");

var days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];

var [wed,fri] = days; // 1. ve 2. parametrenin yerinden bahsedilir.

console.log(wed,fri); 

console.log("----------------");

// öteleme yapalım 
// her öteleme için bir virgül ekle

var days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];

var [,,wed,,fri]=days;

console.log(wed,fri);


