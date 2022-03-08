var xhr = new XMLHttpRequest();


// herhangi bir durum değiştiğinde bu olay tetiklenit
xhr.onreadystatechange = ()=> {
    if(xhr.readyState === 4 ){ // xhr.status=200 durum başarılı demek 

        if(xhr.status === 200){
            console.log(xhr.responseText); // ekrana yazdırır
        }else if (xhr.status===404){ // örnek msg1.txt yazarsak bunu yazdırır bulunamayacağı 404 alacağız çünkü
            console.log("kaynak bulunamadı");
        } 
    }
}

xhr.onprogress =  () => {
    console.log("on progressing"); 
    /* 
    ilk başta bu çıktı başlatılır daha sonra sonuç yazdırılır 
    yani süreç devam ederken yazdırılır 
    loading ekranları için kullanılabilir
    */
}

xhr.open("GET","msg.txt",true);
xhr.send();

console.log("JavaScript"); 
/*
Bunu en başa yazdırdı sorgumuz sürerken bizi blocklamadı
open içindeki true yerine false olsaydı işlem blocklanırdı çünkü senkron olurdu ve bize en son gösterilirdi

*/



