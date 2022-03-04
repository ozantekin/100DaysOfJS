// ES5 
var personES5 = function (name,occupation,yearOfBirth){
    this.name=name;
    this.occupation=occupation;
    this.yearOfBirth=yearOfBirth;
}

personES5.prototype.calculateAge=function(){
    return 2022-this.yearOfBirth;
}

var ozan = new personES5 ("ozan","developer",2000);

console.log(ozan.calculateAge());

// ES6 
class personES6 {
    constructor(name,occupation,yearOfBirth){
        this.name=name;
        this.occupation=occupation;
        this.yearOfBirth=yearOfBirth;
    }

    calculateAge(){
        return 2022-this.yearOfBirth;
    }

}

let nida = new personES6("nida","student",2000);

console.log(nida.calculateAge());

// oluşturulan objelere daha detaylı bakalım 

console.log(ozan);

console.log(nida);

/* 
    personES6, personES5
    ikisinde de arka tarafta aynı işlemi yapar. 
    Oluşturulan instance içinde oluşturulan alanlar (name,occupation,yearOfBirt) kopyası çıkartılır. 
    Bu her instance için yapılır (ozan,nida,...)
*/