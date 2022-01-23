var heart=5,duty;
var guess,counter=0;
var numbers=Math.round((Math.random()*10)+1); // +1 vermemizin nedeni 0 sonucunu almak istemememiz
duty=Number(prompt("Kaç kerede bileceksiniz?"));
heart=duty;

console.log(numbers);

while (heart>0) {
heart--; // heart sonsuz olmaması için verilmeli
counter++;
    guess=Number(prompt("bir sayi giriniz"));

    if(numbers==guess){
        console.log(`tebrikler ${counter} defada bildiniz`); // doğru olursa break ile loop durdurulur
        console.log(`score: ${100-(100/duty)*(counter-1)}`); // bildiğimiz son soru bu işin içine katılmasını istemiyoruz o yüzden -1 de veririz. Bildiğimiz soru çıkartılmaz.  (Tam anlayabilmek için 1yazarak ve yazmayarak deneyin ve çalıştırın)
        break;
    }else if (numbers>guess){
        console.log("yukari");
    }else{
        console.log("asagi");88
    }

    if(heart==0){
        console.log("hakkiniz bitti :"+counter);
    }
}

