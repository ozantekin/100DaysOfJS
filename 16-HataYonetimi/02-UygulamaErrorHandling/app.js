document.getElementById("btn").addEventListener("click",function(e){
    var userName=document.getElementById("userName");
    var idNumber=document.getElementById("idNumber");
    var errors=document.getElementById("errors");
    errors.innerHTML=" "; // hata düzeltiği zaman eskiden kalan error mesajı gider

    try{
        if(userName.value.length===0){
            throw new Error("user name is required");
        }
        if(userName.value.length>20){
            throw new Error("user name is too long");
        }
        if(idNumber.value.length===0){
            throw new Error("id number is required");
        }
        if(isNaN(idNumber.value)){
           throw new Error(" id number is not numeric");
        }
        console.log("form is submitted");
    }catch(err){
        errors.innerHTML=err.message;
    }finally{
        // ? hata olsun olmasın yani catch bloğu çalışsın çalışmasın her durumda userNmae ve idNumber kontrolleri  sıfırlansın istiyorsak
        // ? console birden fazla form is submitted yazılmasının önüne geçmiş oluruz
        userName.value="";
        idNumber.value="";
    }
    

    e.preventDefault(); // fonksiyon çağırıldığında oluşan eventin işlevini geçersiz kılar
});