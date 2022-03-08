const first = ()=>{
    console.log("first");
    second();
}

const second = ()=> {
    console.log("second");
    third();
}

const third = ()=> {
    console.log("third");
}

first();

// 
 const firsNew = () => {
     console.log("Birinci");
     secondNew();

 }

 const secondNew = () => {

    setTimeout(()=>{
        console.log("İikinci"); // 3 saniye sonra gerçekleşeceği için bunu sıraya aldı
    },3000) // saniye sonra gerçekleşecek
     thirdNew();
 }

 const thirdNew = () => {
     console.log("Üçüncü"); // secondNew sırada 3 saniy beklerken bunu yazdırır 
 }

 firsNew();