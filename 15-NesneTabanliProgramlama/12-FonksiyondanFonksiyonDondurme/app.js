function question (hobby){
    switch(hobby){
        case "car":
            return function(name){
                console.log(name+" do you have a car?");
            }
        break;

        case "book":
            return function (name){
                console.log(name+" what is your favourite book?");
            }
        break;

        case "software" :
            return function(name, type){
                console.log(name+ " are you interested in " +type+ "?");
            }
        break;
            
        default:  // varsayılan bir mesaj vermek için kullanılır
            return function(name){
                console.log(name+ " how are you?");
        }
    }
}


var carQ =question("car");

carQ("ozan");

carQ("nida");

var bookQ=question("book");

bookQ("yiğit");

bookQ("baro");

var softwareQ=question("software");

softwareQ("ozan","javascript");

softwareQ("baro","solidity");