let personProto ={
    calculateAge: function (){
        return 2022 - this.yearOfBirth;
    }
}

console.log(personProto);

let ozan = Object.create(personProto);

ozan.name="ozan";
ozan.yearOfBirth=2000;
ozan.occupation="developer";

console.log(ozan);
console.log(ozan.calculateAge());

// 2. yazılış şekli 
let nida = Object.create(personProto,{
    name:{valu:"nida"},
    yearOfBirth:{value:2000},
    occupation:{value:"student"}
});

console.log(nida);
console.log(nida.calculateAge());