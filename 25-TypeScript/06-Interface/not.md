<h1 align="center"> Notlar </h1>

``` typescript
let travelTo = (x, y, a, b, c) => {
    // ..
}
travelTo(1, 2);
```

- Bu tarz birden fazla parametre göndereceksek eğer Bunun yerine bu kullanılablir:
    - Paremeter olarak obje gönderelim ve içine gerekli bilgileri yazalım.
``` typescript
let travelTo = (point) => {
    // ..
}
travelTo({
    x:1,
    y:2
});
```
- Burada her zaman objenin tipini doğru girmeliyiz. Uygulama derlenme zamanı hata almayabiliriz ama çalışma sırasında hata biliriz.
``` typescript
let travelTo = (point: {x: number, y: number}) => {
    // ..
}
travelTo({
    x:1,
    y:2
});
```
- Ekstra bir method eklemiş olsak: 
``` typescript
let travelTo = (point: {x: number, y: number}) => {
    // ..
}

let getDistance = (pointA:{x: number, y: number}, pointB:{x: number, y: number}) => {

}

travelTo({
    x:1,
    y:2
});
```
- Bu şekilde yazmak yerine bir `interface` tanımayabiliriz:
``` typescript
interface Point{
    x: number, 
    y: number
}

let travelTo = (point: Point) => {
    // ..
}

let getDistance = (pointA:Point, pointB:Point) => {
    // ..
}

travelTo({
    x:1,
    y:2
});
```
- Sürekli tekrarlamak yerinde interface tercih edilebilir.
- Gelin bir interface daha tanımlayalım: 
``` typescript
interface Point{
    x: number, 
    y: number
}

interface Passenger {
    name: string,
    phone: string
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
    getDistance(pointA: Point, pointB: Point): number;
    addPassenger(passenger: Passenger): void;
    removePassenger(passenger: Passenger): void;
}

let travelTo = (point: Point) => {
    // ..
}

let getDistance = (pointA:Point, pointB:Point) => {
    // ..
}

travelTo({
    x:1,
    y:2
});
```
- Dikkat edersek gövdelerini yazmıyoruz fonksiyonlar dışarıda sadece şemalarını belirtiyoruz.
- <b>Özet:</b>
    - İnterface aslında  üretecek olduğumuz bilgilerin bir imzasını taşır onların nasıl hareket etmesi gerekitğini bildririr. 
    - Yaptığımız kısımda ise araç tanımlarken o aracın hangi özelliklere sahip olması gerektiği gibi bilgileri tutan bir şema gibi düşünebiliriz.
    - Bu şemadan bir nesne yani bir araç tanımlayabilmek için, kopyalayabilmek için bunu class'a çevirmemiz gerekiyor.
    - Şu anlık yaptığımız aracın o anki pozisyonu, hangi noktaya gidecek, herhangi bir noktalar arasındaki mesafei ölçmek, araca yolcu eklemek, ya da araçtan bir yolcuyu silmektir.
