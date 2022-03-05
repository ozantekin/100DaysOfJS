// ES5
function personES5(name,lang){
    this.name=name;
    this.lang=lang;
}


personES5.prototype.sayHi= function(){
    return `Hello, ${this.name} is learning ${this.lang}.`
}

function studentsES5(name,lang,age,job){
    personES5.call(this,name,lang); // reminder: personES5 cunstructor'ına age ve occupation gönderiyoruz
    this.age=age;
    this.job=job;
}

// reminder: şimdi studentES5  personES5 in prototype ulaşması lazımdı
studentsES5.prototype=Object.create(personES5.prototype);

var studentES5 = new studentsES5("Ozan","JavaScript",22,"developer");

console.log(studentES5.sayHi());

// ES6
class personES6{
    constructor(name,lang){
        this.name=name;
        this.lang=lang;
    }

    sayHi(){
        return `Hello, ${this.name} is learning ${this.lang}.`
    }
}

//extends: personES extend edecek anlamına gelir
class studentsES6 extends personES6{
    constructor(name,lang,age,job){
        super(name,lang);
        this.age=age;
        this.job=job;
    }
}

let studentES6 = new studentsES6("Ardıl","Solidity",22,"developer");

console.log(studentES6.sayHi());

//objelere göz atalım 
console.log(studentES5);

console.log(studentES6);

// işin içine static method girsin
class memberES6 {
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }

    sayHi(){
        return `Yeni üyenin ismi: ${this.firstName} ve soy ismi: ${this.lastName}.`
    }
}

class customersES6 extends memberES6 {
    constructor(firstName,lastName,phoneNumber,userName){
        super(firstName,lastName);
        this.phoneNumber=phoneNumber;
        this.userName=userName;
    }

    static getTotal(){
        return 1000;
    }
}

let customerES6 = new customersES6("nida","tekin","987544322","nidatekin");

console.log(customerES6.sayHi());

console.log(customerES6);

// console.log(customer.getTotal()); | reminder: hata alırdık çünkü static için instance içindeki obje kullanılmaz

console.log(customersES6.getTotal());