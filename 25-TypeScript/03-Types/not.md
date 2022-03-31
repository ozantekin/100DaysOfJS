<h1 align="center"> Notlar </h1>

- TypeScript'te bir değişken tanımladığınızda o değişkenin içine farklı türde bir değişken atamayız.(JavaScript'te atabiliyorduk.) 
``` TypeScript

    let number = 5;
    number = "a";
```
- Dikkat:
``` TypeScript
let a: number;
let b:string;
let c: boolean;
let d: any;
let e: number[]; // bu dizi atması demekti => number türünde bir dizi atması yapmış olduk
let f: Array<number>; // dizi olacak dedik ve dizinin tipini belirledik
let g: any[];
```
- Yukarıdakilerin anlamı, a,b,c,... ismindeki değişkenler içerisinde tanımlayacağımız değişken türünü gösterir.
- Bu değişkenlerin içine bu şekilde de değer atması yapabiliriz.
``` TypeScript
let a: number = 1;
let b:string = "a";
let c: boolean = true;
let e: number[] = [1,2,3];
let f: Array<number> = [1,2,3]; 
```
- Not: e ve f atmaları tamamamen aynı ancak yazım farklılıkları var.
- Eğer e veya f için string bir ifade atarsanız hata alırsınız.
``` TypeScript
let g: any[1, "a", true]; 
```
- Yukarıdaki işlemde herhangi bir hata almayız. Çünkü dizinin tipini any olarak belirttik any içine istediğimiz bir tipi atabiliriz.   
- Dizi içerisindeki tip tanımlamarı kısım kısım yapmak istiyorsak: (Tuple)
``` TypeScript
let h: [string, number, boolean] = ["a", 5, false];
```
- Yukarıdaki örnekte belirttiğimiz kısımlarda farklı türlerde atmalar yaparsak hata alırız.
``` TypeScript
const kredi Payment = 0;
const havalePayment = 1;
const eftPayment = 2;
```
- Yukarıdaki yöntem yerine bu yöntemi de kullanabiliriz:
``` TypeScript
enum Payment{krediPayment, havalePayment, eftPayment};

let kredi = kredi.krediPayment; // 0
let haval = kredi.havalePayment; // 1
let eft = kredi.eftPayment; // 2
```
- `let kredi = kredi.krediPayment` diyerek bilgileri daha kolay bir şekilde alabiliriz.
- Eğer farklı bir eklemde yaparsak örnek:
``` TypeScript
enum Payment{krediPayment, havalePayment, kapıdaOdeme, eftPayment};

let kredi = kredi.krediPayment; // 0
let haval = kredi.havalePayment; // 1
let eft = kredi.eftPayment; // 3
```
- eftPayment değeri 2'den 3'e yükselmiş olur.
- Bu gibi problemlerin önüne geçmek adına bu yapılabilir:
``` TypeScript
enum Payment{krediPayment=0, havalePayment=1, kapıdaOdeme=3, eftPayment=2};

let kredi = kredi.krediPayment; // 0
let haval = kredi.havalePayment; // 1
let eft = kredi.eftPayment; // 2
```
- Başta değer ataması yapabiliriz yukarıdaki gibi.