function yasHesaplama(dogumYili){
    return 2022 - dogumYili;
}

let yasOzan = yasHesaplama(2000);
let yasNida=yasHesaplama(2001);
let yasYigit=yasHesaplama(2015);

console.log(yasOzan);
console.log(yasNida);
console.log(yasYigit);

// uygulama-2

function emekliOlma(dogumYili,isim) {
    let yas =yasHesaplama(dogumYili);
    let emeklilik = 65 - yas;

    if (emeklilik>0){
        console.log(`${isim} senin emeklilik yaşınıza ${emeklilik} yıl kaldı`);

    }else{
        console.log(`${isim} zaten emekli olmuşsun`);
    }
}

let ozan=emekliOlma(1965,"ozan");
let nida= emekliOlma(1955,"nida");
let yigit= emekliOlma(2008,"yiğit");