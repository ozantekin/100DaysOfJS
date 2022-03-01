//object literals
var list = {
    team: "Türkiye",
    players: ["Burak","Arda","Melih","Cenk"],
    substitute : function(){
        this.players.map(function(player){
            console.log(`${this.team} ${player}`); // this.team undefined alırız çünkü team burada tanımlanmıyor. Yeni bir function olduğu için yeni bir context oluşturuldu.
        })
    }
}

list.substitute();

console.log("------------------------------------------------------");

// ES5
var list = {
    team: "Türkiye",
    players: ["Burak","Arda","Melih","Cenk"],
    substitute : function(){
        // ES5
        var self = this; // this referance aldık. 
        this.players.map(function(player){
            console.log(`${self.team} ${player}`); 
        })
    }
}

list.substitute();

console.log("------------------------------------------------------");

// ES6
var list = {
    team: "Türkiye",
    players: ["Burak","Arda","Melih","Cenk"],
    substitute : function(){
        //ES6
        this.players.map((player) =>{ // arrow burada yeni özel bir this objesi oluşturmuyor.
            console.log(`${this.team} ${player}`); 
        })
    }
}

list.substitute();

// NaN sample
function game(){
    this.live=0;
    this.addLive= function(){
        this.oneUp = setInterval(function(){ // yine function içinde yeni bir function oluşturduk 
            console.log(++this.live); // her seferinde 1 arttıralım anlamına gelir
        },1000) // saniyede 1 artar
    }
}

let player = new game();
player.addLive(); // NaN alırız 

// ES5 Sample
function social(){
    this.like=0;
    this.addLike=function(){
        //ES5
        var self=this;
        this.oneUpLike=setInterval(function(){
            console.log(++self.like);
        },1000);
    }
}

let customer = new social();
customer.addLike();

// ES6 sample
function donation(){
    this.donation=0;
    this.addDonation=function(){
        this.oneUpDonation=setInterval(()=>{ // yeni arrow function içinde oluşan this ile donation içinde oluşan this tamamen aynı objeyi temsil ettiğinden dolayı aynı sonucu alırız
            console.log(++this.donation);
        },5000) // 5 saniyede bir gelir
    }
}

let people = new donation();
people.addDonation();