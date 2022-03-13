

var teams = [
    {score:30,team:"Başakşehir",lose:"15"},
    {score:27,team:"Hatay",lose:"16"},
    {score:24,team:"Rize",lose:"17"}
]

function addTeams(tm,callback){ // ekleme işlemi

    return new Promise(function(resolve,reject){

        setTimeout(() => {
            
            teams.push(tm);

            let added=true;

            if(added){
                resolve();
            }else{
                reject("hata:400");
            }

        });
        
    });

}    

function getTeams(){  // görme işlemi

    setTimeout((t) => {
        teams.forEach((t)=>{
            console.log(t.team);
        });
    }, (1000));

}

addTeams({score:21,team:"Erzurum",lose:"18"})
.then(getTeams) // thne ile bunlaı farklı founctionlara bağlayabiliriz 
.catch(function(err){
    console.log(err);
});

// (callback merdiveni ) yerine promise ile bu işlemeleri daha rahat bi şekilde yerine getirebiliriz