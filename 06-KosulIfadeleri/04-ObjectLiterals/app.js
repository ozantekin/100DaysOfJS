let val;
let val1;
let val2;
let val3;
let val4;

let person ={
    firstName:"ozan",
    lastName:"tekin",
    age:22,
    hobbies:["researcher","coder"],
    address:{
        city:"Istanbul",
         country: "Turkiye"
    },
    getBirthYear : function(){ // ileride göreceğiz
        return 2022-this.age;  // hangi nesnenin içerisinde this dersek o nesnenin referasını almış oluruz
    }
};

console.log(person);
console.log(typeof person);

val=person.lastName;
val1=person["firstName"];
val2=person.hobbies[1];
val3=person.address.city;  // val3=person.address["city"];
val4=person.getBirthYear();

console.log(val);
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// birden fazlası için, dizi gibi sonra süslü parantez 



let people =[

    {first:"ozan",last:"tekin"},
    {first:"nida",last:"tekin"},
    {first:"yiğit",last:"tekin"}

];
console.log(people);

val5=people[0];
val5=people[0].first;
console.log(val5);

// döngüler diğer değinmek için şimdiden yazdım
for (let i=0;i<people.length;i++){
    console.log(people[i]);    // console.log(people[i].first);
}