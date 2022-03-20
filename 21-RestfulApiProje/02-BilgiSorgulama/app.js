const profile = new Profile();

const searchProfile = document.querySelector("#searchProfile");

searchProfile.addEventListener("keyup",(event)=>{
   let text= event.target.value;

   if(text !== ""){
      // console.log(text); | çalışıp çalışmadığını kontrol ettik 

      profile.getProfile(text)
        .then(res => {
            if(res.profile.length===0){
                // buraya boş tutmamızın nedeni her bir keyup olayı gerçekleştiğinde bir sorgualama yapılıyor sonucu yazılsın istemiyoruz 
            }else{
                console.log(res.profile[0]) //sadece res ile dize (string) içinde bir profile bilgisi alırız. res.profile ile tüm object gelir. [0] ile tüm object almak yerine 0.indexi alıyoruz bunu yapma amacımız bilgiyi direkt kullanmak istememiz
            }
        });
   }
});