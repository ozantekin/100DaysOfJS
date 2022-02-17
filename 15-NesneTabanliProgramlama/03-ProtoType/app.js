let info = function(name,yearOfBirth,occupation){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.occupation=occupation;
    this.calculateAge=function(){
        return 2022-this.yearOfBirth;
    }
}

let ozan=new info("ozan",2000,"developer");

console.log(ozan);
console.log(ozan.calculateAge());

console.log("------------------------------------------------------------------------------------------------");

let protoInfo = function(name,yearOfBirth,occupation){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.occupation=occupation;
}

protoInfo.prototype.calculateAge=function(){  // console üzerinden baktığımızda proto ısmını aktarıldığnı görürüz.
    return 2022 - this.yearOfBirth;
}

protoInfo.prototype.getName=function(){
    return this.name;
}

protoInfo.prototype.lastName="tekin";


let nida=new protoInfo("nida",2005,"student");

console.log(nida);
console.log(nida.calculateAge());
console.log(nida.getName());
console.log(nida.hasOwnProperty("name")); // kendi bünyesinde olan bir değişken olduğu için true gelir
console.log(nida.hasOwnProperty("latname")); // lastName prototype içinde olduğu için flase gelir

console.log(nida.lastName);
// prototype kısmına gelenler protoInfo kısmına tek özel direkt oraya aktarılıyor kopyası gitmez yani
