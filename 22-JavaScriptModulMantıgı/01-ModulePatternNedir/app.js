// 1- Global variable naming conflicts

var name = "Ozan";
var name="Yiğit";

console.log(name); // son tanımlanan değer olan name yazdırılır 

/*
İsim çakışması yaşadık bu sorunu gidermek için IIFE ile çözülür 
hata nasıl oluştu:
ilk var anahtar kelimesi script.js dosyasından gelsin 
ikinci var anahat kelimesi app.js dosyasından gelsin diyelim 
yaptığımız işlemde hepsi global scope altında toplanırdığı için birbirini ezerler.
*/

//---------------

// 2- Encapsulation

var Counter = {
    number: 1,
    increment : function(){
        return ++this.number;
    },
    decrement: function (){
        return --this.number;
    }
}

console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.decrement());
Counter.number=10; // buradan direkt gidişatı değiştirdik ama biz number objesine ulaşılmamasını isteriz çünkü number bir private eleman yani objeye özel bir elemandır
console.log(Counter.decrement());

/* 
Encapsulation nedir?
Encapsulation, modüle ait davranışların; fonksiyonlar ve metotların erişilebilir olmasını/olmamasını sağlar.
*/

//------------------------------

// IIFE (Immediately Invoked Function Expressions)

(function(){ // Kendine ait bir scope oluşturmuş oluyoruz

    var name = "ozan";
    console.log(name);

})();

(function(){

    var name = "yiğit";
    console.log(name);

})();

/* 
Burada tanımlanan değerler birbirini ezemedi dikkat edersek ikisi de yazıldı.
IIFE ile 1. durumda yaşadğımız sorun çözülmüş oldu
*/


//------------------------

(function(){

    //private members
    let number = 1;
    let increment = function () { 
        return ++number;
     }
     console.log(increment()); // bu yazdırılır çünkü içinde eriştik
     console.log(increment()); // bu yazdırılır çünkü içinde eriştik
        
    return {

        // public members

    }

})();

/*
Bu demek oluyor ki function içindeki elemanlara ulaşamayız ama return içindeki elemanlara dışarıdan ulaşabiliriz.
*/

//console.log(number); // hata alırız çünkü private members
//console.log(increment());// hata alırız çünkü private members

//-----------------

/* 
bu module dışarı açmamıza rağmen private elemanlara ulaşamayıız. var Modular = (function (){.....})();
ör: 
*/ 
var Module=(function(){ 
   // private members
    let number = 1;
    let increment = function () { 
        return ++number;
     }
        
    return {

         //public members

    }})();
    //console.log(number); // hata alırız çünkü private members
    //console.log(increment());// hata alırız çünkü private members


//------------------------

//ulaşabilmek için public kısma almamız gerekli 

var Module= (function(){

    //private members
    let number = 1;
    let increment = function () { 
        return ++number;
     }
     let dicrement = function(){
         return --number;
     }
        
    return {

        // public members
        increment,
        dicrement

    }

})();

console.log(Module.increment()); // erişebildik çünkü public kısma aldık 
console.log(Module.increment()); // erişebildik çünkü public kısma aldık 
console.log(Module.increment()); // erişebildik çünkü public kısma aldık 
console.log(Module.increment()); // erişebildik çünkü public kısma aldık 
console.log(Module.dicrement());
console.log(Module.dicrement());
console.log(Module.dicrement());
console.log(Module.dicrement());
console.log(Module.dicrement());


//-----------

// Özet

var sumModule = (function(){

    var privateMethod= function(){ // buna dışarıdan ulaşamayız çünkü bu bir private member

    };
    console.log(privateMethod()); // buradan ulaşabiliriz.

    return {

        publicMethod : function (){ // buna dışarıdan ulaşabiliriz çünkü bu bir public member

        }

    }

})();

console.log(sumModule.publicMethod()); // buradan ulaşabailirz


