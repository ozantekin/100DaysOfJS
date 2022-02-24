// person constructor
function person(name){
    this.name=name;
}

person.prototype.introduce=function(){
    console.log("hello my name is " +this.name);
}

let p1 = new person("ozan");
p1.introduce();

// teacher constructor
function teacher(name,branch){
    person.call(this,name); // person çağırdık
    this.branch=branch;
}

teacher.prototype=Object.create(person.prototype);  // person prototype ile teacher prototype eşitledik 

teacher.prototype.constructor=teacher; // person constructor ile teacher constructor eşitlendi bunu yaparak onu değiştiriyoruz 

teacher.prototype.teach=function (){
    console.log("i teach " +this.branch);
}

let t1=new teacher("nida","math");
t1.introduce();
t1.teach();

// student cunstructor
function student(name,number){
    person.call(this,name);
    this.number=number;
}

student.prototype=Object.create(person.prototype);

student.prototype.constructor=student;

student.prototype.study= function(){
    console.log("my student number " +this.number + " i have already studied hard.");
}

let s1=new student("yiğit",100);
s1.introduce();
s1.study();

// headmaster

function headmaster(name,branch){
    teacher.call(this,name,branch); // person a  göndermek istemedik teacher göndermek istedik 
}

headmaster.prototype=Object.create(teacher.prototype);

headmaster.prototype.constructor=headmaster;

headmaster.prototype.shareTask=function(){
    console.log("i have already shared all the work.");
}

let h1= new headmaster("eylül","physics");

h1.introduce();  // person dan getirdik 

h1.teach();  // teacher dan getirdik

h1.shareTask();   // headmaster dan getirdik