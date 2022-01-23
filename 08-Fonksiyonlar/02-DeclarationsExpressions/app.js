// function declarations
function sum(a,b){
    var c = a+b;
return c;
}
console.log(sum(12,22));



// function expressions
const sum1 =function (a,b){
    var c=a+b;
    return c;
}
console.log(sum1(11,19));

// 
function sum2(a,b){
    var c = a+b;
    return c;
}

console.log(sum2(10)); // NaN alırız b undefined olur 
console.log(sum2(10,20,35,21)); // fazla gönderirsek fazla gönderilen göz ardı edilir 

// NaN ortadan kaldıralım
function sum3 (a,b){

    if (typeof b==="undefined") {
    b=0;
    }

    var c=a+b;
return c;
}

console.log(sum3(10));

// 2.yol
function sum4(a,b=0){
    var c=a+b;
    return c;
}

console.log(sum4(14));


//

function args(){
    console.log(arguments);
}

args(10,20,30);


// someAll 
function someAll(){
    var total =0;
    for ( let i=0; i<arguments.length;i++){
        total+=arguments[i];
    }
    return total;
}

console.log(someAll(10,20,30,40));