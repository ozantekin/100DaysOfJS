// ES5
let welcomeES5 = function(){
    console.log("hello from ES5");
}

welcomeES5();

// ES6
let welcomeES6 = () => {console.log("hello from ES6")}; // tek bir satırlık kod olacaksa süslü paranteze bağımlı olmamıza gerek yok. Birden fazla kod olacaksa süslü prantez olmalı.

welcomeES6();

// with parameters ES5
let multiplyES5 = function(x,y){
    return x*y;
}

console.log(multiplyES5(7,11));

// with parameters ES6
let multiplyES6 = (x,y) => x*y; // parantez kullanmak zorunda değiliz kullanırsak return kullanmamız lazım

console.log(multiplyES6(4,22));

let multiplyES6Other = (x,y) => {return x*y};

console.log(multiplyES6Other(3,33));

// ES5 
let splitES5 = function(text){
    return text.split(" ");
}

console.log(splitES5("I am learning JavaScript."));

// ES6
let splitES6 = text => text.split(" ");

console.log(splitES6("I have been working software world for 3 years."));

// object literals ES5
let getProductES5 = function(id,name){
    return {
        id: id,
        name: name
    }
}

console.log(getProductES5("98765432109","HP Envy"));

// object literals ES6
let getProductES6 = (id,name) => ( 
    {
        id: id,
        name:name
    }
)

console.log(getProductES6("12345678901","HP Pavilion"));

// map
const teams = [
    {name:"Fenerbahçe",score:98},
    {name:"Beşiktaş",score:89},
    {name:"Trabzonspor",score:86},
    {name:"Galatasaray",score:41}
];

/* 
    ? dizi içerisinden yeni bir dizi oluşturmak istiyorsak map kullanıyorduk.
*/

// ES5
let scoreES5 = teams.map(function(team){
    return team.score;
});

console.log(scoreES5);

// ES6 
let scoreES6 = teams.map(team => team.score);

console.log(scoreES6);

// filter 
const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// evenES5
let evenES5 = num.filter(function(e){
    return e%2==0;
});

console.log(evenES5);

//evenES6 
let evenES6 = num.filter(e => e%2==0);

console.log(evenES6);

// oddES6
let oddES6 = num.filter(o => o%2==1);

console.log(oddES6);

