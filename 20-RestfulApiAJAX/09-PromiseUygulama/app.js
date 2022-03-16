var p = new Promise(function(resolve,reject){
    if(true){
        resolve("success");
    }else{
        reject("Failure");
    }
});

p.then(function(data){
    console.log(data);  // if içi true olduğu için then yazdırırlır 
}).catch(function (error) { 
    console.log(error);
 });


new Promise(function(resolve,reject){

    setTimeout(() => {
        resolve(5);
    }, 1000);

}).then(function(number){
    console.log(number);
    return number*number; //1. then'de döndürdüğümüz değeri ikinci then ile yakalıyabiliriz. bunu bu şekilde devam ettirebiliriz.
}).then(function(number){
    console.log(number);
    return number*number;
}).then(function(number){
    console.log(number);
});

// hata göndermediğimiz için catch kullanmamıza gerek yok

const isMomHappy = true;

const willGetNewPhone = new Promise ((resolve,reject)=>{
    if(isMomHappy){
        const phone = {
            name:"Iphone 13 Pro Max",
            price: 30000,
            color: "gold"
        }
        resolve(phone);
    }else{
        const error = new Error("mom is not happy");
        reject(error);
    }
});

// bir şema oluştruduk şimdi bu oluşturduğumuz şemayı kullanalım 

const showToFriends =function(phone){
    const message = "He friends this my new phone " + phone.name;
    return Promise.resolve(message) // kısa kullanımı
}

const askMom = function(){
    willGetNewPhone
        // .then(data=>{ // anne mutlu
        //     console.log(data)
        // })
        .then(showToFriends) // showToFriends çağırdık
        .then(message=>console.log(message)) // 1.then ile döndürdüğümüz değeri ikinci then ile çağırdık 
        .catch(error=>{ // anne mutsuz
            console.log(error);
        })
}

askMom();

