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
                    //console.log(res);| kontorl etme amaçlı yaptık 
                ui.showProfile(res.profile[0]);
                ui.showTodo(res.todo);
                }
            })
        .catch(err=>{
            ui.showAlert(text);
        })
   }
});