let employee = function (name,yearOfBirth,occupation){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.occupation=occupation;
}

employee.prototype.calculateAge = function (){
    return 2022 - this.yearOfBirth;
}

let boss = function(name,yearOfBirth,occupation,assignment){
    // bunları tekrar yapmamıza gerek yok employee içinde yaptık zaten, bunun yerine employee constructor yapacağız
    // this.name=name;
    // this.yearOfBirth=yearOfBirth;
    // this.occupation=occupation;
    employee.call(this,name,yearOfBirth,occupation);
    this.assignment=assignment;
}

// calculateAge tanımlayalım 
//inherit the employee prototype methods
boss.prototype=Object.create(employee.prototype);

let nida = new boss("nida",2000,"anaesthetist","guard"); // bu işlemi prototype oluşturma işkeminden sonra yapmamız gerek yoksa hata alırız

boss.prototype.greeting=function () { 
    return "hello my name is" +tihs.name; // console üzerinden bakacak olursak proto kısmında employee da yer alacak bunun bir altında ise calculateAge bulunur
 }

// set boss conctructor
boss.prototype.constructor=boss;
//console.log(boss.prototype.constructor);

console.log(nida);
console.log(nida.calculateAge()); // person dan inherit etmiş olduk

// ES6 bölümünde class keyword kullanımını göreceğiz