var PlayerController=(function(){

    // private member 
    var team = [];

    const addPlayer = function (player){
        team.push(player);
    }

    const removePlayer = function(player){
        var index = team.indexOf(player); // reminder: indexof ile hanig index'te olduğun buluyoruz
        if(index>=0){ // yani bu eleman colleciton içinde buunmuşsa
            team.splice(index,1); // indexten başlayarak 1 eleman sil
        }
    }

    const getPlayers = function () { 
        return team;
     }

     //public members
     return{
         addPlayer,
         removePlayer,
         getPlayers
     }

})();


PlayerController.addPlayer({name:"ozan",number:03});
PlayerController.addPlayer({name:"yiğit",number:07});
PlayerController.addPlayer({name:"ibraham",number:01});

console.log(PlayerController.getPlayers());

// 2.yol -----------------------------

var PlayerController=(function(){

    // private member 
    var team = [];

    const addPlayer = function (player){
        team.push(player);
    }

    const removePlayer = function(player){
        var index = team.indexOf(player); // reminder: indexof ile hanig index'te olduğun buluyoruz
        if(index>=0){ // yani bu eleman colleciton içinde buunmuşsa
            team.splice(index,1); // indexten başlayarak 1 eleman sil
        }
    }

    const getPlayers = function () { 
        return team;
     }

     //public members
     return{
         addPlayer,
         removePlayer,
         getPlayers
     }

})();


var players = [
    {name:"ozan",number:03},
    {name:"yiğit",number:07},
    {name:"ibraham",number:01}
];

PlayerController.addPlayer(players[0]);
PlayerController.addPlayer(players[1]);
PlayerController.addPlayer(players[2]);
//sile işlemini yapalım
PlayerController.removePlayer(players[1]);


console.log(PlayerController.getPlayers());

//---------------------------------------

var players = [
    {name:"ozan",number:03},
    {name:"yiğit",number:07},
    {name:"ibraham",number:01}
];

var PlayerController=(function(data){ // playercontroller tarafından parameter bekleniyor 

    // private member 
    var team = data || []; //yukarıda parameter bekleniyordu dolayısıyla data burada eğer null değilse data teame eşit olur aksi bir durumda ise team boş bir dizi olarak oluşturulur
    const addPlayer = function (player){
        team.push(player);
    }

    const removePlayer = function(player){
        var index = team.indexOf(player); // reminder: indexof ile hanig index'te olduğun buluyoruz
        if(index>=0){ // yani bu eleman colleciton içinde buunmuşsa
            team.splice(index,1); // indexten başlayarak 1 eleman sil
        }
    }

    const getPlayers = function () { 
        return team;
     }

     //public members
     return{
         addPlayer,
         removePlayer,
         getPlayers
     }

})(players); // parameter gönderdik

PlayerController.addPlayer(players[0]);
PlayerController.addPlayer(players[1]);
PlayerController.addPlayer(players[2]);
//sile işlemini yapalım
PlayerController.removePlayer(players[1]);


console.log(PlayerController.getPlayers());

//-----------------------------

// module extenting

 var extended = (function(m){

    m.sayHello= function(){ // m i burada genişletiyoruz
        console.log("hello from extended module")
    }

    return m;

 })(PlayerController || {}); // genişletiyoruz burada gönderdiğimiz modül m yerine geçecek /// ||{} --> modüle boş bir null parametresi gelirse boş bir object göndermiş olalım anlamına gelir

 extended.sayHello();
 console.log(extended.getPlayers()); // genişlettik ve içinden PlayerController içersindeki bu bilgilere de ulaşabildik 