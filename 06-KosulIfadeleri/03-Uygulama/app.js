 var start = new Date('04/20/2019');
 start.setHours(0,0,0,0); //hours:, min?:, sec?:, ms?: 
 var finishMs = Date.now() - start.getTime(); // milisaniye cinsinden
var finishDay = Math.round(finishMs/(1000*60*60*24));

console.log(finishDay);

if (finishDay<=365) {
    console.log("1.yıl bakimi");
}else if (finishDay>365 && finishDay<=365*2) {
console.log("2.yıl bakımı");
}else if (finishDay>365*2 && finishDay <= 365*3) {
    console.log("3.yıl bakımı");
}else{
    console.log("bakımı süresi geçti");
}

// 2. uygulama

var result =prompt("who's there?")
// console.log(result);

if (result == "cancel") {
    console.log("cancelled");
}else if (result=="other") {
    console.log("I don't know you");
}else if (result=="admin") {
    
    var password = prompt ("enter your password: ");

    if (password=="cancel") {
        console.log("cancelled");
    }else if (password == "3434") {
        console.log("welcome admin");
    }else{
        console.log("wrong password");
    }
}