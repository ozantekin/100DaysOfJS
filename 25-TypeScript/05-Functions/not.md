<h1 align="center"> Notlar </h1>

- Fonksiyona sayı gönderirsek bir sıkıntı yok: 
``` typescript
function getAverage(a, b, c){
    const result = (a + b + c) / 3;
    return "result: " +result;
}

getAverage(10, 20, 30);
```
- Ama sayısal değer yerine başka türde bir değer göndermiş olsak örneğin string bir değer, hata almamızı sağlar. Bu hatayı program aşamasında görmek için yapabiliriz.
``` typescript
function getAverage(a: number, b: number, c: number){
    const result = (a + b + c) / 3;
    return "result: " +result;
}

getAverage(10, 20, 30);
```
- Veya:
``` typescript
function getAverage(a: number, b: number, c: number): string{
    const result = (a + b + c) / 3;
    return "result: " +result;
}

getAverage(10, 20, 30);
```
- Parametreler number olacak ve fonksiyonda geri dönecek değeri iki nokta sonrasında belirttik.
- Parametreli number ayarladığımız için örneğin 10 yerine bir string ifade yazarsak hata alırız.
- Şimdi fonksiyona 3 parametre gönderelim ama sondaki parametre isteğe bağlı olmasını isteyelim: 
``` typescript
function getAverage(a: number, b: number, c?: number): string{
    const result = (a + b + c) / 3;
    return "result: " +result;
}

getAverage(10, 20, 30);
getAverage(10, 20);
```
- Bu sayede 2 parametre yazsak bile hata almayız örneğin 10 ve 20 tek yazılmış olsa. Ama soru işareti olmasa hata alırız. Bu sayede c artık optional olur.
- Parametreler belli değilse rest parameters kullanılır:
``` typescript
function getAverage(...a:number[]): string{
    let total = 0;
    let count = 0;

    for( let i=0; i<a.length;i++){
        total +=a[i];
        count++;
    }

    const result = total / count;
    return "result: " +result;
}

getAverage(10, 20, 30);
getAverage(10, 20);
getAverage(10, 20, 30,40);
getAverage(10);
```
- Bu sayede artık parametre değerine bağlı olmayız. Hata almayız.
- Yukarıda parametre değerini artık sayısal bir dizi olarak bekleriz. Parametre kaç taneyse ona göre bir işlem yapılabilir.
- Arrow Function ile yazalım:
``` typescript
const getAverage = ()void=> {
    
}

```
- Void: Geri dönüş değeri tanımlamadığımızı bu şekilde söyleyip result'un hata alması önüne geçeririz.
- Bir örnek daha:
``` typescript
function getAverage(a:number, b:number, c?:number) : string {
    let total = a + b;
    let count =2;

    if(typeof c !== "undefined"){
        total +=c;
        count++; 
    }

    const result = total/count;
    return "New Result: " +result;
}
getAverage(10, 20, 30);
getAverage(10, 20);
```
- 
