const fullName="ozan tekin";
const city="İstanbul";
const yearOfBirth=2000;

let val;
val="my name is "+fullName+"."+
     "I'm " +(2022-yearOfBirth)+ " years old"+
     ' and I live in '+city+".";
console.log(val);

// alt gr + iki kez noktalı virgül
let val1;
val1=`my name is ${fullName} I'm ${2022-yearOfBirth} years old and I live in ${city}.`;  
console.log(val1);


