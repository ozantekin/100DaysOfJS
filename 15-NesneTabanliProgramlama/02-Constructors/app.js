// object literals
let me={
name:"ozan",
yearOfBirth:"2000",
occupation:"front-end developer"
}

console.log(me);

console.log("---------------------------------------");

function info(name,yearOfBirth,occupation){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.occupation=occupation;
    this.calculateAge=function(){
        return 2022-this.yearOfBirth;
    }

    console.log(this); // o anda üretilicek olan instance tanımlar. let içindeki ozan sonra nida gibi
}

let ozan = new info("ozan","2000","developer");
let nida= new info("nida","2000","student");

console.log("---------------------------------------");
console.log(ozan.name);
console.log(ozan.yearOfBirth);
console.log(ozan.occupation);
console.log(ozan.calculateAge()); //function olduğu için parantez açıp kapatıyoruz
console.log("---------------------------------------");
console.log(nida.name);
console.log(nida.yearOfBirth);
console.log(nida.occupation);
console.log(nida.calculateAge());

console.log("---------------------------------------");

// 2.yol 
let infoNew=function(name,yearOfBirth,occupation){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.occupation=occupation;
    this.calculateAge=function(){
        return 2022-this.yearOfBirth;
    }
}

let ozanNew = new infoNew("ozan new","1990","teacher");
let nidaNew= new infoNew("nida new","2005","doctor");


console.log(ozanNew.name);
console.log(ozanNew.yearOfBirth);
console.log(ozanNew.occupation);
console.log(ozanNew.calculateAge()); //function olduğu için parantez açıp kapatıyoruz
console.log("---------------------------------------");
console.log(nidaNew.name);
console.log(nidaNew.yearOfBirth);
console.log(nidaNew.occupation);
console.log(nidaNew.calculateAge());