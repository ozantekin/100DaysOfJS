var hak=5 , can; // hak can yapma aynı kefede yazılır
var tahmin , sayac=0; // sayac 0 dan başlamasını istiyoruz
var sayi=Math.floor((Math.random()*10)+1); // +1 vermemizin nedeni 0 sonucunu almak istemememiz
can=Number(prompt("Kaç kerede bileceksiniz?"));
hak=can;

console.log(sayi);

while (hak>0) {
hak--; // hak sonsuz olmaması için verilmeli
sayac++; // tahmin arttıkça sayaç artacak
    tahmin=Number(prompt("bir sayi giriniz"));

    if(sayi==tahmin){
        console.log(`tebrikler ${sayac} defada bildiniz`); 
        console.log(`score: ${100-(100/can)*(sayac-1)}`); // bildiğimiz son soru bu işin içine katılmasını istemiyoruz o yüzden -1 de veririz. Bildiğimiz soru puandan çıkartılmaz çünkü guess ile counter aynı artıyor  yani 1 artıyor ama bildiğimiz zaman sayaç ve sayı 1 artsada puanın azalmaması lazım o yüzden bildiğimiz sorudaki artan 1 i alıyoruz.  (Tam anlayabilmek için 1 yazarak ve yazmayarak deneyin ve çalıştırın)
        break; // doğru olursa break ile loop durdurulur
    }else if (sayi>tahmin){
        console.log("yukari");
    }else{
        console.log("asagi");
    }

    if(hak==0){
        console.log("hakkiniz bitti. Sayı :"+sayi);
    }
}

