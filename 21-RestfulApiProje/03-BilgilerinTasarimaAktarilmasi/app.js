const profile = new Profile();
const ui = new UI();

const searchProfile = document.querySelector("#searchProfile");

searchProfile.addEventListener("keyup",(event)=>{
    ui.clear(); // keyup olduğu zaman önceki işlemleri siler
   let text= event.target.value;

   if(text !== ""){
     

      profile.getProfile(text)
        .then(res => {
            if(res.profile.length===0){
                ui.showAlert(text);
            }else{
               ui.showProfile(res.profile[0]) 
            }
        });
   }
});