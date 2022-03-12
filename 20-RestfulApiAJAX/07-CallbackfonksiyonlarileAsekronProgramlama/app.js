//callback, yapılacak işlemlerin sırasını yönetme işlemine deir özet olarak
var teams = [
    {score: 98, team:"fenerbahçe", win:30},
    {score: 86, team:"galatasaray", win: 25},
    {score: 74, team:"beşiktaş", win:23}
]

function addTeams (tm,callback){ // ekleme işkemi


    setTimeout(() => {
        teams.push(tm);
        callback(); // callback function çağırdık
    },2000);
}

function getTeams(){


setTimeout(() => { // görme işlemi
    teams.forEach(t=>{
        console.log(t.team);
    });
}, 1000);
}

//addTeams({score:88, team:"trabzon",win:27});
//getTeams(); // bu şekilde göremeyiz bu sorunu callback fonksiyonu ile çözebilirz. tm yanına callback ekleyeceğiz


addTeams({score:88, team:"trabzon",win:27},getTeams); // sorun çözüldü


//

let added = true; // false olursa 500 hatası alırız true yaparsak eklenen city alırız

var cities = [
    {plaque:34,city:"İstanbul",million:15},
    {plaque:06,city:"Ankara",million:6},
    {plaque:35,city:"İzmir",million:4}
]

function addCities(cty,callback){

        if (added){
            setTimeout(() => {
                cities.push(cty);
                callback(null,cty);
            }, 3000);
        

    } else{
        callback("500",cty); // 500 hatası döner dedik
    }

}

function getCities (){
    setTimeout(() => {
        cities.forEach(c=>{
            console.log(c.city);
        })
    }, 1500);
}

addCities({plaque:21,city:"Diyarbakır",million:2},function(err,data){
    if (err){ // hata varsa bu yazar
        console.log("hata"+err);
    }else{ // hata yoksa bu yazar
        console.log(data);
    }
});