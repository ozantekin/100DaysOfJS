function string() {
    return "Hi there, I am Ozan.";
}

console.log(string());

//--------------

function promise (){
    return Promise.resolve("I am learning JavaScript.")
}

promise()
.then(response=>console.log(response));

//----------------

async function async(){
    return "Junior Front-End Developer.";
}

console.log(async()); // promise aldık. dikkat not kısmını okuyun anlayabilmek için 


async()
.then(response=>console.log(response));

//-------------

function getTeam(){

    return new Promise (resolve => {
        setTimeout (()=>{
            resolve("Team");
        },1000);
    });

}

function getPlayers(team){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(`11 Players in ${team}.`);
        },1000);
    });
}

getTeam()
    .then(getPlayers)
    .then(response => console.log(response));

    // yukarıdaki işlemi async await ile yapalım 

    async function getMatch(){
        let team = await getTeam(); // ilk burası çalışacak 
        let match = await getPlayers(team); // sonra burası çalışacak ilk await çalışmadan buraası çalışmaz
        console.log(match);
    }

    getMatch();

    // hata denetimi nasıl yapılacak görelim 

    var isError= true;

    function getFood(){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve("Food");
            }, 2000);
        });
    }

    function getBreakfast (food){
        return new Promise ((resolve,reject)=>{
            setTimeout(() => {
                if(!isError){
                    resolve("Bugün bir yumurta yendi");
                }else{
                    reject("Bugün kahvaltı yapılmadı!");
                }
            }, 2000);
        });
    }

    getFood()
        .then(getBreakfast)
        .then(response=>console.log(response))
        .catch(err => console.log(err))

        // async await ile hata yakalayalım şimdi

        async function getFood(){


            try{  
                let category = await getBreakfast();
                let eat= await getFoods(category);

                console.log(eat);

            }
            catch(error){
                console.log(error);
            }

           

        }

        