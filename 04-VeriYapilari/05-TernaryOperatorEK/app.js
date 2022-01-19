const fullName="ozan tekin";
const city="İstanbul";
const yearOfBirth=2000;

let val2;
val2=`my name is ${fullName} I'm ${(2022-yearOfBirth)? "over 18":"under18"} and I live in ${city}`;
console.log(val2);

// ${(2022-yearOfBirth)? (soru işareti ise anlamı katar) "over 18":"under18" (doğru ise soru işaretinden sor-nra yazılınaı yazdırır)
//yaşı 18 den büyük ise over 18 yazdırır