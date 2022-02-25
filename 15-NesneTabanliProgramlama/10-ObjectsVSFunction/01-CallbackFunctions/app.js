let val;

function multipleByTwo(a,b,c){
    let arr =[];
    for(let i=0;i<3;i++){
        arr[i]=arguments[i]*2 // fonksiyona gönderilen değerlere arguments ile ulaşılabilir
    }
    return arr; // doldurduğumuz diziyi geriye gönderiyoruz
}

val=multipleByTwo(5,10,20); // 2 katına aldık 

//console.log(val);

//------------------------------------------------

function addOne(a){
    return a+1;
}

//val=addOne(10); // 1ekledik 

//console.log(val1);

//-----------------------------------

    for(let i=0;i<val.length;i++){ // bu yaptığımız işlemi şimdi callback ile yapalım
        val[i]=addOne(val[i]);
    }

console.log(val);  // 2 katını aldık sonra 1 ekledik

//-------------------------------------------------------------------------

let val1;

function multipleByTwo1(a,b,c,callback){
    let arr=[];
    for(let i=0;i<3;i++){
        arr[i]=callback(arguments[i]*2);
    }
    return arr;
}

function addOne(a) { 
    return a+1;
 }

function addTwo(a){
    return a+2; 
}

function addThree(a){
    return a+3;
}

val1=multipleByTwo1(5,10,20,addThree); // ,addOne ,addTwo ,addThree gönderebiliriz.

console.log(val1); // 2 ile çarptıktan sonra 3 eklemiş olduk

//---------------------------------------------------------------------------------------------------

let val3;

function multipleByTwo2(a,b,c,callback){
    let arr=[];

    if(callback && typeof callback==="function"){ // dışarıdan gönderdiğimiz function değil ise boş bir dizi gelir hesaplama yapmaz
        for(i=0;i<3;i++){
            arr[i]=callback(arguments[i]*2);
        }
    }
    return arr;
}

function addFour(a){
    return a+4;
}

val3=multipleByTwo2(5,10,20,addFour);

console.log(val3);

//------------------------------------------------------------

let val4;

function multipleByTwo3(a,b,c,callback){
    let arr=[];
    for(let i=0;i<3;i++){
        arr[i]=callback(arguments[i]*2);
    }
    return arr;
}

val4=multipleByTwo3(5,10,20,function (a){ // tek seferliğe mahsus kullanılacaksa anonymous function kullanılabilir. callback function olarak direkt burada kullanılabilir.
    return a+5;
});

console.log(val4);

