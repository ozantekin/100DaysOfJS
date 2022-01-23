// for loop

// 1)i, 0 dan başlatır | 2) i, 10 dan küçük değerleri sağlar ise | 3) i+1 yapar (i++) | 4) console ekrana yazdırır (10 dan küçük olan)

// for(let i=0; i<10; i++){ 
//     console.log(i);
// }

for (let i=1; i<10; i++){
    if (i==2){
        console.log("en sevdiğim rakam :"+i);
        continue; // code tekrarını önler sadece console log yazımı 3 ve yukarıdaki değeri yazar ama continue ile tekrar kalkar
    }
    if(i==7){
        console.log("en sevmediğim rakam :"+i);
        break; // code loopunu durdurur
    }
    console.log(i);
}

// while loop 

// for(i=0; i<10; i++){
//     console.log(i);
// }

// yukarıdaki ile aynı çıktı
let i =0;
while(i<5){
    console.log(i);
    i++;
}

// do-while loop döngüsü
// fark : yukarıda ilk koşula bakar (while) sonra çıktı verir ama bunda sonda koşulu sorar sonra başa döndürür yani başta her zaman işletilir sonda false dönerse başa dönmez.
let a=0;
do{
    console.log(a);
    a++;
}while(a<10)


for ( let b =10; b>0;b--){
console.log(b);
}

//toplar
let sum = 0;
for (let b=10; b>0; b--){
    sum+=b;
}
console.log(sum);

// çarpma 
 let multip = 1; // 0 yaparsak 0 sonucunu alırız

for(let b =10; b>0; b--){
    multip*=b;
}
console.log(multip);



// sadece çift sayıları çarpma
// %2==0  çiftleri alır
// %2==1 tekleri alır
// basit bir matematik
let double = 1; 
for ( let b =10; b>0; b--){
    if(b%2==0){
        double*=b;
    }
}
console.log(double);



// iç içe for 

for ( let i =0; i<4; i++){
    for (let j=0; j<4; j++){
        console.log(`i:${i} j:${j}`); // ""i :" +i"
    }
}


// uygulama

let val="";

for ( let z=0; i<20; i++){
    for(let w=0;w<20;w++){
        val +="* ";
    }
}
console.log(val);



let val1="\n"; // alt satıra alır başı

for ( let z=0; z<20; z++){
    for(let w=0;w<20;w++){
        val1 +="* ";
    }
    val1+="\n";
}
console.log(val1);