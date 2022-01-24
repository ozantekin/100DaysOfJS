
// primitive type: kopyası gelir 
// reference type: kopyası gelmez, kendisi gelir.
// detaylı cheat sheet 01-JavaScriptGiris içinde


var hesapA ={
    ad: "ozan",
    hesapNo: "123456",
    bakiye: 2000,
    ekHesap:1000
}

var hesapB={
    ad:"nida",
    hesapNo:"654321",
    bakiye:4000,
    ekHesap:2000
}

function paraCek(hesap,miktar){
    console.log(`merhaba ${hesap.ad}`);

    if (hesap.bakiye>=miktar){
        hesap.bakiye -= miktar;  // hesap.bakiye = hesap.bakiye-miktar;  // bu işlem bunu paraCek(hesapA,3000);  tekrar yazdığımız ekrana ikişer kez çıkmasını önler bakiyeden kullanılan düşürülür
        console.log("paranızı alabilirsiniz");
    }else {
        var sum=hesap.bakiye+hesap.ekHesap;

        if (sum>=miktar) {
            if (confirm("ek hesabınızı kullanmak ister misin ?")) {
                console.log("paranızı alabilirsiniz");
                var bakiye=hesap.bakiye; // bakiye bilgisini alalım 
                var ekHesap=miktar-bakiye; // bakiyeyi tamamen bitirdikten sonra ekhesaptan çekilecek miktarı bulmak için kullanırız
                hesap.bakiye=0; // hesap bakiyeyi tamamen kullanıyoruz o yüzden ekhesaptan çekim yapıyoruz 
                hesap.ekHesap=hesap.ekHesap-ekHesap;  // bu 4 işlem bakiyede bu kadar para yoksa ne yapacağız sorusunu cevaplar
            }else{
                console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} TL bulunmamaktadır`);
            }
        }else{
            console.log("üzgünüz bakiye yetersiz :(");
        }
    }
}

paraCek(hesapA,2000);
paraCek(hesapA,1000); 
// miktar değerlerini arttırarak ve azaltarak inceleyin

// paraCek(hesapB,4000);
// paraCek(hesapB,3000);
