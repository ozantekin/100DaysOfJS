// string
var str1="ozan";
// new keyword kullandığımız için bunun bir cunstructor olduğunu biliyoruz
var str2 = new String("ozan");

console.log(str1);
console.log(typeof str1);

console.log(str2);
console.log(typeof str2);

if(str1=== "ozan"){
    console.log("yes");
}else{
    console.log("no");
}

if(str2==="ozan"){ // string!=object
    console.log("yes");
}else{
    console.log("no");
}

if(str2=="ozan"){ // type kontrolü yapılmadığı için yes çıktısını alırız 
    console.log("yes");
}else{
    console.log("no");
}

// number 
var num1=10;

var num2= new Number(10);

// boolean
var bool1=true;

var bool2= new Boolean(true);

// object
var obj1={
    name:"ozan",
    surname:"tekin"
};

var obj2=new Object({
    name:"nida",
    surname:"tekin"
});

// array 
var arr1=["ozan","nida","yiğit","eylül","meral","ekrem"];

var arr2= new Array(["ozan","nida","yiğit","eylül","meral","ekrem"])

// genişletelim metotları 

String.prototype.repeat=function (n) { 
    return new Array(n+1).join(this); // 0 dan başlayacağı için n+1 dedik 
 }

 console.log("ozan".repeat(2));

// array genişletelim
var list=["ardıl","nur","arin","aram"];

Array.prototype.remove=function(member){
    var index=this.indexOf(member); // indexof ile array içinden indexleri elemanaları ararız

    if(index>-1){ // index -1 den büyük ise bu eleman dizi içinde yer aldığını anlarız 0 = 1.index gibi
        this.splice(index,1)
    }
    return this; // diziyi tekrar yazdırır.
}

console.log(list.remove("ardıl"));

// kontrol işlemi için
var member =["baransel","kadir","mevlüt","mesut"];

Array.prototype.remove= Array.prototype.remove || function(member) {  // Array.prototype.remove den gelen değer null ise function u icra eder
    var index= this.indexOf(member);

    if(index>-1){
         this.splice(index,1)
    }
    return this;
}

console.log(member.remove("mesut"));

// bu kontolü yapmka ileri aşamlarda hatalrın önüne geçecektir