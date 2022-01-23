let cars=["bmw", "opel", "slx"];

for (let i=0; i<cars.length; i++){
    console.log(cars[i]);
}

// for-in 
for ( let i in cars){
    console.log(`index : ${i} value : ${cars[i]}`);
}

// foreach
cars.forEach(function (item) { 
console.log(item);
 });

 let people=[
{first:"ozan", last:"tekin"},
{first:"nida",last:"tekin"},
{first:"yiğit",last:"tekin"}
 ];

 for(let i=0;i<people.length;i++){
     console.log(people[i].first);
 }

 // for-in
 for (let i in people){
     console.log(`index : ${i} value : ${people[i].first}`);
 }

 //foreach
 people.forEach(function (name) {
     console.log(name.first);
 })

 // map : returns an array 
 let val=people.map(function(id){
return id.first + " "+ id.last;
 });
 console.log(val);

 //map
 let numbers=[1,2,3,4,5,6,7,8,9,10];
 let num = numbers.map(function(n){
     return n*n;
 });
 console.log(num);