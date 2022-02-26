function welcome(){
    var days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

    var today = new Date ();

    var msg="welcome. today is "+days[today.getDay()];

    return msg; // mesajı geri gönderdik
}

console.log(welcome());

// sayfa yüklendiği anda bu mesajın sadece bir kere gelmesini istiyoruz bunun için immediate functionlar işimize yarayacak

// 1.yol
// (function(){

// })(); 

// 2.yol
// (function (){

// }()); 

(function (){
    var days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

    var today = new Date ();

    var msg="welcome. today is "+days[today.getDay()];

    console.log(msg);
}());
//---------------------------------------------------------------------------------
(function (name){
    var days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

    var today = new Date ();

    var msg="welcome. " +name+ " today is "+days[today.getDay()];

    console.log(msg);
}("ozan"));

