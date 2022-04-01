<h1 align="center"> Notlar </h1>

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
```

- `taxi_1 => 34 abc 3434` plakalı araç için yapacağımız özellikleri bu şekilde olabilir mesela:
    - `taxi_1.currentLocation =>` Taksinin bize o anki konumumu gönderecek.
    - `taxi_1.travelTo =>` Taksi bu konuma gidecek.
- `taxi_2 => 35 edf 3535` yukarıdaki özellikleri taksi 2 için de kullanabilirdik:
    - `taxi_2.currentLocation =>` Taksinin bize o anki konumumu gönderecek.
    - `taxi_2.travelTo =>` Taksi bu konuma gidecek.
- Obje oluşturma aşmasına gelmediğimiz için şu anlık bu kadar tanım  yeter.
- `class.ts`'e tsc uygularsak .js dosyasına sadece yorum satırları gider. `Interface`'ler JavaScript dosyası içinde bir yer bulmadı.
- Bizim obje üretebilmemiz için `class`'a ihtiyacımız var.
-   Class interface: 
``` typescript
    interface Point{
        x: number, 
        y: number
    }

    interface Vehicle {
        currentLocation: Point;
        travelTo(point: Point): void;
    }
```
- Class `implements` nedir:
``` typescript
    class Taxi implements Vehicle {

}
```
- Implements dediğimiz zaman Vehicle içindeki özellikleri Taxi içinde de tanımlamış oluyoruz:
``` typescript
    class Taxi implements Vehicle {
        currentLocation: Point;
        travelTo(point: Point): void{

        }
    }
```
- Taxş'ye özel olan özellikleri eklemek için:
``` typescript
class Taxi implements Vehicle {
        // ....
        currentLocation: Point;
        travelTo(point: Point): void{

        }
    }
```
- Class'ın Vehicle interface'sine bağlı olduğunu ve onun içerisindeki özellikleri implement ettiğini ve bunun üzerine ekstradan özellikler de ekleyebileceğimizi bilmeliyiz.
- Class yapısı bizim için bir obje üretmek için gerekli olan yapıyı bize sunar.
- .js dosyasında:
    - interface yer kaplamaz.
    - taxi ve bus class tanımlamasının fonksiyon karşılığı yapılır.

