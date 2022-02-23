function employee(name,salary){

    if(!(this instanceof employee)){ // instanceof = türeyen bir nesne değil ise anlmaı katar ! = değil ise anlamı katar 
        return new employee(name,salary); // new yazmamıza gerek kalmaz
    }

    this.name=name;
    this.salary=salary;

    // böyle de yapabilirdik 
    // var self=this;

    // self.name=name;
    // self.salary=salary;
}

employee.prototype.calculateSalary=function () { 
    var month= new Date().getMonth()+1; // 0 dan başlayacağı için +1 de verdik  
    var tax=0;
    var total=0;
    // var tax=0, total=0;
    total=this.salary*month;

    //if(this.salary*month<=20000){}
    // bunlarla uğraşmak yerine yukarı var oluşturalım 
    if(total<=20000){
        tax=total*0.2;
    }else if(total>20000&&total<=30000){
        tax=total*0.25;
    }else {
        tax= total*0.3;
    }

    return{
        tax:tax,
        paid:total-tax
    }
 }

var emp1=  employee("ozan",10000); // new yazmadık dikkat edersek
var emp1_salary=emp1.calculateSalary();
//console.log(emp1.calculateSalary());
console.log(emp1);

var emp2= new employee("nida",8000);
var emp2_salary=emp2.calculateSalary();
//console.log(emp2.calculateSalary());
console.log(emp2);

console.log(`${emp1.name} isimli çalışan toplam ${emp1_salary.tax} TL vergi kesintisi ile bu geçen ayların toplamında ${emp1_salary.paid} TL maaş almıştır.`);

console.log((`${emp2.name} isimli çalışan toplam ${emp2_salary.tax} TL vergi kesintisi ile bu geçen ayların toplamında ${emp2_salary.paid} TL maaş almıştır.`));
