var welcome=function(){
    console.log("welcome "+this.name);
}

welcome();

var ozan={name:"ozan"};
var nida={name:"nida"};

/*
function parametre almıyorsa bunlar kullanılabilir
ozan objesi this yerine geçecek
nida objesi this yerine geçecek
call ve apply bu amaçla kullanılır
farkı ise parametre kullanımlarında oluşur
*/

welcome.call(ozan); 
welcome.call(nida);

welcome.apply(ozan);
welcome.apply(nida);

// burada dönecek değer yeni bir function'dur

welcomeOzan=welcome.bind(ozan); 

welcomeOzan();

welcomeNida=welcome.bind(nida);

welcomeNida();

// call ve apply fark

var seeYou=function(a,b){
    console.log("see you "+this.name+ ". Are you interested in "+a+" and "+b+"?");
}

seeYou();

var ozan={name:"ozan"};
var nida={name:"nida"};

seeYou.call(ozan,"JavaScript","Solidity"); 
seeYou.call(nida,"JavaScript","Solidity");

seeYou.apply("ozan",["JavaScript","Solidity"]);
seeYou.apply("nida",["JavaScript","Solidity"]);

// () içi boş kalınca undefined alırız çünkü this objesi göndermemize gerek kalmadı biz function u tamamen özelleştirdik thid yerine ozan ve nida zaten getirildi

seeYouOzan=seeYou.bind(ozan); 

seeYouOzan("Python","swift"); //!

seeYouNida=seeYou.bind(nida); 

seeYouNida("flutter","JavaScript"); //!
