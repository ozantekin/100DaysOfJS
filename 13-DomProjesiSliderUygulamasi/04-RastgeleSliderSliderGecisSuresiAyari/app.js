var links=[
    {
        name:"Twitter",
        Image:"image/twitter.png",
        link: "https://twitter.com/ozantekindev"
    },
    {
        name:"LinkedIn",
        Image:"image/linkedIn.png",
        link: "https://www.linkedin.com/in/ardilozantekin/"
    },
    {
        name:"Medium",
        Image:"image/medium.png",
        link: "https://medium.com/@ozantekindev"
    },
    {
        name:"Instagram",
        Image:"image/instagram.png",
        link: "https://www.instagram.com/ozantekindev/"
    },
    {
        name:"Youtube",
        Image:"image/youtube.png",
        link: "https://www.youtube.com/channel/UC86HNI5ZoebM7zqAVQt6ouw"
    }
];

var index=0;

var slaytCount=links.length; 


var settings={
    duration:"2000", // 2 saniye
    random:false // true dersek random değişir
};

init(settings);

var interval;

document.querySelector(".fa-hand-point-left").addEventListener("click",function(){
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector(".fa-hand-point-right").addEventListener("click",function(){
    index++;
    showSlide(index);
    console.log(index);
});
// 1 den fazla ulaşmak istediğimiz için all ekle
//hand üzerine geldiği zaman slayt duraklar
document.querySelectorAll(".hand").forEach(function(item){
    item.addEventListener("mouseenter",function(){
        clearInterval(interval);
    });
});
// mosue leave olunca devam eder
document.querySelectorAll(".hand").forEach(function(item){
    item.addEventListener("mouseleave",function(){
        init(settings);
    });
});

function init(setting){

    var prev; // amaç aynı görselin üst üste gelmesini önlemek
    
    interval=setInterval(function(){

        if(settings.random){
            //random index
            do{
                index=Math.floor(Math.random()*slaytCount); // slaytcount 5 değer ama 4 index var onu floor ile 1 aşağı indiriyoruz
            }while(index==prev)
            prev=index;
        }else{
            // artan index
            if(slaytCount==index+1){ // amaç görselleri index numaralarına göre arka arkaya gösterme
                index=-1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        
        showSlide(index);
    },settings.duration)
    //setTimeout belli bir süre sonra 1 kere işler
    //setInterval clearInterval ile durdurmadığımız süre boyunca devam eder
    //clearInterval
}


function showSlide(i){

    index=i;
    if(i<0){
        index=slaytCount-1; // -1 olduğu zaman bizi 4 numaralı indexe gönderir  //length=5 index 0,1,2,3,4  length-1=4.index
    }
    if(i>=slaytCount){
        index=0;
    }

    document.querySelector(".card-title").textContent= links[index].name;
    document.querySelector(".card-img-top").setAttribute("src",links[index].Image);
    document.querySelector(".card-link").setAttribute("href",links[index].link);
}


