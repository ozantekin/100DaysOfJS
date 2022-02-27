
var num={
    min: 0,
    max: 100,
    checkNumericRange: function(value){
        if (typeof value !== "number"){ // number değil ise 
            return false;
        }else{
            return value>=this.min && value<=this.max; // yani eğer bu aralıkta (min ve max) ise true veya false değer döndürecek
        }
    }
}

console.log(num.checkNumericRange(20)); // true alırız
console.log(num.checkNumericRange(-20)); // fasle
console.log(num.checkNumericRange("20")); // false

var num1={min:50,max:60};

console.log(num.checkNumericRange.call(num1,55)); // call ile çağırdık

console.log(num.checkNumericRange.apply(num1,[55])); // reminder: apply bizden dizi beklerdi [] dizi içine al

var checkNumber=num.checkNumericRange.bind(num1); // reminder: burada dönecek değer yeni bir function oluyordu 

console.log(checkNumber(55));


