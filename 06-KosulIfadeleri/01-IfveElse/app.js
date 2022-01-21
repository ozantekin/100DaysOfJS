const first = "ozan";
const age=22;
const student = true;
const school = "university";

if(first === "ozan"){ // doğru ise console süslü parantez içini yazar
    console.log("merhaba ozan");
}
// 2 yerine 3 eşittir kullanmak farkında olmadan yapabileceğiniz hataların önüne geçer
if(age===22){
    console.log("yaşınız 22");
}

if (student){ // true olduğu için yazmamıza gerek yok false olsaydı yazdırmazdı
    console.log("merhaba öğrenci");
}

const old = false; 

if(old){
    console.log("yaşlı");
}else{ // if içi false dönüyorsa else yazılır ve console içine else yazdırılır
    console.log("genç");
}
// 2.bir şart ekleyelim
if (age>=18){

    if(school==="university"){
        console.log("ehliyet alabilirsiniz");
    }else{
        console.log("eğitim durumunuz yetersiz");
    }
   
}
// ya da || kullanarak koşul yapalım 
const high="high school";
const elemantary="elemantary school";

if (age>=18) {
    
    if ((elemantary===false) || (high==="high school")){
        console.log("ehliyet alabilirsiniz");
    } else{
        console.log("eğitim durumunuz yetersiz");
    }
        
    
}

// || ikisi false çıkarsa tek false verir

if (age>=18) {
    
    if ((elemantary===false) || (high===false)){
        console.log("ehliyet alabilirsiniz");
    } else{
        console.log("eğitim durumunuz yetersiz");
    }    
}

// && age 0 dan büyük ve 12 den küçük ise 

if ( age>0 && age<12){
console.log(`${first} is a child `);
}else if (age>=13 && age<19 ){  // else if ile bir koşul daha bağlayabiliriz
console.log(`${first} is a teenager`);
} else{
    console.log(`${first} is a adult`); 
}

// undefined   // !, not anlamı katar !==, eşit olmayan
let id ="123456"

if (typeof id !=='undefined'){
    console.log("id: " +id);
}else{
    console.log(" no id");
}

if (typeof id1 !=='undefined'){
    console.log("id: " +id1);
}else{
    console.log("no id");
}